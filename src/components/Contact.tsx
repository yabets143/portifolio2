
import React, { useState } from "react";
import { Send, AlertCircle, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would typically be an API call, but we'll simulate it
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({});
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-tech-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-tech-light">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <p className="text-tech-light/80 mb-6">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-tech-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-tech-darker px-4 py-2 border border-tech-neon/30 rounded-lg focus:ring-2 focus:ring-tech-neon focus:border-tech-neon outline-none transition text-tech-light"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-tech-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full bg-tech-darker px-4 py-2 border border-tech-neon/30 rounded-lg focus:ring-2 focus:ring-tech-neon focus:border-tech-neon outline-none transition text-tech-light"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-tech-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-tech-darker px-4 py-2 border border-tech-neon/30 rounded-lg focus:ring-2 focus:ring-tech-neon focus:border-tech-neon outline-none transition text-tech-light"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
              
              {submitStatus.message && (
                <div className={`mt-4 p-3 rounded-lg flex items-center ${
                  submitStatus.success ? "bg-tech-neon/20 text-tech-neon" : "bg-red-900/20 text-red-400"
                }`}>
                  {submitStatus.success ? (
                    <CheckCircle className="h-5 w-5 mr-2" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mr-2" />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
          
          <div className="code-box hidden md:block">
            <pre><code>{`
const contactInfo = {
  email: "yabetsw@example.com",
  location: "Addis Ababa, Ethiopia",
  availableFor: [
    "Full-time positions",
    "Freelance projects",
    "Open source collaboration"
  ],
  response: {
    time: "< 24 hours",
    priority: "high"
  }
};

// Sending your message...
await sendMessage(yourMessage);
            `}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
