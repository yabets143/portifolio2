
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Adding metadata for SEO and accessibility
  useEffect(() => {
    document.title = "Yabets Workaferahu | Software Engineer & Security Specialist";
    
    // Add meta descriptions for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Portfolio of Yabets Workaferahu, a software engineering student specializing in web development and cybersecurity."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-tech-darker text-tech-light matrix-bg">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
