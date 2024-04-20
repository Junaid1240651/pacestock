import React,  from "react";
import Carousel from "./Carousel";
import { slides } from "../json/data";
const Leadership = () => {
  return (
    <div className="flex justify-center">
      <div className="flex py-14 px-6 flex-col  w-[1300px]  xl:w-[1300px] lg:w-[1140px] md:w-[960px] sm:w-[720px] esm:w-[540px]   gap-8">
        <p className="text-5xl text-center font-extralight py-5  md:text-6xl  sm:text-5xl">
          Leadership
        </p>

        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-[100%]">
            <p className="text-lg font-light">
              As a React developer with leadership experience, I bring technical
              expertise, project management skills, and strong communication
              abilities to the table. I have a proven track record of building
              large-scale applications, optimizing code for performance, and
              implementing best practices. Additionally, I have experience
              leading teams and projects, creating and maintaining project
              plans, managing timelines and budgets, and ensuring timely
              delivery of high-quality work. I excel at communicating
              effectively with team members, stakeholders, and clients, both
              verbally and in writing, and am a skilled listener who can provide
              clear and constructive feedback. I am also passionate about
              mentoring and training other developers to help them develop their
              skills and achieve their goals. With my ability to solve complex
              technical problems and think creatively, I am always up-to-date
              with the latest developments in React and related technologies,
              and am able to innovate and inspire a positive, collaborative work
              environment.
            </p>
          </div>
          <div className="w-[100%]">
            <Carousel autoSlide={true}>
              {slides?.map((img) => (
                <img src={img} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
