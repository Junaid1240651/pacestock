"use client";
import React from "react";
import { useState, useEffect } from "react";
import SkillBar from "./SkillBar";
import { technicalSkills } from "../json/data.js";
import { softSkills } from "../json/data.js";

const Skills = () => {
  const [skills, setskills] = useState("Technical");

  return (
    <div className="flex justify-center">
      <div className="flex px-6 flex-col text-center gap-5 py-14 items-center w-[1200px]  xl:w-[1200px] lg:w-[1140px] md:w-[900px] sm:w-[720px] esm:w-[540px]">
        <p className="text-5xl font-extralight py-8  md:text-6xl  sm:text-5xl">
          Skills
        </p>
        <div className="w-[100%]  flex justify-evenly  font-light">
          <p
            className={`w-[50%] cursor-pointer py-2 ${
              skills === "Soft"
                ? "border-b-2 text-blue-500"
                : "border-2 rounded-md "
            } `}
            onClick={() => setskills("Technical")}
          >
            Technical Skills
          </p>
          <p
            className={`w-[50%] cursor-pointer py-2 ${
              skills === "Technical"
                ? "border-b-2 text-blue-500"
                : " border-2 rounded-md"
            } `}
            onClick={() => setskills("Soft")}
          >
            Soft Skills
          </p>
        </div>
        <div className="grid w-[100%] mb-10   font-light text-center  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
          {skills === "Technical"
            ? technicalSkills?.map((data, index) => (
                <SkillBar
                  key={index}
                  skills={data.skill}
                  percentage={data.percentage}
                />
              ))
            : softSkills?.map((data, index) => (
                <SkillBar
                  key={index}
                  skills={data.skill}
                  percentage={data.percentage}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
