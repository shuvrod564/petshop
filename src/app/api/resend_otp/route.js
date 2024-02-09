import { sendMailForVerificationCode } from "@/models/Customer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  try {
    const result = await sendMailForVerificationCode(data);
    return NextResponse.json({ success: true, message: 'Verification Code has been sent successfully. To activate your account, please check your email.', userEmail: data.email }, { status: 200 });
  } catch(e) {
    return NextResponse.json({ message: e.message, success: false }, { status: 500 });
  }
}