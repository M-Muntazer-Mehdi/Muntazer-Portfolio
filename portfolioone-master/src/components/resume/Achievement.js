import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">College Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Top 200 Achievement in UET-ECAT 2020"
            subTitle="Ranked 156th Among Thousands"
            des="In the UET-ECAT test of 2020, I achieved a notable rank of 156 out of a competitive pool of thousands of candidates. This accomplishment reflects my strong analytical skills and preparation, underscoring my capability to excel in high-stakes assessments."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">University Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Leadership Roles in Daira Events"
            subTitle="Security Co-Head (2023) and Invitations Co-Head (2024) at FAST University"
            des="Held key leadership positions for Daira events at FAST University, serving as Security Co-Head in 2023 and Invitations Co-Head in 2024. Contributed to the effective management and coordination of event security and invitations, ensuring successful and well-organized events."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
