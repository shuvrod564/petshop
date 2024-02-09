// import { fetchCustomerInfo, updateCustomerInfo } from "@/models/Customer";
// import { NextResponse } from "next/server";
// import { headers } from 'next/headers';

// export const GET = async (req) => {
//   const headersInstance = headers()
//   const { searchParams } = new URL(req.url)
//   const customer_id = searchParams.get('id')

//   try {
//     let la_data = await fetchCustomerInfo(customer_id);
//     return NextResponse.json({ data: la_data, status: 201 });
//   } catch (err) {
//     console.log("err", err);
//   }
// };


// export const PUT = async (req) => {
//   const headersInstance = headers()
//   const { searchParams } = new URL(req.url)
//   const customer_id = searchParams.get('id')

//   try {
//     const customer_data = await fetchCustomerInfo(customer_id);

//     const result = await updateCustomerInfo(customer_id,customer_data);

//     return NextResponse.json({ message: result.message, status: 200 });
//   } catch (err) {
//     console.error("Error:", err);
//     return NextResponse.error(err, { status: 500 });
//   }
// };