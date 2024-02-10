import { connectToDB } from "@/config/dabconnection";
import User from "@/data/models/userShema";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { first_name, last_name, email, password, mobile, address, picture } =
    await req.json();

  try {
    await connectToDB();

    const newUser = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
      picture: picture,
    });

    await newUser.save();

    return NextResponse.json(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};
