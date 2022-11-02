import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import "./time.scss";

export default function (props) {
  const [dateNow, setDate] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setDate(getTime());
    }, 5000);
  }, []);

  function getTime() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var date = new Date(),
      hours =
        date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours(),
      minutes =
        date.getUTCMinutes() < 10
          ? "0" + date.getUTCMinutes()
          : date.getUTCMinutes(),
      day = date.getUTCDay(),
      month = date.getUTCMonth(),
      year = date.getUTCFullYear();
    day = days[day];
    month = months[month];
    return { hours, minutes, day, month, year };
  }
  return (
    <div className="clock">
      <p>
        <b>Current UTC time: {dateNow.hours + ":" + dateNow.minutes}</b>
      </p>
      <p>
        {dateNow.day +
          "," +
          " " +
          moment().utc().date() +
          " " +
          dateNow.month +
          " " +
          dateNow.year}
      </p>
    </div>
  );
}
