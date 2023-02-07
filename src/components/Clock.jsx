import React from "react";
import Messages from "../components/Messages";

const Clock = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <section className="h-screen w-screen bg-bgImg bg-cover bg-center m-0 p-0">
        <section className="h-screen flex flex-col pt-[150px]">
          <h1 className="text-center text-5xl text-red-700 font-xmas font-bold pb-8">
            Christmas Countdown
          </h1>
          <div className="clock flex justify-center items-center">
            <div className="mr-5 text-center">
              <p className="font-xmas text-4xl font-semibold text-purple-700">
                {days}
              </p>
              <p className="font-xmas text-2xl font-semibold text-red-700">
                Days
              </p>
            </div>
            <div className="mr-5 text-center">
              <p className="font-xmas text-4xl font-semibold text-purple-700">
                {hours}
              </p>
              <p className="font-xmas text-2xl font-semibold text-red-700">
                Hours
              </p>
            </div>
            <div className="mr-5 text-center">
              <p className="font-xmas text-4xl font-semibold text-purple-700">
                {minutes}
              </p>
              <p className="font-xmas text-2xl font-semibold text-red-700">
                Minutes
              </p>
            </div>
            <div className="text-center">
              <p className="font-xmas text-4xl font-semibold text-purple-700">
                {seconds}
              </p>
              <p className="font-xmas text-2xl font-semibold text-red-700">
                Seconds
              </p>
            </div>
          </div>
          <Messages />
        </section>
      </section>
    </>
  );
};
export default Clock;
