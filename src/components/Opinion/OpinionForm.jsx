import { feedBackModel } from "@/data/models/feedBackModel";
import { userModel } from "@/data/models/userModel";
import { createFeedBack } from "@/handlers/feedbackHandler";
import { notify } from "@/handlers/notificationsHandler";
import { Langs } from "@/langs/langs";
import { notificationType } from "@/settings/constants";
import React, { useState } from "react";
import PictureUploader from "../Reusable/PictureUploader";
import { createUser, getUser } from "@/handlers/userHandler";

const OpinionForm = ({
  hideOpinionHandler,
  handleLoading,
  selectedLanguage,
}) => {
  const [userData, setUserData] = useState(userModel);
  const [feedbackData, setFeedbackData] = useState(feedBackModel);

  const updateFeedbackData = (value, target) => {
    setFeedbackData((prevData) => ({ ...prevData, [target]: value }));
  };

  const updateUserData = (value, target) => {
    setUserData((prevData) => ({ ...prevData, [target]: value }));
  };

  const onImageSelected = async (_newImage) => {
    setUserData((prevData) => ({
      ...prevData,
      picture: _newImage.url,
      image: _newImage.image,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      handleLoading(true);

      let _user = await getUser(userData.email);
      let _newUser = {};

      if (_user?.ok) {
        _user = await _user.json();
        _newUser = JSON.parse(_user);
      } else {
        _newUser = await createUser(userData);
        _newUser = await _newUser.json();
        _newUser = JSON.parse(_newUser);
      }

      if (_newUser?._id) {
        feedbackData.userID = _newUser._id;
        const _result = await createFeedBack(feedbackData);
      } else {
        console.log("⛔Error creating user");
        notify(
          Langs[selectedLanguage].errorsUI.createFeedBack,
          notificationType.error
        );
        return;
      }
    } catch (error) {
      console.log("⛔", error);
      handleLoading(false);
      notify(
        Langs[selectedLanguage].errorsUI.createFeedBack,
        notificationType.error
      );
      return;
    }

    handleLoading(false);
    hideOpinionHandler();
    notify(
      Langs[selectedLanguage].successUI.createFeedBack,
      notificationType.success
    );
  };

  return (
    <div className="w-full flex fixed h-screen justify-center items-center z-50 ">
      <div className="w-full h-screen z-[45] glassmorphism"></div>
      <div className="w-full sm:py-0 py-4 h-screen z-[48] absolute top-0 left-0 flex justify-center items-baseline sm:items-center overflow-hidden overflow-y-auto">
        <div className="relative flex flex-col px-8 py-4 rounded-lg shadow-xl bg-[--color-secondary] border-t-[--color-primary] border-t-[.5rem] sm:w-[60%] w-[94%] animatedEntrance">
          <div className="w-full flex flex-col justify-center items-center gap-8 sm:my-0 my-8">
            <h1 className="text-white font-bold uppercase sm:text-[1.5rem] text-[1rem] text-center">
              {Langs[selectedLanguage].globalUI.sendFeedback}
            </h1>
            <div className="w-full flex">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-8"
              >
                <div className="w-full flex sm:flex-row flex-col gap-4">
                  <div className="w-full flex justify-start  flex-col gap-4 p-2">
                    <span className="self-center sm:text-[1.2rem] text-[.8rem] font-bold">
                      {Langs[selectedLanguage].globalUI.userData}
                    </span>
                    <input
                      id="firstNameInput"
                      name="firstNameInput"
                      type="text"
                      required
                      autoComplete="name"
                      className="rounded-md px-4 py-1"
                      placeholder="Your Name..."
                      onChange={(e) =>
                        updateUserData(e.target.value, "first_name")
                      }
                    />
                    <input
                      id="lastNameInput"
                      name="lastNameInput"
                      type="text"
                      required
                      autoComplete="last name"
                      className="rounded-md px-4 py-1"
                      placeholder="Your Family Last Name..."
                      onChange={(e) =>
                        updateUserData(e.target.value, "last_name")
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
                      onChange={(e) => updateUserData(e.target.value, "email")}
                    />
                    <PictureUploader
                      image={
                        userData.picture ? userData.picture : "/profile.webp"
                      }
                      onChange={onImageSelected}
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
                        updateFeedbackData(e.target.value, "feedBack")
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center px-2">
                  <button
                    type="button"
                    className="regular-button cancel"
                    onClick={hideOpinionHandler}
                  >
                    {Langs[selectedLanguage].globalUI.cancel}
                  </button>
                  <button className="regular-button accept">
                    {Langs[selectedLanguage].globalUI.ok}
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

export default OpinionForm;
