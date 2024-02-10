"use client"

export const createFeedBack = async (feedback) => {
  try {
    const res = await fetch("/api/feedback/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
      cache: "no-store",
    });

    if (res.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("🚨API Error: ", error);
    throw new Error("Error while saving your feedback");
  }
};

export const listFeedbacks = async () => {
  try {
    const res = await fetch("/api/feedback", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (res.ok) {
      return res;
    } else {
      return null;
    }
  } catch (error) {
    console.log("🚨API Error: ", error);
    throw new Error("Error while listing the feedbacks");
  }
};
