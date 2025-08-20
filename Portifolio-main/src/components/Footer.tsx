
import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-darker text-tech-light py-12 border-t border-tech-neon/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6" id="resume">
            <a
              href="#"
              className="btn-outline flex items-center"
              download="Yabets_Workaferahu_Resume.pdf"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/yabetsw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-light hover:text-tech-neon transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yabetsw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-light hover:text-tech-neon transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:yabetsw@example.com"
              className="text-tech-light hover:text-tech-neon transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="text-tech-light/70 text-sm text-center">
            <p className="mb-2">
              Designed & Built by Yabets Workaferahu
            </p>
            <p>
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
