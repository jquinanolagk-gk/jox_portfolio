import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [    
    { icon: <Mail className="w-5 h-5" />, href: "mailto:jochristiquinanola.gk@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent mb-4">
              JOCHRISTI QUIÑANOLA
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Award-winning video editor crafting visual masterpieces that captivate 
              audiences and drive results. Let's bring your vision to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-gold hover:bg-gold/10 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:jochristiquinanola.gk@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                jochristiquinanola.gk@gmail.com
              </a>
              <a 
                href="tel:+15551234567"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                +63993-660-30309
              </a>
              <p className="text-gray-400">
                Malabuyoc, Cebu, Philippines
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Jochristi Quiñanola. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;