import { otpValidation } from "@/models/Customer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  
  const result = await otpValidation(data);

  if (result == 'success') {
    return NextResponse.json({ success: true, message: 'Account has been verified successfully!' }, { status: 200 });
  } else if (result == 'expired') {
    return NextResponse.json({ success: false, message: 'OTP has been expired' }, { status: 400 });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid OTP' }, { status: 400 });
  }
}