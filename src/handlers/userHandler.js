"use client"

export const createUser = async (user) => {
    try {
      const res = await fetch("/api/users/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        cache: 'no-store'
      });
    
      if (res.ok) {
        return res;
      } else {
        return null;
      }
    } catch (error) {
      console.log("🚨API Error: ", error);
      throw(new Error("Error while creating the user"))
    }
  };

  export const getUser = async (email) => {
    try {
      const res = await fetch(`/api/users/${email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: 'no-store'
      });
    
      if (res.ok) {
        return res;
      } else {
        return null;
      }
    } catch (error) {
      console.log("🚨API Error: ", error);
    }
  };

  export const listUsers = async () => {
    try {
      const res = await fetch("/api/users", {
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