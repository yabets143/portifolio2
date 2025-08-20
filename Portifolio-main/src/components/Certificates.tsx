
import React from "react";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
   const certificates = [
    {
      id: 1,
      name: "Web Application Pentesting Certificate",
      issuer: "TryHackMe",
      date: "July 2025",
      link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-FIFBWDFJ6N.pdf",
      description:
        "Skills: Web Application Security · OWASP · HTTP Request Smuggling · Deserialization Vulnerabilities",
      credentialId: "THM-FIFBWDFJ6N",
    },
    {
      id: 2,
      name: "Jr Penetration Tester Certificate",
      issuer: "TryHackMe",
      date: "June 2025",
      link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-HP19GGGQ9E.pdf",
      description: "Skills: Linux · Red teaming · Penetration testing",
      credentialId: "THM-HP19GGGQ9E",
    },
    {
      id: 3,
      name: "API Penetration Testing",
      issuer: "APIsec University",
      date: "May 2025",
      link: "#",
      description: " security vulnerabilities, and best practices for securing APIs.",
    },
    {
      id: 4,
      name: "Google Cybersecurity Certificate",
      issuer: "Coursera",
      date: "December 2024",
      link: "#",
      description:
        "Skills: Network Security · Information Security · Python (Programming Language) · Linux",
    },
    {
      id: 5,
      name: "Google Cybersecurity Specialization",
      issuer: "Google",
      date: "December 2024",
      link: "#",
      description:
        "Skills: NIST Cybersecurity Framework · Network Security · Information Security · Python (Programming Language) · Linux",
      credentialId: "D80SKI1DHJRF",
    },
    {
      id: 6,
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      date: "March 2023",
      link: "#",
      description:
        "Comprehensive training in cybersecurity tools, techniques, and best practices for securing systems and networks.",
    },
    {
      id: 7,
      name: "5 Million Coders Certificate",
      issuer: "5 Million Coders Initiative",
      date: "November 2022",
      link: "#",
      description:
        "Recognition for completing programming challenges and web development projects as part of a national coding initiative.",
    },
  ];

  return (
    <section id="certificates" className="section bg-tech-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-tech-light">Certificates</h2>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="card bg-tech-darker border-tech-neon/20 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="bg-tech-neon/20 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-tech-neon" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg text-tech-light">{cert.name}</h3>
                  <div className="text-tech-cyan text-sm mb-2">
                    {cert.issuer} • {cert.date}
                  </div>
                  <p className="text-tech-light/80 mb-3">
                    {cert.description}
                  </p>
                  {cert.link && (
                    <a 
                      href={cert.link}
                      className="text-tech-neon hover:text-tech-cyan flex items-center text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
