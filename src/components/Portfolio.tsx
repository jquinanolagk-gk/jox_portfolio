import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Simple Medical Marketing - Haroun Gajraj",
      category: "Medical",
      thumbnail: "/1.png",
      video: "https://www.youtube-nocookie.com/embed/vLIR_FHDMys",
      description: "A simple guide to marketing your medical, aesthetic, or private practice clinic. Discover proven strategies to attract patients, generate leads, and grow your practice."
    },
    {
      id: 2,
      title: "How to Perform CPR 2022 (Nursing Students)",
      category: "Education / CPR Training",
      thumbnail: "/2.png",
      video: "https://www.youtube-nocookie.com/embed/-BN420A1XKg",
      description: "A Cardiopulmonary Resuscitation (CPR) training video for nursing students and new graduates, demonstrating the essential steps to perform effective CPR."
    },

    {
      id: 3,
      title: "Welcome to Short Term Rental Riches Youtube Channel",
      category: "Technology / AI Tools",
      thumbnail: "/3.png",
      video: "https://www.youtube-nocookie.com/embed/_B5feDP3tbI",
      description: "Discover how to efficiently collect data from various websites using an innovative AI tool. This tutorial provides step-by-step guidance on leveraging AI for web data extraction."
    },
    {
      id: 4,
      title: "Oklahoma Restaurant Tour: 5 Must-Try Spots in Norman",
      category: "Travel & Events",
      thumbnail: "/4.png",
      video: "https://www.youtube-nocookie.com/embed/abr05jdQA9o",
      description: "Explore five must-try restaurants in Norman, Oklahoma — from cozy cafés to local favorites, discover the best dining spots in town."
    },
    {
      id: 5,
      title: "Intro Video",
      category: "How-to & Style",
      thumbnail: "/5.png",
      video: "https://www.youtube-nocookie.com/embed/eZjqrfFjyTI",
      description: "Learn how to make sushi at home with this step-by-step guide. From selecting the right ingredients to mastering rolling techniques, become a sushi-making pro in your own kitchen."
    },
    {
      id: 6,
      title: "Faceless Video",
      category: "Education",
      thumbnail: "/6.png",
      video: "https://www.youtube.com/embed/eZjqrfFjyTI?start=24",
      description: "Learn how to create compelling YouTube titles and descriptions to boost views and engagement on your videos."
    },

  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A curated selection of my finest work across various genres and formats, 
            showcasing versatility and creative excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredVideo(project.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                {hoveredVideo === project.id ? (
                  project.video.includes("youtube") ? (
                    <iframe
                      className="w-full h-full object-cover"
                      src={project.video + "?autoplay=1&mute=1&loop=1&playlist=" + project.video.split("/embed/")[1]}
                      title={project.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )
                ) : (
                  <img
                    src={`${import.meta.env.BASE_URL}${project.thumbnail}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-teal text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;