import React from 'react';
import { Film, Youtube, Search, Image, Layout, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Video Editing",
      description:
        "Transform your raw footage into a polished, engaging story. From cinematic cuts to dynamic storytelling, I bring your vision to life.",
      features: [
        "Short & long-form edits",
        "Social media formats",
        "Color grading & correction",
        "Sound design & audio mixing",
      ],
      price: "From $500",
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "YouTube Management",
      description:
        "Grow your YouTube channel with strategic content planning, audience engagement, and analytics-driven optimizations.",
      features: [
        "Content scheduling & planning",
        "Thumbnail & title optimization",
        "Community engagement & moderation",
      ],
      price: "Custom quote",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Video SEO",
      description:
        "Increase your video’s visibility and reach with targeted SEO strategies tailored for YouTube and search engines.",
      features: [
        "Keyword research, optimization & Tags",
        "Titles & descriptions optimization",
        "End screens & playlist strategy",
      ],
      price: "From $800",
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Thumbnail Design",
      description:
        "Create eye-catching thumbnails that grab attention and boost click-through rates on YouTube and social platforms.",
      features: [
        "Custom graphics & illustrations",
        "Bold, readable text",
        "Color & contrast optimization",
      ],
      price: "From $350",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Channel Banner Design",
      description:
        "Design a professional channel banner that makes a strong first impression and reflects your brand’s identity.",
      features: [
        "Custom artwork & branding",
        "Responsive for all devices",
        "Consistent colors & fonts",
        "Unlimited revisions included",
      ],
      price: "From $150",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Channel SEO",
      description:
        "Optimize your overall channel structure and content strategy to attract more subscribers and improve search rankings.",
      features: [
        "Channel description optimization",
        "Playlist & category setup",        
      ],
      price: "Custom quote",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gold">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive video production solutions tailored to your creative vision and business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl border border-yellow-700 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/20 rounded-lg text-yellow-900 group-hover:bg-yellow-300 group-hover:text-black transition-all duration-300">
                  {service.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-yellow-100/90 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-yellow-50/80">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Services;
