import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { CustomerModel, fetchCustomerInfo } from "@/models/Customer";
import db from "@/lib/db";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadImageToS3(file, fileName) {
  const resizedImageBuffer = await sharp(file).resize(400, 500).toBuffer();
  const imageMetadata = await sharp(file).metadata();

  const contentType = imageMetadata.format === 'jpeg' ? 'image/jpeg' : 'image/png';

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${process.env.NEXT_PUBLIC_AWS_INSIDE_PATH}/${fileName}`,
    Body: resizedImageBuffer,
    ContentType: contentType,
    ACL: 'public-read',
  };
  
  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  return fileName;
}

export async function POST(request) {
  try {
    await db.connect();
    const formData = await request.formData();
    // console.log("form",formData);
    const customerId = formData.get('customerId');
    //check_existing Customer
    const customer = await CustomerModel.findOne({
      _id: customerId,
    });
    
    if (!customer) {
      return NextResponse.json({ message: 'User Does Not exists', }, { status: 409 });
    }
    
    const file = formData.get("file");
    
    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }

    const mimeType = file.type;
    const fileExtension = mimeType.split("/")[1];

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = uuid() + "." + fileExtension;
   
    const uploadedFileName = await uploadImageToS3(buffer, fileName);
    // console.log("uploadedFileName",uploadedFileName);
    const imageData = customer.personal_details;
    imageData.profile_image = `${process.env.NEXT_PUBLIC_AWS_INSIDE_PATH}/${uploadedFileName}`;
    const result = await CustomerModel.updateOne(
      { _id: customerId },
      { $set: {personal_details: imageData} }
    );
    // console.log("result",result);
  // const la_imageData = await fetchCustomerInfo(customerId);
  // console.log("ImageData",la_imageData);
    if(result){
    return NextResponse.json({ success: true, fileName: `${process.env.NEXT_PUBLIC_AWS_INSIDE_PATH}/${uploadedFileName}`, message: "uploading image success" });
    // return NextResponse.json({ success:true,fileName: la_imageData.personal_details.profile_image, message: "Profile updated successfully" }, { status: 200 });
    }
    // Returns the fileName you received after uploading to S3
  } catch (error) {
    NextResponse.json({ message: "Error uploading image" });
  }
}