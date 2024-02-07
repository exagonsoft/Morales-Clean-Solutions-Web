import { MailService } from "@/services/MailService/mailService";
import { errors } from "@/settings/constants";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { receiver, remittent, subject, message } = await req.json();

  try {
    const mailService = new MailService();
    await mailService.SendMail(receiver, remittent, subject, message);

    return NextResponse.json(JSON.stringify({message : "📧Mail sended successfully"}), { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: errors.internalServerError },
      { status: 500 }
    );
  }
};