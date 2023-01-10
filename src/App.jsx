import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";

function App() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countdownTimer = () => {
    const countdownDate = new Date("December 24, 2023").getTime();

    interval = setInterval(() => {
      const currentDate = new Date().getTime();

      const distance = countdownDate - currentDate;

      const day = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const second = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.currentDate);
      } else {
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    });
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <div className="App">
      <Clock days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
}

export default App;
