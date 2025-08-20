
import React from "react";
import TypingEffect from "./TypingEffect";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <p className="text-tech-neon font-mono mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            &gt; Hello_World.sh
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-tech-light opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Yabets Workaferahu
          </h1>
          <h2 className="text-2xl md:text-4xl text-tech-light/70 font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            I build( test ) <span className="text-tech-cyan">
              <TypingEffect
                strings={[
                  "web applications.",
                  "secure systems.",
                  "Web APIs",
                  "software solutions."
                ]}
              />
            </span>
          </h2>
          <p className="text-tech-light/80 max-w-2xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            I'm a software engineering student specializing in web development and
            cybersecurity. Currently focused on building secure, user-friendly
            applications that protect user privacy and data.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <a href="#projects" className="btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-tech-light/50 hover:text-tech-neon transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
