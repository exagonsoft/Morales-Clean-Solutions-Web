import { connectToDB } from "@/config/dabconnection";
import User from "@/data/models/userShema";
import { UploadService } from "@/services/UploadService/UploadService";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { first_name, last_name, email, password, mobile, address, picture, image } =
    await req.json();

  try {
    await connectToDB();
    let _fileName = null;

    if(image){
      let _name = first_name.trim();
      _name = _name.replace(" ", '_');
      let _date = new Date().toDateString();
      _date = _date.trim();
      _date = _date.replace(" ", '_');
      _fileName = `${_name}_${_date}.png`;
      const uploadService = new UploadService();
      await uploadService.Upload(_fileName, image);
    }

    const newUser = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
      picture: _fileName ? `/${_fileName}` : picture,
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
