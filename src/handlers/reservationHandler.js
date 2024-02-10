"use client"

export const createReservation = async (reservation) => {
  try {
    const res = await fetch("/api/reservations/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
      cache: "no-store",
    });

    if (res.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("🚨API Error: ", error);
    throw new Error("Error while booking the reservation");
  }
};

export const listReservations = async () => {
  try {
    const res = await fetch("/api/reservations", {
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
    throw new Error("Error while listing the reservations");
  }
};
