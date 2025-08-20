
import React from "react";
import SkillCard from "./SkillCard";
import { Code, Database, Globe, Shield, Server } from "lucide-react";

const Skills = () => {
  const programmingSkills = [
    { name: "C#", level: 85, icon: <Code /> },
    { name: "Java", level: 70, icon: <Code /> },
    { name: "Python", level: 80, icon: <Code /> },
  ];

  const webSkills = [
    { name: "HTML & CSS", level: 95, icon: <Globe /> },
    { name: "JavaScript", level: 85, icon: <Code /> },
    { name: "React", level: 80, icon: <Code /> },
    { name: "ASP.NET Web API", level: 95, icon: <Server /> },
  ];


  const databaseSkills = [
  ];

  const securitySkills = [
    { name: "Network Security", level: 70, icon: <Shield /> },
    { name: "Web Security", level: 75, icon: <Shield /> },
    { name: "Secure Coding", level: 80, icon: <Shield /> },
    { name: "Vulnerability Assessment", level: 75, icon: <Shield /> },
    { name: "Penetration Testing", level: 80, icon: <Shield /> },
    { name: "Capture The Flag (CTF)", level: 95, icon: <Shield /> },
    { name: "Exploit Development (Basic)", level: 60, icon: <Shield /> },
    { name: "Reverse Engineering (Malware Analysis)", level: 65, icon: <Shield /> },
    { name: "SIEM & Log Analysis", level: 70, icon: <Shield /> },
    { name: "Cryptography (Practical)", level: 60, icon: <Shield /> },
    { name: "Red Teaming (Intro)", level: 55, icon: <Shield /> },
  ];

  return (
    <section id="skills" className="section bg-tech-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-tech-light">Skills</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-tech-light">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {programmingSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-tech-light">Web Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {webSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-tech-light">Database</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {databaseSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-tech-light">Security</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {securitySkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
