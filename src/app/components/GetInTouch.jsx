import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex px-5 flex-col text-center gap-5 py-10 items-center w-[1300px]  xl:w-[1300px] lg:w-[1140px] md:w-[960px] sm:w-[720px] esm:w-[540px]">
        <p className="text-5xl font-extralight py-0 md:py-5  md:text-6xl  sm:text-5xl">
          Get In Touch
        </p>

        <p className="text-xl font-light">
          I'm currently looking for full-time React Developer/Frontend Developer
          opportunities! If you know of any positions available, if you have any
          questions, or if you just want to say hi, please feel free to email me
          at,{" "}
          <a
            href="mailto:khansaif59@gmail.com"
            className="text-blue-500 cursor-pointer"
          >
            khansaif59@gmail.com
          </a>
          .
        </p>
        <p className="flex gap-1.5 items-center">
          &lt;/&gt; with <FaHeart /> by{" "}
          <a
            href="https://github.com/Mohd-shahid-iqbal/myportfolio"
            className="bg-black text-white rounded-md px-2"
          >
            Mohd Shahid Iqbal
          </a>{" "}
          using
          <FaReact />
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;
