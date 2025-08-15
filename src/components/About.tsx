import React from 'react';
import { Award, Camera, Film } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Camera className="w-8 h-8 text-gold" />,
      number: "500+",
      label: "Videos Completed"
    },
    {
      icon: <Film className="w-8 h-8 text-gold" />,
      number: "5",
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
              alt="Jochristi Quinanola - Video Editor"
              className="relative z-10 w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gold">Jochristi Quinanola</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I  am a video editor. Self-searching led me to the conclusion that my actual love is to express myself in the form of video editing. I love working with clients and turning their dreams into a real thing. I've had the pleasure of collaborating with some mind-blowing people, and I would be excited to help you discover your own identity through my video editing skills. I'm good at receiving feedback and getting the overall picture of the project, so let's join forces and make something outstanding!
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