import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "jochristiquinanola.gk@gmail.com",
      href: "mailto:jochristiquinanola.gk@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+63936-603-0309",
      href: "tel:+639366030309",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/jochristi-quiñanola-4309671a1/",
      href: "https://linkedin.com/in/jochristi-quiñanola-4309671a1/",
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s <span className="text-gold">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg w-full">
            Got a question, an idea, or a project? Let’s collaborate and make something amazing together.
          </p>

        </div>

        {/* Resume Button */}
        <div className="text-center mb-8 w-full">
          <a
            href={`${import.meta.env.BASE_URL}/JochrisitiCurriclumVitae.pdf`}            
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            View My Resume
          </a>
        </div>          

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center bg-black p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-4 bg-gold/10 rounded-full mb-4 text-gold">
                {info.icon}
              </div>
              <h4 className="text-lg font-semibold text-white">
                {info.label}
              </h4>
              <p className="text-gray-300 text-sm mt-1">{info.value}</p>
            </a>
          ))}
        </div>      

        {/* Quick Response Notice */}
        <div className="w-full mx-auto bg-black rounded-xl p-6 text-center shadow-md mb-8">
          <h4 className="text-xl font-semibold mb-3 text-gold">
            Quick Response
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            I respond to all inquiries within{" "}
            <span className="font-semibold">24 hours</span>. <br />
            For urgent projects, please mention{" "}
            <span className="text-gold font-semibold">“RUSH”</span> in your
            subject line.
          </p>
        </div>      
        
      </div>
    </section>
  );
};

export default Contact;
