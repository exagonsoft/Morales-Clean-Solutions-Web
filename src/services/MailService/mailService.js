import { EmailData, errors } from "@/settings/constants";
import * as nodemailer from "nodemailer";

export class MailService {
  constructor() {}

  async SendMail(receiver, remittent = "noreply@msc.com", subject, message) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EmailData.supportMail,
        pass: EmailData.secretKey,
      },
    });

    // Define the email options
    const mailOptions = {
      from: `Marcos Haul Solutions ${remittent}`,
      to: receiver,
      subject: subject,
      html: message,
    };

    // Send the email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent:", info.response);
      } catch (error) {
        console.log("📧🚨 Mail Error: ", error);
        throw new Error(errors.systemMailError);
      }
  }
}
