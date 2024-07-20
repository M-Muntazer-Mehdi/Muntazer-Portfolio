import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >
    <div className="w-full">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Hobbies</h2>
      </div>
      <div className='className="mt-14 w-full flex flex-col gap-6'>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">E-Gaming</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">watch Netflix</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">60%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Reading Books</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">50%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Designing</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">70%</span>
            </motion.span>
          </span>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default Experience;
