import React, { useState, useEffect } from "react";

const interval: number = 10000;
const dateSeparator: string = "/";
const betweenDateAndTimeSeparator: string = " "; 
const timeSeparator: string = ":";

export const OkyClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, interval);

    return () => clearInterval(intervalId);
  }, [dateTime]);

  const DateTimeString = 
    dateTime.getFullYear().toString().substring(2, 4) +
    dateSeparator +
    (dateTime.getMonth() + 1).toString() +
    dateSeparator +
    dateTime.getDate().toString() +
    betweenDateAndTimeSeparator +
    dateTime.getHours() +
    timeSeparator +
    dateTime.getMinutes()
  ;

  return (
    <>
      {DateTimeString}
    </>
  );
};