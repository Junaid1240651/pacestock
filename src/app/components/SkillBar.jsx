"use client";
import React, { useEffect, useState } from "react";

const SkillBar = ({ skills, percentage }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressWidth < percentage) {
        setProgressWidth(progressWidth + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [progressWidth, percentage, skills]);
  useEffect(() => {
    return () => setProgressWidth(0);
  }, [percentage]);
  return (
    <div className="w-[90%] text-lg font-light gap-1 flex my-2  items-start flex-col  text-start ">
      <p> {skills}</p>
      <div className="w-[100%] h-4 bg-gray-200 rounded-md overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
