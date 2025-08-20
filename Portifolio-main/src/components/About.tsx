
import React from "react";

const About = () => {
  return (
    <section id="about" className="section bg-tech-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-tech-light">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-tech-light">
            <p className="text-lg">
              Hello! I'm Yabets Workaferahu, a software engineering student based in 
              <span className="font-medium text-tech-neon"> Addis Ababa, Ethiopia</span>. I'm passionate about 
              creating software that combines good design with robust security practices.
            </p>
            
            <p>
              I'm currently pursuing my degree in Software Engineering at 
              <span className="font-medium text-tech-neon"> Adama Science and Technology University</span>, 
              where I'm learning to develop solutions that are not only functional 
              but also secure and user-friendly.
            </p>
            
            <p>
              My interest in cybersecurity began during my early programming courses, 
              where I realized how crucial security is in today's digital landscape. 
              This passion led me to explore both development and security aspects of software,
              giving me a unique perspective on building robust applications.
            </p>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-2 text-tech-cyan">When I'm not coding, I enjoy:</h3>
              <ul className="list-disc list-inside space-y-1 text-tech-light/80">
                <li>Drawing - Exploring creativity through sketching and digital art</li>
                <li>Reading - Books about technology, science fiction, and cybersecurity</li>
                <li>Sports - Staying active through soccer and basketball</li>
              </ul>
            </div>
          </div>
          
          <div className="code-box hidden md:block">
            <pre><code>{`
const aboutYabets = {
  education: "Adama Science & Technology University",
  major: "Software Engineering",
  location: "Addis Ababa, Ethiopia",
  interests: [
    "Web Development", 
    "Cybersecurity",
    "Database Design"
  ],
  hobbies: [
    "Drawing",
    "Reading",
    "Sports"
  ],
  currentFocus: "Building secure web applications"
};
            `}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
