import React, { useState } from "react";
import repo1 from "./Images/repo1.JPG";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-slate-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src={repo1}
              style={{height: "500px", width:"300px"}}
              alt="Isabwe Reponse"
              className="rounded-lg shadow-lg h-100 object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Hi, I'm <span className="font-semibold">Isabwe Reponse</span> from Musanze, Rwanda.
              I am a passionate Full-Stack Developer and UI/UX Designer building modern web and mobile applications
              with cutting-edge technologies.
            </p>

            {/* Tabs */}
            <div className="flex gap-4">
              {["skills", "experience", "education"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-md font-medium transition
                    ${
                      activeTab === tab
                        ? "bg-blue-400 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="mt-6 space-y-4">
              {activeTab === "skills" && (
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold text-blue-400">UI/UX:</span> Designing modern web and app interfaces
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">Web Development:</span> Building responsive, fast web apps
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">App Development:</span> Creating Android & iOS applications
                  </li>
                </ul>
              )}

              {activeTab === "experience" && (
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold text-blue-400">2023-2024:</span> L3 School Internship In EAV Gitwe TSS
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">2024-2025:</span> L4 Internship In DynaSoft Company Ltd 
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">2025-2026:</span> L5 Internship In CSAMZ TSS by E-notifier Company ltd
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400"> </span> 
                  </li>
                </ul>
              )}

              {activeTab === "education" && (
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold text-blue-400">2023-2024:</span> L3.Responsive UI/Frontend Design In EAV Gitwe TSS
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">2024-2025:</span> L4.Backend And API Development In CSAMZ TSS
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">2025-2026:</span> L5.Full-Stack Development In CSAMZ TSS
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;