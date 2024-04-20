import React from "react";
import Image from "next/image";
import Photo from "../../../public/photo.png";
const About = () => {
  return (
    <div className="flex bg-gray-100 justify-center">
      <div className="flex py-20 px-6 gap-40 w-[1300px]  xl:w-[1300px] xl:gap-40 lg:w-[1140px]  md:w-[960px] md:gap-5 sm:w-[720px] esm:w-[540px]">
        <Image
          className="border-2 hidden sm:hidden md:block rounded-full"
          src={Photo}
          width={380}
        />
        <div className="text-center py-5 items-center flex flex-col gap-5">
          <p className="text-6xl  py-5 font-extralight">About Me</p>
          <p className="text-lg font-light">
            My name is Mohd Shahid Iqbal. I’m a post-graduate of 2020 from Jamia
            hamdard University at New Delhi with a degree in Masters of Computer
            Application . I'm most passionate about giving back to the
            community, and my goal is to pursue this passion within the field of
            software engineering. In my free time I like working on open source
            projects.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
            href="https://docs.google.com/document/d/1gDdMSvyTkcT8WWzZ3-gbiTpt9ROAjjQ0/edit"
          >
            <button className="hover:text-white hover:bg-black border-2 border-black rounded-lg px-5 py-2.5">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
