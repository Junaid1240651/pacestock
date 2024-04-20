"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import GetInTouch from "./components/GetInTouch";
import Skills from "./components/Skills";

export default function Home() {
  const [isNavbarBackground, setIsNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 200;
      setIsNavbarBackground(scrolled > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToRef = (ref) => {
    document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToRef={scrollToRef} isBackground={isNavbarBackground} />
      <HeroSection scrollToRef={scrollToRef} />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="leadership">
        <Leadership />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="get-in-touch">
        <GetInTouch />
      </div>
    </>
  );
}
