import db from "@/lib/db";
import { CustomerModel, isCustomerExists } from "@/models/Customer";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await db.connect();
    const data = await req.json();
    const customer = await CustomerModel.findOne({ email: data.email });
    if (!customer) {
      return NextResponse.json({ success: false, message: 'Invalid Email' }, { status: 404 });
    } 
    else if (data.password == data.cpassword){
      customer.password = await bcrypt.hash(data.password,10);
      await customer.save();
      return NextResponse.json({ success: true, message: 'Password Changed Successfully!' }, { status: 200 });
    }
    else {
      return NextResponse.json({ success: false, message: 'Password and confirm password should match' }, { status: 400 });
    }

  } catch (error) {
    return NextResponse.json({ success: false, message: 'An error occurred while processing your request' }, { status: 500 });
  }
}

export { POST as default };