"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
const Navbar = ({ scrollToRef, isBackground }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex top-0 left-0 right-0 z-50   fixed text-lg justify-between gap-5 p-3 px-5 md:py-5 w-[100%] 
      ${isBackground === true ? "navbar-white" : ""}`}
    >
      <div className={`flex gap-3 md:flex-row  ${open ? "flex-col" : ""}`}>
        <p className="text-gray-500 font-semibold">&lt;Mohd/&gt;</p>
        <div
          className={`flex font-extralight md:flex md:flex-row gap-3 text-gray-600 ${
            open ? "flex-col" : ""
          } ${open ? "" : "hidden"}`}
        >
          <p className="cursor-pointer" onClick={() => scrollToRef("projects")}>
            Projects
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              href="https://docs.google.com/document/d/1gDdMSvyTkcT8WWzZ3-gbiTpt9ROAjjQ0/edit"
            >
              Resume
            </a>
          </p>

          <p className="cursor-pointer" onClick={() => scrollToRef("about")}>
            About
          </p>
          <p className="cursor-pointer" onClick={() => scrollToRef("skills")}>
            Skills
          </p>
        </div>
      </div>
      <div className=" md:hidden">
        <button onClick={() => setOpen(!open)}>
          <RxHamburgerMenu size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
