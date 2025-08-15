import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Simple Medical Marketing - Haroun Gajraj",
      category: "Medical",
      thumbnail: "/1.jpg", // from /public/thumbnails
      video: "https://www.youtube.com/watch?v=vLIR_FHDMys",
      description: "A cinematic commercial showcasing the elegance and precision of luxury timepieces."

    },

    {
      id: 2,
      title: "Documentary - Ocean Conservation",
      category: "Documentary",
      thumbnail: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
      description: "An award-winning documentary about marine life and conservation efforts."
    },
    {
      id: 3,
      title: "Music Video - Electronic Dreams",
      category: "Music Video",
      thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
      description: "A visually stunning music video with dynamic editing and color grading."
    },
    {
      id: 4,
      title: "Corporate Story - Tech Innovation",
      category: "Corporate",
      thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
      description: "A compelling corporate video highlighting innovation and company culture."
    },
    {
      id: 5,
      title: "Fashion Film - Urban Collection",
      category: "Fashion",
      thumbnail: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
      description: "A high-fashion film showcasing an urban streetwear collection."
    },
    {
      id: 6,
      title: "Short Film - The Last Light",
      category: "Short Film",
      thumbnail: "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
      description: "An emotional short film about hope and resilience in challenging times."
    }
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
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                
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