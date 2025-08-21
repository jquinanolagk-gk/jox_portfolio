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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s <span className="text-gold">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Got a question, an idea, or a project? Let’s collaborate and make
            something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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

        {/* Resume Button */}
        <div className="text-center mb-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            View Resume
          </a>
        </div>

        {/* Quick Response Notice */}
        <div className="max-w-xl mx-auto bg-black rounded-xl p-6 text-center shadow-md">
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

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
