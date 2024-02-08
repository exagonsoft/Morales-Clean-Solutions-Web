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

export const notificationType = {
    success: "SUCCESS",
    warning: "WARNING",
    error: "ERROR",
    info: "INFO",
  };

export const SystemVariables = {
  siteUrl: "https://morales-clean-solutions-web.vercel.app",
  whatsappIcon: `/whatsapp.png`,
  twitterIcon: `/twitter.png`,
  siteIcon: `/web.png`,
  phoneIcon: `/phone.png`,
  mobileIcon: `/mobile.png`,
  whatsappLink: 'https://wa.me/+17864884827',
  twitterLink: 'https://twitter.com/exagonsoft',
  facebookLink: 'https://m.me/jimmorales485',
  linkedInLink: 'https://linkedin/com/jimmorales485',
  supportMobile: '+17864884827',
  supportPhone: '+17864884827'
}

export const Dimensions = {
  mobileScreen: 850,
};

export const AboutImages = [
  "/banner1.webp",
  "/banner2.webp",
  "/banner3.webp",
  "/banner4.webp",
  "/banner5.webp",
  "/banner6.webp",
  "/banner7.webp",
];

export const EmailData = {
  secretKey: "cdhc clgw mjsl upea",
  supportMail: "marcoscleansolutions@gmail.com",
  noReplay: "noreply@msc.com",
  supportMailReceiver: "jimmorales485@gmail.com",
  htmlUserReservationBookedBody: `
  <div style="display:inline-grid; padding:1rem; width: 80%; overflow: hidden; overflow-y: auto;">
        <p>👋 Hello estimated user_name:</p>
        <div style="line-height: normal;">
            <table>
                <tr>
                    <td>
                        <h2>Your Reservation has been booked for: reservation_date</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="width: 100%; text-align: center;">The team of Marcos Clean Solutions (MCS) will
                            contact you as soon as
                            possible to arrange the
                            service
                            details</p>
                    </td>
                </tr>
            </table>
        </div>

        <p style="font-style: italic; width: 100%;">
            👀 If you feal that the contact is delay you may doit by your own from: <br /><br />
        <div
            style="display: flex; flex-direction: column; padding: 1rem; justify-content:space-between; border-radius: 5px; background: rgb(179, 173, 173); box-shadow: 2px 2px 5px; width:fit-content; gap:0.4rem;">
            <table>
                <tr>
                    <td>
                        <a href="whatsapp_link" target="_blank"
                            style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                            <img src="whatsapp_icon" alt="Web Icon"
                                style="width: 1rem; height:1rem; border-radius: 50%; margin: 0 5px;">
                            <span>MCS WhatsApp</span></a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="twitter_link" target="_blank"
                            style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                            <img src="twitter_icon" alt="Web Icon"
                                style="width: 1rem; height:1rem; border-radius: 50%; margin: 0 5px;">
                            <span>MCS Tweeter</span>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                            <img src="mobile_icon" alt="Web Icon"
                                style="width: 1rem; height:1rem; border-radius: 50%; margin: 0 5px;">
                            <span>support_mobile</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                            <img src="phone_icon" alt="Web Icon"
                                style="width: 1rem; height:1rem; border-radius: 50%; margin: 0 5px;">
                            <span>support_phone</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="mcs_website" target="_blank"
                            style="display: flex; gap: .5rem; justify-content:start; align-items:center; text-decoration: none; font-family:Arial, Helvetica, sans-serif; padding:.5rem 1rem; background: rgb(51, 82, 184); border-radius:5px; color: white;">
                            <img src="web_icon" alt="Web Icon"
                                style="width: 1rem; height:1rem; border-radius: 50%; margin: 0 5px;">
                            <span>MCS WebSite</span>
                        </a>
                    </td>
                </tr>
            </table>
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
            <img src="https://morales-clean-solutions-web.vercel.app/logo.webp" alt="MCS"
                style="width: 100px; height: 100px; border-radius: 50%" />
        </div>
    </div>
`,
htmlSupportReservationBookedBody: `
<div style="display:inline-grid; padding:1rem; width: 80%; overflow: hidden; overflow-y: auto;">
        <p>👋 Hello support team:</p>
        <div style="line-height: normal;">
            <h2>New reservation has been booked</h2>
        </div>
        <div
            style="display: flex; flex-direction: column; padding: 1rem; justify-content:space-between; border-radius: 5px; background: rgb(179, 173, 173); box-shadow: 2px 2px 5px; width:fit-content; gap:0.4rem;">
            <div style="display: flex; flex-direction:column; gap:1rem;">
                <table>
                    <tr>
                        <td>
                            <span style="font-weight: bold; text-decoration: underline;">Reservation Details</span>
                            <br />
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; gap:1rem;">
                                <div style="font-weight: bold;">User Name: </div>
                                <div>user_name</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; gap:1rem;">
                                <div style="font-weight: bold;">User Email: </div>
                                <div>user_email</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; gap:1rem;">
                                <div style="font-weight: bold;">User Mobile: </div>
                                <div>user_mobile</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; gap:1rem;">
                                <div style="font-weight: bold;">User Address: </div>
                                <div>user_address</div>
                            </div>
                        </td>
                    </tr>
                </table>
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
            <img src="https://morales-clean-solutions-web.vercel.app/logo.webp" alt="MCS"
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
