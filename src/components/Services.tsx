import React from 'react';
import { Film, Scissors, Palette, Zap, Clock, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Commercial Editing",
      description: "High-impact commercial videos that drive brand awareness and conversions.",
      features: ["30/60 second spots", "Social media formats", "Brand storytelling", "Call-to-action optimization"],
      price: "From $2,500"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Documentary Production",
      description: "Compelling documentary editing that brings real stories to life.",
      features: ["Narrative structure", "Interview editing", "B-roll integration", "Audio sweetening"],
      price: "From $5,000"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Color Grading",
      description: "Professional color correction and grading for cinematic visuals.",
      features: ["LUT creation", "Mood enhancement", "Skin tone correction", "Style consistency"],
      price: "From $800"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Music Videos",
      description: "Creative music video editing with rhythm and visual flair.",
      features: ["Beat synchronization", "Creative transitions", "Visual effects", "Multiple camera angles"],
      price: "From $3,500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rush Delivery",
      description: "Express editing service for urgent projects with tight deadlines.",
      features: ["24-48 hour turnaround", "Priority support", "Quality guarantee", "Revision included"],
      price: "50% surcharge"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Full Production",
      description: "End-to-end video production from concept to final delivery.",
      features: ["Pre-production planning", "Shooting direction", "Post-production", "Delivery & distribution"],
      price: "Custom quote"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gold">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive video editing solutions tailored to meet your creative vision 
            and business objectives with industry-leading quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-black rounded-lg border border-gray-800 hover:border-gold/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gold/10 rounded-lg text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  {service.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gold font-semibold">{service.price}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-1 h-1 bg-teal rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 font-semibold">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;