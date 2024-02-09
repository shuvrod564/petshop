import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { CustomerModel } from "@/models/Customer";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions)
  const data = await req.json();

  try {
    await db.connect();
    const userId = `${session.user.id}`; 
    const existingUser = await CustomerModel.findById(userId);

    if (!existingUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(data.data.oldPassword, existingUser.password);

    if (!isPasswordValid) {
    return NextResponse.json({ success: false, message: 'Incorrect old password' }, { status: 401 });

    }

    existingUser.password = await bcrypt.hash(data.data.newPassword, 10);
    await existingUser.save();

    return NextResponse.json({ success: true, message: 'Password changed successfully' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error changing password. Please try again.' }, { status: 500 });
  }
};

export { POST as default };
