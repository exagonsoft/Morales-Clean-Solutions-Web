export const dynamic = 'force-dynamic';

import { connectToDB } from "@/config/dabconnection";
import User from "@/data/models/userShema";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();

    const users = await User.find({}).limit(null);

    return NextResponse.json(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};