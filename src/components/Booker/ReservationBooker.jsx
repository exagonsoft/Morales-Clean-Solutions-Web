"use client";

import React, { useEffect, useState } from "react";
import "./reservationsstyles.css";
import { Langs } from "@/langs/langs";
import Calendar from "../Calendar/Calendar";
import { reservationModel } from "@/data/models/reservationModel";
import {
  createReservation,
  listReservations,
} from "@/handlers/reservationHandler";
import { sendMailHandler } from "@/handlers/mailHandler";
import { EmailData, SystemVariables, notificationType } from "@/settings/constants";
import { getMonthNames } from "@/utils/utilfuntions";
import { notify } from "@/handlers/notificationsHandler";

const ReservationBooker = ({ hideBookerHandler }) => {
  const [reservationData, setReservationData] = useState(reservationModel);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const updateReservationData = (value, target) => {
    setReservationData((prevData) => ({ ...prevData, [target]: value }));
  };

  const sendUserMail = async () => {
    let _reservationDateString =
      getMonthNames[reservationData.date.getMonth()] +
      " " +
      reservationData.date.getDate() +
      " " +
      reservationData.date.getFullYear();
    let _message = EmailData.htmlUserReservationBookedBody.replace(
      "user_name",
      reservationData.userName
    );
    _message = _message.replace("reservation_date", _reservationDateString);
    _message = _message.replace("_year", `2002-${new Date().getFullYear()}`);

    _message = _message.replace("whatsapp_icon", SystemVariables.siteUrl + SystemVariables.whatsappIcon);
    _message = _message.replace("whatsapp_link", SystemVariables.whatsappLink);
    _message = _message.replace("twitter_link", SystemVariables.twitterLink);
    _message = _message.replace("twitter_icon", SystemVariables.siteUrl + SystemVariables.twitterIcon);
    _message = _message.replace("mobile_icon", SystemVariables.siteUrl + SystemVariables.mobileIcon);
    _message = _message.replace("support_mobile", SystemVariables.supportMobile);
    _message = _message.replace("phone_icon", SystemVariables.siteUrl + SystemVariables.phoneIcon);
    _message = _message.replace("support_phone", SystemVariables.supportPhone);
    _message = _message.replace("mcs_website", SystemVariables.siteUrl);
    _message = _message.replace("web_icon", SystemVariables.siteUrl + SystemVariables.siteIcon);

    const mailData = {
      receiver: reservationData.userEmail,
      remittent: EmailData.noReplay,
      subject: Langs["en"].globalUI.reservationBooked,
      message: _message,
    };
    let _result = await sendMailHandler(mailData);
  };

  const sendSupportMail = async () => {
    let _reservationDateString =
      getMonthNames[reservationData.date.getMonth()] +
      " " +
      reservationData.date.getDate() +
      " " +
      reservationData.date.getFullYear();
    let _message = EmailData.htmlSupportReservationBookedBody.replace(
      "user_name",
      reservationData.userName
    );
    _message = _message.replace("user_email", reservationData.userEmail);
    _message = _message.replace("user_mobile", reservationData.userMobile);
    _message = _message.replace("user_address", reservationData.userAddress ? reservationData.userAddress : '--');
    _message = _message.replace("reservation_date", _reservationDateString);
    _message = _message.replace("_year", `2002-${new Date().getFullYear()}`);
    
    const mailData = {
      receiver: EmailData.supportMailReceiver,
      remittent: EmailData.noReplay,
      subject: Langs["en"].globalUI.reservationBooked,
      message: _message,
    };
    let _result = await sendMailHandler(mailData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading((prevData) => true);
      const _result = await createReservation(reservationData);
      if (_result) {
        await sendUserMail();
        await sendSupportMail();
        hideBookerHandler();
        setIsLoading((prevData) => false);
        notify(Langs['en'].successUI.createReservation, notificationType.success);
      }
    } catch (error) {
      console.log("⛔", error);
      setIsLoading((prevData) => false);
      notify(Langs['en'].errorsUI.createReservation, notificationType.error);
    }
  };

  const loadReservations = async () => {
    try {
      const _reservationsPromise = await listReservations();
      if (_reservationsPromise.ok) {
        let _reservations = await _reservationsPromise.json();
        let _objectArray = JSON.parse(_reservations);

        const _unavailableDates = _objectArray.map(_reservation => _reservation.date);
        setUnavailableDates(_unavailableDates);
        setUnavailableDates((prevData) => _unavailableDates);
        setIsLoading((prevData) => false);
      }
    } catch (error) {
      console.log("", error);
      setIsLoading((prevData) => false);
      notify(Langs['en'].errorsUI.getReservations, notificationType.error);
    }
  };

  useEffect(() => {
    setIsLoading((prevData) => true);
    loadReservations();
  }, []);

  return (
    <div className="w-full flex fixed h-screen justify-center items-center z-50 ">
      <div className="w-full h-screen z-[45] glassmorphism"></div>
      <div className="w-full sm:py-0 py-4 h-screen z-[48] absolute top-0 left-0 flex justify-center items-baseline sm:items-center overflow-hidden overflow-y-auto">
        <div className="flex flex-col px-8 py-4 rounded-lg shadow-xl bg-[--color-secondary] border-t-[--color-primary] border-t-[.5rem] sm:w-[60%] w-[94%] animatedEntrance">
          <div className="w-full flex flex-col justify-center items-center gap-8 sm:my-0 my-8">
            <h1 className="text-white font-bold uppercase sm:text-[1.5rem] text-[1rem] text-center">
              Book your reservation Online
            </h1>
            <div className="w-full flex">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-8"
              >
                <div className="w-full flex sm:flex-row flex-col gap-4">
                  <div className="w-full p-2 flex flex-col gap-4 justify-start items-center">
                    <span className="sm:text-[1.2rem] text-[.8rem] font-bold">
                      Reservation Data
                    </span>
                    <Calendar
                      id={"reservationData"}
                      calendarStyles="w-full bg-white rounded-md shadow-lg h-full"
                      onSelectionChange={updateReservationData}
                      marketDates={unavailableDates}
                      loading={loading}
                    />
                  </div>
                  <div className="w-full flex justify-start  flex-col gap-4 p-2">
                    <span className="self-center sm:text-[1.2rem] text-[.8rem] font-bold">
                      User Data
                    </span>
                    <input
                      id="nameInput"
                      name="nameInput"
                      type="text"
                      required
                      autoComplete="name"
                      className="rounded-md px-4 py-1"
                      placeholder="Your Name..."
                      onChange={(e) =>
                        updateReservationData(e.target.value, "userName")
                      }
                    />
                    <input
                      id="addressInput"
                      name="addressInput"
                      type="text"
                      autoComplete="address"
                      className="rounded-md px-4 py-1"
                      placeholder="Your Address..."
                      onChange={(e) =>
                        updateReservationData(e.target.value, "userAddress")
                      }
                    />
                    <input
                      id="emailInput"
                      name="emailInput"
                      type="email"
                      required
                      autoComplete="email"
                      className="rounded-md px-4 py-1"
                      placeholder="Your Email..."
                      onChange={(e) =>
                        updateReservationData(e.target.value, "userEmail")
                      }
                    />
                    <input
                      id="mobilInput"
                      name="mobilInput"
                      type="text"
                      required
                      autoComplete="mobile"
                      className="rounded-md px-4 py-1"
                      placeholder="Your Mobile..."
                      onChange={(e) =>
                        updateReservationData(e.target.value, "userMobile")
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between items-center px-2">
                  <button
                    type="button"
                    className="regular-button cancel"
                    onClick={hideBookerHandler}
                  >
                    {Langs["en"].globalUI.cancel}
                  </button>
                  <button className="regular-button accept">
                    {Langs["en"].globalUI.ok}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationBooker;
