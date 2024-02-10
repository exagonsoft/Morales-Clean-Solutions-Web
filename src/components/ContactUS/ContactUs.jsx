"use client";

import React, { useRef, useState } from "react";
import "./contactstyles.css";
import SectionWrapper from "../Reusable/SectionWrapper";
import { Langs } from "@/langs/langs";
import { messageModel } from "@/data/models/messageModel";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { SiFacebook, SiLinkedin, SiPhonepe, SiTwitter, SiWhatsapp } from "react-icons/si";
import { EmailData, SystemVariables, notificationType } from "@/settings/constants";
import { notify } from "@/handlers/notificationsHandler";
import { sendMailHandler } from "@/handlers/mailHandler";

const ContactLink = ({link, icon, text ="", iconColor= ""}) => {
  return (
    <a
      href={link}
      className=" w-[80%] h-fit px-4 py-2 flex flex-col justify-center items-center gap-4 bg-[var(--color-light)] rounded-lg shadow-sm transitions hover:shadow-lg"
      target="blank"
    >
      <span className={`text-[3rem] font-bold`} style={{color: iconColor}}>{icon}</span>
      <span className=" font-bold">{text}</span>
    </a>
  );
};

const ContactUs = ({ inMobile, handleLoading, selectedLanguage }) => {
  const [messageData, setMessageData] = useState(messageModel);
  const formRef = useRef();

  const updateMessageData = (value, target) => {
    setMessageData((prevData) => ({ ...prevData, [target]: value }));
  };

  const sendMail = async (e) => {
    try {
      e.preventDefault();
      
      const mailData = {
        receiver: EmailData.supportMailReceiver,
        remittent: messageData.userEmail,
        subject: Langs[selectedLanguage].globalUI.messageSended,
        message: messageData.message,
      };

      handleLoading(true);

      let _result = await sendMailHandler(mailData);
      cleanView();

      handleLoading(false);
      notify(Langs[selectedLanguage].contactSectionUI.sendSuccess, notificationType.success);

    } catch (error) {
      console.log("⛔", error);
      handleLoading(false);
      notify(Langs[selectedLanguage].errorsUI.mailError, notificationType.error);
    }

  }

  const cleanView = () => {
    setMessageData(messageModel);
    if(formRef.current){
      formRef.current.reset();
    }
  }

  return (
    <SectionWrapper
      title={Langs[selectedLanguage].contactSectionUI.title}
      sectionId={Langs[selectedLanguage].navbarUI.contact}
      backGround="nav-bg"
    >
      <div className="w-full flex flex-col py-8 gap-4">
        <div className="w-full flex sm:flex-row flex-col sm:py-8 py-0 gap-4">
          <div className="w-full px-4">
            <form ref={formRef} onSubmit={sendMail} className="w-full flex flex-col gap-8">
              <div className="w-full flex flex-col gap-4">
                <input
                  id="emailInput"
                  name="emailInput"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-md px-4 py-2"
                  placeholder="Your Email..."
                  onChange={(e) => updateMessageData(e.target.value, "message")}
                />
                <textarea
                  name="messageInput"
                  id="messageInput"
                  cols="30"
                  rows="50"
                  required
                  autoComplete="message"
                  className="rounded-md px-4 py-4 sm:max-h-[20rem] max-h-[10rem]"
                  placeholder="Write your message..."
                  onChange={(e) =>
                    updateMessageData(e.target.value, "userEmail")
                  }
                ></textarea>
                <div className="hero-buttons w-full text-black">
                  <button className="button !w-full">
                    <span className="text-2xl">
                      <AiOutlineMail />
                    </span>
                    {Langs[selectedLanguage].contactSectionUI.sendMessageButton}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full grid sm:grid-cols-3 grid-cols-2 place-items-center gap-4 px-6">
            <ContactLink link={SystemVariables.whatsappLink}  icon={<SiWhatsapp />} iconColor="green" text="WhatsApp"/>
            <ContactLink link="tel:+17864884827"  icon={<AiFillPhone />} iconColor="#6e1c73" text="Phone"/>
            <ContactLink link={SystemVariables.facebookLink}  icon={<SiFacebook />} iconColor="blue" text="Facebook"/>
            <ContactLink link={SystemVariables.twitterLink}  icon={<SiTwitter />} iconColor="#4fb9da" text="Twitter"/>
            <ContactLink link={SystemVariables.linkedInLink}  icon={<SiLinkedin />} iconColor="#272781" text="LinkedIn"/>
          </div>
        </div>
        <div className="w-full px-4">
          <p className="w-full text-center text-black bg-gray-300 rounded-md p-4 sm:text-[1rem] text-[.8rem]">
            {`💡 TIP: You may contact with our team by using either the ${
              inMobile ? "upper" : "left"
            } form,
            to send over a message, or any option from ${
              inMobile ? "above" : "the right"
            } to contact over
            the selected Social Network`}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactUs;
