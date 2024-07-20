import React from 'react'
import { AiFillAppstore, AiFillMobile } from "react-icons/ai";
import { FaMobile, FaGlobe, FaCode, FaCogs } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <a href='https://github.com/M-Muntazer-Mehdi/Web-Dev-Hub/blob/main/README.md' target="_blank" rel="noopener noreferrer" className="card-link">
          <Card
            title="Web Development"
            des="Full-stack web development with expertise in HTML, CSS, JavaScript, React, Node.js, and secure authentication, API integration, and database managemen"
            icon={<FaGlobe />}
          />
        </a>
        <a href='https://github.com/M-Muntazer-Mehdi/Mobile-Dev-Hub/blob/main/README.md' target="_blank" rel="noopener noreferrer" className="card-link">
        <Card
          title="App Development"
          des="Full Stack Mobile Developer skilled in React Native, Android SDK(Java), and Flutter. Expert in crafting seamless cross-platform applications that deliver exceptional user experiences and meet diverse functional requirements."
          icon={<FaMobile />}
        />
        </a>
        <a href='https://github.com/M-Muntazer-Mehdi/Software-Architecture-Hub/blob/main/README.md.md' target="_blank" rel="noopener noreferrer" className="card-link">
        <Card
          title="Software Architect"
          des="Proficient in MVC, Layered Architecture, Design Patterns, SOLID Principles, and Unit Testing, I deliver robust solutions that ensure scalability, security, and high performance, while adhering to industry best practices and standards."
          icon={<FaCode />}
        />
        </a>
        <a href='https://github.com/M-Muntazer-Mehdi/Software-Engineering-Artifacts/blob/main/README.md' target="_blank" rel="noopener noreferrer" className="card-link">
        <Card
          title="Requirement Engineering"
          des="Specializing in SRS documents, UML and data modeling, and Agile methodologies to deliver precise specifications and ensure effective traceability."
          icon={<FaCogs />}
        />
        </a>
        <a href='https://www.figma.com/design/CKZGDVNj3o3Fgvgfu5UJ7B/ShipEase--FYP?node-id=0-1&t=B3f2NHWBqcD60zFw-1' target="_blank" rel="noopener noreferrer" className="card-link">
        <Card
          title="UI/UX Design"
          des="UI/UX Designer specializing in crafting user-friendly, engaging, and intuitive interfaces. Expert in using Figma for collaborative design, Adobe XD for high-fidelity interactive prototypes."
          icon={<SiAntdesign />}
        />
        </a>
        <a href='https://github.com/M-Muntazer-Mehdi/Data-Analytics/blob/main/README.md' target="_blank" rel="noopener noreferrer" className="card-link">
        <Card
          title="Data Analyst"
          des="Data Analyst proficient in data collection, cleansing, and analysis using SQL and Python. Expert in Jupyter for data exploration and visualization, delivering actionable insights through detailed reporting and dashboards."
          icon={<FaGlobe />}
        />
        </a>
      </div>
    </section>
  );
}

export default Features