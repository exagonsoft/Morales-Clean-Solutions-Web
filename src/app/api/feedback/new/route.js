import { connectToDB } from "@/config/dabconnection";
import FeedBack from "@/data/models/feedbackSchema";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userID, feedBack } = await req.json();

  try {
    await connectToDB();

    const newFeedback = new FeedBack({
      creator: userID,
      feedback: feedBack
    });

    await newFeedback.save();

    return NextResponse.json(JSON.stringify(newFeedback), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};