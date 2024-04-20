import React from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../json/data.js";

const Projects = () => {
  return (
    <div className="flex justify-center bg-gray-100 ">
      <div className="flex py-14 flex-col  w-[1300px]  xl:w-[1300px] lg:w-[1140px] md:w-[960px] sm:w-[920px] esm:w-[540px] text-center  gap-8">
        <p className=" md:text-6xl font-extralight py-5 text-5xl sm:text-5xl">
          Recent Projects
        </p>
        <div className="grid px-6 text-xl font-light gap-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  ">
          {projects?.map((project) => (
            <div>
              <div className="flex flex-wrap shadow-2xl transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl  bg-white border-2 p-8 mb-6  rounded-md  gap-4 flex-col ">
                <p className="text-start font-medium">{project.title}</p>
                {project.desc && (
                  <p className="text-base text-start">{project.desc}</p>
                )}

                <div className="flex gap-5">
                  <div className="flex hover:text-white  cursor-pointer hover:bg-gray-500  border-gray-500  py-1.5 px-3 gap-2 items-center border-2 rounded-md">
                    <FaGithub size={17} />
                    <p className="text-base ">Clone Project</p>
                  </div>
                  <div className="flex hover:text-white  cursor-pointer hover:bg-gray-500  border-gray-500  py-1.5 px-3 gap-2 items-center border-2 rounded-md">
                    <FaGithub size={17} />
                    <p className="text-base ">Repo</p>
                  </div>
                </div>
                <hr />

                <div className="flex flex-wrap gap-3 gap-y-1  pt-1 text-[12px] font-semibold">
                  <p className="cursor-pointer font-normal text-sm pt-0.5">
                    Lanaguage:
                  </p>
                  {project.language.map((language, index) => (
                    <p key={index} className="text-start cursor-pointer">
                      {language}
                    </p>
                  ))}
                </div>

                <div className="flex gap-3">
                  <div className="flex   gap-2 items-center ">
                    <FaGithub size={17} />
                    <p className="text-sm font-medium">Stars</p>
                  </div>
                  <p className="text-sm font-normal">{project.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
