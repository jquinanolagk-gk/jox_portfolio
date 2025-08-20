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
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create <span className="text-gold">Together</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch to discuss your project 
            and discover how we can create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="flex flex-wrap gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-gray-300 hover:text-gold transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-black rounded-lg group-hover:bg-gold/10 transition-colors duration-300">
                      <div className="text-gold">{info.icon}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>


            <div className="bg-black rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-gold">Quick Response Guarantee</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I respond to all inquiries within 24 hours. For urgent projects, 
                please mention "RUSH" in your subject line for priority handling.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold">Connect With Me</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
