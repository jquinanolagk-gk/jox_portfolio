import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "jochristiquinanola.gk@gmail.com",
      href: "mailto:jochristiquinanola.gk@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+63936-603-0309",
      href: "tel:+639366030309"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Malabuyoc, Cebu, Philippines",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s <span className="text-gold">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi — I’d love to hear from you.
          </p>
        </div>

        {/* Contact Info + Socials */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex flex-col items-center text-center bg-black p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-4 bg-gold/10 rounded-full mb-4 text-gold">
                  {info.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">{info.label}</h4>
                <p className="text-gray-300 text-sm mt-1">{info.value}</p>
              </a>
            ))}
          </div>

          {/* Social Links + Quick Note */}
          <div className="flex flex-col justify-center items-center space-y-8">
            <h3 className="text-2xl font-bold text-white">Follow Me</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-gray-300 hover:text-gold hover:bg-gold/10 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="bg-black rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold mb-3 text-gold">Quick Response</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I respond to all inquiries within <span className="font-semibold">24 hours</span>.  
                For urgent projects, please mention <span className="text-gold">“RUSH”</span> in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
