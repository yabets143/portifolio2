import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section bg-tech-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-tech-light">Experience</h2>

        <div className="max-w-3xl mx-auto">
          {/* Experience Item 1 */}
          <div className="relative border-l-2 border-tech-cyan pl-8 pb-6">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-tech-cyan border-4 border-tech-dark"></div>
            <div className="card bg-tech-darker border-tech-neon/20">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-xl text-tech-light">
                  Junior Penetration Tester
                </h3>
                <span className="bg-tech-neon/20 text-tech-neon text-xs px-2 py-1 rounded-full">
                  Internship
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-tech-cyan mb-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>Abronal Technologies PLC</span>
                </div>
                <div className="flex items-center text-tech-cyan">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 2025 – Present · Hybrid</span>
                </div>
              </div>

              <div>
                <p className="text-tech-light/80">
                  Driving hands-on penetration testing activities, identifying
                  security weaknesses, and contributing to vulnerability
                  assessments.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative border-l-2 border-tech-cyan pl-8 pb-6">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-tech-cyan border-4 border-tech-dark"></div>
            <div className="card bg-tech-darker border-tech-neon/20">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-xl text-tech-light">
                  Cyber Security Division Member
                </h3>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-tech-cyan mb-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>CSEC-ASTU</span>
                </div>
                <div className="flex items-center text-tech-cyan">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>May 2025 – Present</span>
                </div>
              </div>

              <div>
                <p className="text-tech-light/80">
                  Actively engaging in cybersecurity research, participating in
                  CTF challenges, and collaborating on security awareness
                  initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="relative border-l-2 border-tech-cyan pl-8 pb-6">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-tech-cyan border-4 border-tech-dark"></div>
            <div className="card bg-tech-darker border-tech-neon/20">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-xl text-tech-light">
                  Junior Penetration Tester
                </h3>
                <span className="bg-tech-neon/20 text-tech-neon text-xs px-2 py-1 rounded-full">
                  Internship
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-tech-cyan mb-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>eTech S.C.</span>
                </div>
                <div className="flex items-center text-tech-cyan">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>May 2025 – Present · Remote</span>
                </div>
              </div>

              <div>
                <p className="text-tech-light/80">
                  Performing security testing on web applications and APIs,
                  supporting the team in enhancing system security posture.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 4 */}
          <div className="relative border-l-2 border-tech-cyan pl-8 pb-6">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-tech-cyan border-4 border-tech-dark"></div>
            <div className="card bg-tech-darker border-tech-neon/20">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-xl text-tech-light">
                  Software Engineer Intern
                </h3>
                <span className="bg-tech-neon/20 text-tech-neon text-xs px-2 py-1 rounded-full">
                  Internship
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-tech-cyan mb-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>Cybersoft Plc, Ethiopia</span>
                </div>
                <div className="flex items-center text-tech-cyan">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 2024 – Sep 2024 · On-site, Addis Ababa</span>
                </div>
              </div>

              <div>
                <p className="text-tech-light/80">
                  Created and collaborated to build a full e-commerce website
                  using ASP.NET Web API and React.js. My responsibilities
                  included developing all backend APIs and partial frontend
                  participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
