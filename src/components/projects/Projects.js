import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { BsGithub } from 'react-icons/bs';
import { FaFileAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
           title={<span className="title">FYP - SHIPEASE<br />Bilty Management Website</span>}
          des="SHIPEASE is a comprehensive Bilty management system designed to streamline logistics operations, built with React for dynamic user interfaces, Node.js for server-side logic, and Postman for API testing and development. The system uses authentication to ensure secure user access."
          src={projectOne}
          Icon={<BsGithub />}
          Icon1={<FaFileAlt />}
          githubLink="https://github.com/Final-Year-Project-ShipEase/shipease-frontend"
          fileLink="https://github.com/Final-Year-Project-ShipEase/shipease-frontend/blob/main/README.md"
        />
        <ProjectsCard
            title={<span className="title">FYP - SHIPEASE<br />Mobile Application</span>}
          des="SHIPEASE Mobile Application, built with React Native, Node.js, and Postman, enables users to book Bilty through tenant, vehicle, or attribute searches, connecting drivers and users for efficient cargo management. Additionally, it includes comprehensive API testing."
          src={projectTwo}
          Icon={<BsGithub />}
          Icon1={<FaFileAlt />}
          githubLink="https://github.com/Final-Year-Project-ShipEase/shipease-native-app"
          fileLink="https://github.com/Final-Year-Project-ShipEase/shipease-native-app/blob/main/README.md"
        />
        <ProjectsCard
          title="Lost & Found Platform"
          des="The Lost & Found Platform aids in recovering lost items and supports charity by managing lost/found items. Unclaimed items are donated, promoting goodwill. It uses MVC architecture for structure and maintainability, and is built with HTML, CSS, and JavaScript for a dynamic experience."
          src={projectThree}
          Icon={<BsGithub />}
          Icon1={<FaFileAlt />}
          githubLink="https://github.com/M-Muntazer-Mehdi/Lost-Found-Web-App"
          fileLink="https://github.com/M-Muntazer-Mehdi/Lost-Found-Web-App/blob/main/README.md"
        />
        <ProjectsCard
          title="E-Voting Mobile App"
          des="Developed with Java and Android Studio SDK, the e-Voting Mobile App features Admin and Client Dashboards, secure OTP-based voting, and CNIC verification. It offers smooth, secure voting with advanced Java functionalities, efficient management, and an intuitive user interface for a seamless experience."
          src={projectFour}
          Icon={<BsGithub />}
          Icon1={<FaFileAlt />}
          githubLink="https://github.com/M-Muntazer-Mehdi/Mobile-Dev-Hub"
          fileLink="https://github.com/M-Muntazer-Mehdi/Mobile-Dev-Hub/blob/main/README.md"
        />
        <ProjectsCard
          title="Inventory Tracker"
          des="This desktop application, developed using C# streamlines inventory management with a Super Admin Panel for oversight, user management, and item assignment. The User Admin component handles detailed item management, category organization, and inventory alerts. It also supports requirements gathering and Email/SMS notifications."
          src={projectFive}
          Icon={<BsGithub />}
          Icon1={<FaFileAlt />}
          githubLink="https://github.com/M-Muntazer-Mehdi/Inventory-Tracker"
          fileLink="https://github.com/M-Muntazer-Mehdi/Inventory-Tracker/blob/main/README.md"
        />
        <ProjectsCard
          title="Arabic Dictionary"
          des="This desktop application, built using Java, serves as an Arabic-Urdu dictionary. It supports importing CSV files for word meanings, viewing and searching the dictionary by Arabic word or meaning, and updating entries. The project utilizes a three-layered architecture and integrates various software design patterns and principles."
          src={projectSix}
          Icon={<BsGithub />}
          Icon1={<FaFileAlt />}
          githubLink="https://github.com/M-Muntazer-Mehdi/Arabic-Dictionary"
          fileLink="https://github.com/M-Muntazer-Mehdi/Arabic-Dictionary/blob/main/README.md"
        />
      <ProjectsCard
        title="Data Analysis & Clustering for Retail Optimization"
        des="This Developed in Python, this project uses data analysis and clustering to optimize a department store's electronics section. By examining customer behavior and sales data, it aims to boost sales by 25% and achieve 30% growth in the electronics segment, offering actionable insights for retail improvement."
        src={projectSeven}
        Icon={<BsGithub />}
        Icon1={<FaFileAlt />}
        githubLink="https://github.com/M-Muntazer-Mehdi/Retail-Behavior-Analyzer"
        fileLink="https://github.com/M-Muntazer-Mehdi/Retail-Behavior-Analyzer/blob/main/README.md"
      />
      <ProjectsCard
        title="HotelEase"
        des="This is a sophisticated hotel booking application developed using Dart on Flutter. This frontend app streamlines the reservation process with a user-friendly interface, allowing users to book accommodations, arrange meal deliveries, and request additional hotel services effortlessly."
        src={projectEight}
        Icon={<BsGithub />}
        Icon1={<FaFileAlt />}
        githubLink="https://github.com/M-Muntazer-Mehdi/HotelEase-Frontend"
        fileLink="https://github.com/M-Muntazer-Mehdi/HotelEase-Frontend/blob/main/README.md"
      />
      </div>
    </section>
  );
}

export default Projects