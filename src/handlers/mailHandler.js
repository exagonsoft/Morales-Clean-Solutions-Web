export const sendMailHandler = async (mailData) => {
    const res = await fetch("/api/mailer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mailData),
    });
  
    if (res.ok) {
      return true;
    }else{
      return false;
    }
  };