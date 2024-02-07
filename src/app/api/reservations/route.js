import { connectToDB } from "@/config/dabconnection";
import Reservation from "@/data/models/reservationShema";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();

    const reservations = await Reservation.find({});

    return NextResponse.json(JSON.stringify(reservations), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};