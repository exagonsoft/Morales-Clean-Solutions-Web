import { connectToDB } from "@/config/dabconnection";
import Reservation from "@/data/models/reservationShema";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userID, date } = await req.json();

  try {
    await connectToDB();

    const newReservation = new Reservation({
      creator: userID,
      date: date
    });

    await newReservation.save();

    return NextResponse.json(JSON.stringify(newReservation), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};