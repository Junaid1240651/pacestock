import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const HeroSection = ({scrollToRef}) => {
  return (
    <div
      id="home"
      class="flex justify-center h-[100vh] py-3 title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      style={{
        background:
          "linear-gradient(136deg, rgb(68, 132, 206), rgb(26, 215, 192), rgb(255, 155, 17), rgb(155, 89, 182), rgb(255, 127, 127), rgb(236, 240, 241)) 0% 0% / 1200% 1200%",
      }}
    >
      <div id="stars"></div>
      <div className="flex justify-center items-center text-white h-[100vh] ">
        <div className="flex items-center justify-center align-middle text-center px-10 font-light flex-col  ">
          <p className="  font-light   sm:text-8xl xl:text-8xl  text-6xl  mb-4">
            Mohd Shahid Iqbal
          </p>
          <div class="wrapper">
            <p class="font-light text-base sm:text-xl w-[42ch]  typing-demo">
              Passionate about changing the world with technology.
            </p>
          </div>

          <div className="flex items-center gap-4 my-10">
            <a
              target="_blank"
              href="https://github.com/Mohd-shahid-iqbal"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer icon" size={40} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/people/Shahid-Khan/pfbid02pwPs9tscw1k5naTFRDxrNuAV8VH8ZMKi97fiVZ2VzBY3758cH6gc7agx3RtbWAhyl/"
            >
              <FaFacebookSquare
                background={"black"}
                className="cursor-pointer icon"
                size={40}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/shahid27945/"
            >
              <CiInstagram className="cursor-pointer icon" size={50} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mohd-shahid-iqbal-2b690713b/"
            >
              <CiLinkedin className="cursor-pointer icon" size={50} />
            </a>
          </div>
          <button
            className="font-normal border-2 hover:text-black hover:bg-white border-white rounded-lg px-5 py-3"
            onClick={() => scrollToRef("about")}
          >
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
