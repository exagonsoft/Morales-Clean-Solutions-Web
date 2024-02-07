import { Langs } from "@/langs/langs";

export const NavLinks = [
  {
    text: Langs["en"].navbarUI.services,
    link: "#Services",
  },
  {
    text: Langs["en"].navbarUI.pricing,
    link: "#Pricing",
  },
  {
    text: Langs["en"].navbarUI.about,
    link: "#About MCS",
  },
  {
    text: Langs["en"].navbarUI.contact,
    link: "#Contact",
  },
  {
    text: Langs["en"].navbarUI.testimonials,
    link: "#Testimonials",
  },
];

export const SystemVariables = {
  siteUrl: "https://morales-clean-solutions-web.vercel.app",
  whatsappIcon: `/whatsapp.png`,
  twitterIcon: `/twitter.png`,
  siteIcon: `/web.png`,
  phoneIcon: `/phone.png`,
  mobileIcon: `/mobile.png`,
  whatsappLink: 'https://wa.me/+5356839233',
  twitterLink: 'https://twitter.com/exagonsoft',
  supportMobile: '+5356839233',
  supportPhone: '+5377458569'
}

export const Dimensions = {
  mobileScreen: 850,
};

export const AboutImages = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
  "/banner5.png",
  "/banner6.png",
  "/banner7.png",
];

export const EmailData = {
  secretKey: "cdhc clgw mjsl upea",
  supportMail: "marcoscleansolutions@gmail.com",
  noReplay: "noreply@msc.com",
  supportMailReceiver: "amartinperaza@gmail.com",
  htmlUserReservationBookedBody: `
  <div style="display:inline-grid;padding:1rem;">
        <p>👋 Hello estimated user_name:</p>
        <div style="line-height: 10px;">
            <h2>Your Reservation has been booked for: reservation_date</h2>
            <p>The team of Marcos Clean Solutions (MCS) will contact you as soon as possible to arrange the service
                details</p>
        </div>

        <p style="font-style: italic;">
            👀 If you feal that the contact is delay you may doit by your own from: <br /><br />
        <div
            style="display: flex; flex-direction: column; padding: 1rem; justify-content:space-between; border-radius: 5px; background: rgb(179, 173, 173); box-shadow: 2px 2px 5px; width:fit-content; gap:0.4rem;">
            <a href="whatsapp_link" target="_blank"
                style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                <img src="whatsapp_icon" alt="Web Icon" style="width: 1rem; height:1rem; border-radius: 50%;">
                <span>MCS WhatsApp</span></a>
            <a href="twitter_link" target="_blank"
                style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                <img src="twitter_icon" alt="Web Icon" style="width: 1rem; height:1rem; border-radius: 50%;">
                <span>MCS Tweeter</span>
            </a>
            <div
                style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                <img src="mobile_icon" alt="Web Icon" style="width: 1rem; height:1rem; border-radius: 50%;">
                <span>support_mobile</span>
            </div>
            <div
                style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                <img src="phone_icon" alt="Web Icon" style="width: 1rem; height:1rem; border-radius: 50%;">
                <span>support_phone</span>
            </div>
            <a href="mcs_website" target="_blank"
                style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                <img src="web_icon" alt="Web Icon" style="width: 1rem; height:1rem; border-radius: 50%;">
                <span>MCS WebSite</span>
            </a>
        </div>

        </p>
        <div style="line-height: 10px;">
            <p style="color: black; font-weight: bold;">Regards</p>
            <p style="color: black; font-weight: bold;">MCS Support Team</p>
        </div>
        <div style="width: fit-content;">
            <hr style="width: 100%; margin-top: 3rem;" />
            <p style="font-size: smaller; font-style: italic; font-family: 'Times New Roman', Times, serif;">
                Copyright © _year MCS, All rights reserved.
            </p>
        </div>
        <div>
            <img src="https://morales-clean-solutions-web.vercel.app/logo.png" alt="MCS"
                style="width: 100px; height: 100px; border-radius: 50%" />
        </div>
    </div>
`,
htmlSupportReservationBookedBody: `
<div style="display:inline-grid;padding:1rem;">
<p>👋 Hello support team:</p>
<div style="line-height: 10px;">
    <h2>New reservation has been booked</h2>
</div>

<div style="line-height: 10px; display:flex; flex-direction:column; margin-top:1rem;">
    <span style="font-weight: bold; text-decoration: underline; margin-bottom: 1rem;">Reservation Details</span>
    <br />
    <div style="display: flex; flex-direction:column; gap:1rem;">
        <div style="display: flex; gap:1rem;">
            <div style="font-weight: bold;">User Name: </div>
            <div>user_name</div>
        </div>
        <div style="display: flex; gap:1rem;">
            <div style="font-weight: bold;">User Email: </div>
            <div>user_email</div>
        </div>
        <div style="display: flex; gap:1rem;">
            <div style="font-weight: bold;">User Mobile: </div>
            <div>user_mobile</div>
        </div>
        <div style="display: flex; gap:1rem;">
            <div style="font-weight: bold;">User Address: </div>
            <div>user_address</div>
        </div>
    </div>
</div>
<p style="font-style: italic; font-weight: bold;">
    📆 The Reservation hs been book for: reservation_date <br /><br />
</p>

<p style="font-style: italic;">
    👀 Remember to contact the user as soon as possible to arrange service details. <br /><br />
</p>
<div style="line-height: 10px;">
    <p style="color: black; font-weight: bold;">Regards</p>
    <p style="color: black; font-weight: bold;">MCS Platform System</p>
</div>
<div style="width: fit-content;">
    <hr style="width: 100%; margin-top: 3rem;" />
    <p style="font-size: smaller; font-style: italic; font-family: 'Times New Roman', Times, serif;">
        Copyright © _year MCS, All rights reserved.
    </p>
</div>
<div>
    <img src="https://morales-clean-solutions-web.vercel.app/logo.png" alt="MCS"
        style="width: 100px; height: 100px; border-radius: 50%" />
</div>
</div>
`,
};

export const customErrors = {
  resourceDoesNotExist: {
    statusCode: 400,
    message: "😞 Resource does not exist",
    code: "resourceDoesNotExist",
  },
  resourceAlreadyExists: {
    statusCode: 400,
    message: "😕 Resource already exist",
    code: "resourceAlreadyExists",
  },
  wrongCredentials: {
    statusCode: 403,
    message: "😬 Incorrect credentials",
    code: "wrongCredentials",
  },
  invalidToken: {
    statusCode: 403,
    message: "😬 Invalid Token",
    code: "invalidToken",
  },
  systemWriteError: {
    statusCode: 501,
    message: "✏️ System IO write error",
    code: "systemWriteError",
  },
  systemDataBaseError: {
    statusCode: 502,
    message: "💾 System DB error",
    code: "systemDataBaseError",
  },
  systemMailError: {
    statusCode: 502,
    message: "📧 System Email send error",
    code: "systemMailError",
  },
  systemInvalidOperation: {
    statusCode: 402,
    message: "🚫 System Invalid Operation",
    code: "systemInvalidOperation",
  },
  internalServerError: {
    statusCode: 500,
    message: "😶 Uncontrolled Server Error Encounter",
    code: "internalServerError",
  },
};

export const errors = {
  resourceDoesNotExist: "resourceDoesNotExist",
  resourceAlreadyExists: "resourceAlreadyExists",
  wrongCredentials: "wrongCredentials",
  invalidToken: "invalidToken",
  systemWriteError: "systemWriteError",
  systemDataBaseError: "systemDataBaseError",
  systemMailError: "systemMailError",
  systemInvalidOperation: "systemInvalidOperation",
  internalServerError: "internalServerError",
};
