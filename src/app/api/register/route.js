import { NextResponse } from "next/server";
import { isCustomerExists, customerRegister, sendMailForVerificationCode } from "@/models/Customer";

export async function POST(req) {
  const data = await req.json();

  if (!data.email) {
    return NextResponse.json({ message: 'Please enter your email',user : data.email}, { status: 401 });
  }
  if (!data.password) {
    return NextResponse.json({ message: 'Please enter password',user : data.email}, { status: 401 });
  }
 
  // check_existing Customer
  const check_existingUser = await isCustomerExists(data.email);
  if (check_existingUser && check_existingUser.status == 'Inactive'){
    const result = await sendMailForVerificationCode(data);
    return NextResponse.json({ message: 'You have already registered with us. Please check your email for verification.', userStatus: check_existingUser.status, userEmail: check_existingUser.email}, { status: 200 });
  } else if (check_existingUser && check_existingUser.status == 'Active'){
    return NextResponse.json({ message: 'You have already registered with us. Please Login.',userStatus : check_existingUser.status}, { status: 200 });
  }
  else {
    try {
      const customerData = await customerRegister(data);
      return NextResponse.json({ message: 'You have successfully registered. To activate your account, please check your email.', userEmail: data.email }, { status: 200 });
    } catch(e) {
      return NextResponse.json({ message: 'Internal Server Error', error: true }, { status: 500 });
    }
  }
};