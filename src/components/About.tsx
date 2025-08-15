import React from 'react';
import { Award, Camera, Film } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      number: "25+",
      label: "Awards Won"
    },
    {
      icon: <Camera className="w-8 h-8 text-gold" />,
      number: "200+",
      label: "Projects Completed"
    },
    {
      icon: <Film className="w-8 h-8 text-gold" />,
      number: "8",
      label: "Years Experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-teal/20 rounded-lg transform group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Alex Chen - Video Editor"
              className="relative z-10 w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gold">Alex Chen</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With over 8 years of experience in the film industry, I specialize in creating 
                compelling visual narratives that resonate with audiences. My passion lies in 
                transforming raw footage into cinematic masterpieces that tell powerful stories.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From high-end commercials to intimate documentaries, I bring a unique artistic 
                vision and technical expertise to every project. My goal is always to exceed 
                client expectations while pushing creative boundaries.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;