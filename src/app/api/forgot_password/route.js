import { isCustomerExists, sendMailForVerificationCode } from "@/models/Customer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  if (!data.data.email) {
      return NextResponse.json({ success: false, message: 'Please enter your email'}, { status: 401 });
  }
   // check_existing Customer
   const check_existingUser = await isCustomerExists(data.data.email);
  if (!check_existingUser) {
      return NextResponse.json({ success: false, message: 'User not found. Please Sign Up.'}, { status: 409 });
  }
  else {
    try {
      const result = await sendMailForVerificationCode(data);
      return NextResponse.json({ success: true, message: 'Verification code has been sent successfully. Please check your email.', userEmail: data.data.email }, { status: 200 });
    } catch(e) {
      return NextResponse.json({ error: 'Internal Server Error', message: e.message }, { status: 500 });
    }
  }
  
};