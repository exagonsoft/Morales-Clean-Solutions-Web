import { listFeedbacks } from "@/handlers/feedbackHandler";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import LazyFeedback from "../LazyComponent/LazyFeedback";
import { listUsers } from "@/handlers/userHandler";

const TestimonialCard = ({ name, picture = "", feedback }) => {
  const transition = { type: "spring", duration: 1.5 };

  useEffect(() => {}, [feedback]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ...transition, type: "tween" }}
      className="flex flex-col relative gap-4 py-2 min-h-[23rem] items-center mb-4"
    >
      <img
        src={picture}
        alt={`${name}'s Picture`}
        className="rounded-full w-[50%] min-w-[50%] min-h-[50%]"
        loading="lazy"
      />
      <span className="w-full flex text-start font-bold sm:text-[2rem] text-[1rem]">{`${name} say's:`}</span>
      <p className="w-full text-justify p-4 rounded-md text-white bg-[var(--color-secondary)] border border-white">
        {feedback}
      </p>
    </motion.div>
  );
};

const NoFeedbacks = () => {
  return (
    <div className="w-full min-h-[10rem] flex justify-center items-center p-8 rounded-md shadow-md border border-white bg-[var(--color-secondary)]">
      <span className="font-bold text-white">NO DATA</span>
    </div>
  );
};

const FeedBack = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const loadFeedBacks = async () => {
    try {
      handleLoading(true);
      const _feedbacksPromise = await listFeedbacks();
      if (_feedbacksPromise?.ok) {
        let _feedbacks = await _feedbacksPromise.json();
        _feedbacks = JSON.parse(_feedbacks);

        setFeedbacks(_feedbacks);
      }
    } catch (error) {
      console.log("Error loading feedbacks", error);
    }
  };

  const updateFeedback = () => {
    setCurrentFeedbackIndex((prevState) =>
      prevState < feedbacks.length - 1 ? prevState + 1 : 0
    );
    console.log("Array length", feedbacks.length);
    console.log("Current Index", currentFeedbackIndex);
  };

  const handleLoading = (state) => {
    setIsLoading((prevState) => state);
  };

  const getListUsers = async () => {
    try {
      const _res = await listUsers();
    } catch (error) {
      console.log("Error Listing Users: ", error);
    }
  };

  useEffect(() => {
    getListUsers();
    loadFeedBacks();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateFeedback, 10000);
    handleLoading(false);
    return () => clearInterval(intervalId);
  }, [feedbacks.length]);

  return (
    <>
      {isLoading ? (
        <LazyFeedback minHeight="84%" />
      ) : feedbacks.length > 0 ? (
        <TestimonialCard
          name={`${feedbacks[currentFeedbackIndex]?.creator.first_name} ${feedbacks[currentFeedbackIndex]?.creator?.last_name}`}
          picture={feedbacks[currentFeedbackIndex]?.creator?.picture}
          feedback={feedbacks[currentFeedbackIndex]?.feedback}
        />
      ) : (
        <NoFeedbacks />
      )}
    </>
  );
};

export default FeedBack;
