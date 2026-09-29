import React from "react";

import { AppProvider } from "./context/AppContext";
import Grain from "./components/ui/Grain";
import BootSequence from "./components/ui/BootSequence";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import SelectedWork from "./components/work/SelectedWork";
import ProjectRegister from "./components/work/ProjectRegister";
import Experience from "./components/experience/Experience";
import EngineeringSystem from "./components/system/EngineeringSystem";
import Toolchain from "./components/system/Toolchain";
import Education from "./components/system/Education";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <AppProvider>
      <BootSequence />
      <Grain />
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <SelectedWork />
          <ProjectRegister />
          <Experience />
          <EngineeringSystem />
          <Toolchain />
          <Education />

          <Contact />
        </main>

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
