import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Simple Medical Marketing - Haroun Gajraj",
      category: "Talking Head Video",
      thumbnail: "/1.png",
      video: "https://www.youtube-nocookie.com/embed/vLIR_FHDMys",
      description: "A simple guide to marketing your medical, aesthetic, or private practice clinic."
    },
    {
      id: 2,
      title: "How to Perform CPR 2022 (Nursing Students)",
      category: "Nursing Video",
      thumbnail: "/2.png",
      video: "https://www.youtube-nocookie.com/embed/-BN420A1XKg",
      description: "A CPR training video for nursing students and new graduates."
    },
    {
      id: 3,
      title: "Promotional Video",
      category: "Promotional Video",
      thumbnail: "/8.png",
      video: "https://www.youtube.com/embed/DaqBFF48iOo",
      description: "Learn how to create a promotional video."
    },
    {
      id: 4,
      title: "Oklahoma Restaurant Tour",
      category: "Vlog Video",
      thumbnail: "/4.png",
      video: "https://www.youtube-nocookie.com/embed/abr05jdQA9o",
      description: "Explore five must-try restaurants in Norman, Oklahoma."
    },
    {
      id: 5,
      title: "Intro Video",
      category: "Intro Video",
      thumbnail: "/5.png",
      video: "https://www.youtube-nocookie.com/embed/eZjqrfFjyTI",
      description: "Step-by-step guide to making sushi at home."
    },
    {
      id: 6,
      title: "Faceless Video",
      category: "Faceless Video",
      thumbnail: "/6.png",
      video: "https://www.youtube.com/embed/Sh86BeAuOag",
      description: "Creating compelling YouTube titles and descriptions."
    },
    {
      id: 7,
      title: "Oklahoma Home Tour",
      category: "Home Tour Video",
      thumbnail: "/7.png",
      video: "https://www.youtube-nocookie.com/embed/KqWeWqCoshc",
      description: "Efficiently create a home tour video."
    },
    {
      id: 8,
      title: "Tech-based Video",
      category: "Tech-based Video",
      thumbnail: "/13.jpg",
      video: "https://www.youtube.com/embed/O7d9qkVo9Z8",
      description: "****."
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
            Explore the stories I've helped tell and be inspired by the creativity and expertise
          </p>
        </div>

        {/* 🔥 Carousel instead of grid */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredVideo(project.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                style={{ height: 500 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  {hoveredVideo === project.id ? (
                    project.video.includes("youtube") ? (
                      <iframe
                        className="w-full h-full object-cover"
                        src={
                          project.video +
                          "?autoplay=1&loop=1&playlist=" +
                          project.video.split("/embed/")[1]
                        }
                        title={project.title}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
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
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-teal text-sm font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-3">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
