export const createReservation = async (reservation) => {
  const res = await fetch("/api/reservations/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reservation),
  });

  if (res.ok) {
    return true;
  }else{
    return false;
  }
};

export const listReservations = async (reservation) => {
    const res = await fetch("/api/reservations", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  
    if (res.ok) {
      return res;
    }else{
      return null;
    }
  };
