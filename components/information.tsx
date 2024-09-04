"use client";
import { useEffect, useState } from "react";

export default function SaveTheDate() {
  // Calculate target date (September 1, 2024, 6:00 PM IST)
  const targetDate = new Date("2024-09-01T18:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  const [isClient, setIsClient] = useState(false);
  console.log(timeLeft);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  useEffect(() => {
    // Set the client-side rendering flag to true
    setIsClient(true);

    const interval = setInterval(() => {
      if (timeLeft < 0) {
        setTimeLeft(0);
      } else {
        setTimeLeft(targetDate - Date.now());
      }
      if (days && hours && minutes && seconds <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient) {
    // Render a placeholder or static content on the server
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-auto px-2 py-6 text-center">
      <h1 className="text-xl text-black mb-4 font-bold">Save the Date</h1>
      <p className="text-xl mb-6 text-black font-bold">
        1st September, 2024, 6:00 PM onwards
      </p>

      <div className="text-xl font-bold text-black">
        <div>
          {days} days : {hours} hours : {minutes} minutes : {seconds} seconds
        </div>
      </div>
    </div>
  );
}
