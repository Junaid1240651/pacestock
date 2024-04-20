import React from "react";
import Image from "next/image";
import CompanyImg1 from "../../../public/company1.png";
import CompanyImg2 from "../../../public/company2.png";
import CompanyImg3 from "../../../public/company3.png";
const Experience = () => {
  return (
    <div className="flex justify-center  ">
      <div className="flex py-14 flex-col text-center w-[1300px]  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        <p className=" md:text-6xl font-extralight py-5 text-5xl sm:text-5xl">
          Experiences
        </p>
        <div className="grid text-xl font-light text-center  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">
          <div className="flex pb-10 gap-5 flex-col items-center">
            <Image width={300} src={CompanyImg1} />
            <p>
              React Developer <br /> Aug 2020 – May 2022
            </p>
          </div>
          <div className="flex pb-10 gap-5 flex-col items-center">
            <Image width={300} src={CompanyImg2} />
            <p>
              Senior Software Engineer <br /> May 2022 – March 2023
            </p>
          </div>
          <div className="flex pb-10 gap-5 flex-col items-center">
            <Image width={300} src={CompanyImg3} />
            <p>
              React Developer <br /> March 2023 – Present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
