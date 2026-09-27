import React, { useEffect, useState } from "react";

/* He is in the Kingdom already. A Riyadh recruiter reading this sees their own
   clock, which is the point. */
const format = () => {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Riyadh",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return null;
  }
};

const LocalTime = () => {
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 20000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className="hidden font-mono text-[11.5px] uppercase tracking-[0.14em] text-muted lg:inline">
      AST {time}
    </span>
  );
};

export default LocalTime;
