import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram  } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">M. Muntazer Mehdi</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a full stack developer skilled in front-end and back-end technologies, with a strong background in leading teams to deliver impactful solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">muntazer.mehdi.rizvi@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between" 
        style={{ marginTop: '0px' }}>
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
        </div>
    </div>
  );
}

export default ContactLeft