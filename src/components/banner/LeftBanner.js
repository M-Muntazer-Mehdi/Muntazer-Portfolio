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
        <p className="text-base font-arial leading-6 text-justify" style={{ fontSize: '15px' }}>
        I am a full stack software developer with deep expertise in front-end and back-end development and a proven track record in leading cross-functional teams. My experience has evolved into a role as a Software Architect, where I design scalable, high-performance systems aligned with business goals. <br /> 
        In addition to my technical skills, I am passionate about immersive, story-driven e-sports games, which enhance my problem-solving abilities and foster creativity through complex narratives and challenges. My dedication to fashion further drives me to develop a distinctive personal style that reflects both my individuality and creative vision.
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