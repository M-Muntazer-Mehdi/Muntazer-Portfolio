import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaLinkedinIn, FaReact, FaGithub, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs , SiPostgresql } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["a Full Stack Developer.", "and a Software Architect"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20"   style={{ marginTop: '60px' }}>
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME!</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Muntazer Mehdi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-roboto leading-6 tracking-wide text-justify">
          I am a full stack software developer with expertise in front-end and back-end development, complemented by extensive experience leading cross-functional teams to deliver impactful solutions.<br />
           Beyond Coding, my enthusiasm for immersive, story-driven e-sports games sharpens my problem-solving skills and creativity through engaging narratives and complex challenges. Additionally, my passion for fashion drives me to craft a personal style that reflects my individuality and creativity.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between" 
        style={{ marginTop: '-20px' }}>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a 
            href="https://github.com/M-Muntazer-Mehdi"
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/m-muntazer-mehdi/"
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
              <FaLinkedinIn />
          </a>
          <a 
            href="https://www.instagram.com/triple_m.r/"
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
              <FaInstagram />
          </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
            <SiPostgresql/>
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner