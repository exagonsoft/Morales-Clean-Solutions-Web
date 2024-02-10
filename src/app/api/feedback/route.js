export const dynamic = 'force-dynamic';

import { connectToDB } from "@/config/dabconnection";
import FeedBack from "@/data/models/feedbackSchema";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();

    const feedbacks = await FeedBack.find({}).populate('creator');

    return NextResponse.json(JSON.stringify(feedbacks), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};