import { fetchGlobalData } from "@/models/GlobalSettings";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';

export const GET = async (req) => {
  const headersInstance = headers()
  const { searchParams } = new URL(req.url)
  const la_fieldName = searchParams.get('la_fieldName')

  try {
    let lo_dynamicFields = await fetchGlobalData(JSON.parse(la_fieldName));
   
    return NextResponse.json({ global_data: lo_dynamicFields, status: 201 });
  } catch (err) {
    console.log("err", err);
  }
};