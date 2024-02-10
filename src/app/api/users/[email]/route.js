import { connectToDB } from "@/config/dabconnection";
import User from "@/data/models/userShema";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    try {
      await connectToDB();
  
      const _user = await User.findOne({email: params.email});
  
      if (!_user) {
        return NextResponse.json("User not Found", { status: 404 });
      }
  
      return NextResponse.json(JSON.stringify(_user), { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: errors.internalServerError },
        { status: 500 }
      );
    }
  };