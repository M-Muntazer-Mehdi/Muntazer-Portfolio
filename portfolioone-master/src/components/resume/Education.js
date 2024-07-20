import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering"
            subTitle="FAST National University, Faisalabad (2020 - 2024)"
            des="Specialized in advanced software development methodologies and technologies"
          />
          <ResumeCard
            title="FSc Pre-Engineering"
            subTitle="Kips College, Faisalabad (2018 - 2020)"
            des="A foundational education focused on mathematics, physics, and chemistry, preparing students for advanced studies in engineering and technology."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Govt Farooq High School, Faisalabad (2016 - 2018)"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Freelancing - (2024 - Present)"
            des="Since 2023, I’ve been freelancing as a Full-Stack Developer, building web applications and integrating APIs for diverse projects."
          />
          <ResumeCard
            title="Teaching Assistant"
            subTitle="FAST National University - (2023)"
            des="Served as a Teaching Assistant for the Software Mobile and Devices course, supporting students and assisting in course-related tasks."
          />
          <ResumeCard
            title="Teaching Assistant"
            subTitle="FAST National University - (2022)"
            des="Served as a Teaching Assistant for the Database Management lab, providing support to students and assisting with course materials and assignments."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
