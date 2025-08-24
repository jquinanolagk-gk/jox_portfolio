import React from 'react';
import { Film, Youtube, Search, Image, Layout, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: `${import.meta.env.BASE_URL}VE.png`,
      title: "Video Editing",
      description: "Bring your vision to life with my video editing skills. I transform your raw footage into a polished, engaging story that captivates and connects with your audience. ",
      features: [
        "Short & long-form edits",
        "Social media formats",
        "Color grading & correction",
        "Sound design & audio mixing",
      ],
      price: "From $500",
    },
    {
      icon: `${import.meta.env.BASE_URL}YTCM.png`,
      title: "YouTube Management",
      description:"Let me handle the intricacies of running your YouTube channel. From suggesting video content to community engagement, Let me help you grow and flourish your channel. ",
      features: [
        "Content scheduling & planning",
        "Thumbnail & title optimization",
        "Community engagement & moderation",
      ],
      price: "Custom quote",
    },
    {
      icon: `${import.meta.env.BASE_URL}VS.png`,
      title: "Video SEO",
      description:"Boost your video's visibility with my specialized Video SEO services. I optimize your content to rank higher in search results, attract more viewers, and increase your reach.",
      features: [
        "Keyword research, optimization & Tags",
        "Titles & descriptions optimization",
        "End screens & playlist strategy",
      ],
      price: "From $800",
    },
    {
      icon: `${import.meta.env.BASE_URL}TD.png`,
      title: "Thumbnail Design",
      description: "Stand out in the crowded YouTube landscape with custom-designed thumbnails. My eye-catching designs are tailored to grab attention and drive clicks.",
      features: [
        "Custom graphics & illustrations",
        "Bold, readable text",
        "Color & contrast optimization",
      ],
      price: "From $350",
    },
    {
      icon: `${import.meta.env.BASE_URL}CB.png`,
      title: "Channel Banner Design",
      description:"Create a striking first impression with a professional channel banner. I'll design a cohesive and visually appealing banner that reflects your brand and captivates new visitors.",
      features: [
        "Custom artwork & branding",
        "Responsive for all devices",
        "Consistent colors & fonts",
        "Unlimited revisions included",
      ],
      price: "From $150",
    },
    {
      icon: `${import.meta.env.BASE_URL}CS.png`,
      title: "Channel SEO",
      description:"Improve your channel's discoverability with my Channel SEO expertise. I optimize your overall structure to enhance search rankings and attract more subscribers.",
      features: [
        "Channel description optimization",
        "Playlist & category setup",        
      ],
      price: "Custom quote",
    },
    {
      icon: `${import.meta.env.BASE_URL}OCVE.png`,
      title: "Online Courses Video Editing",
      description: "Enhance online course videos on platforms like Kajabi and Skillshare with high-quality video editing to create clear, engaging, and professional educational content, improving the learning experience for students.",
      features: [
        "Channel description optimization",
        "Playlist & category setup",        
      ],
      price: "Custom quote",
    },
    {
      icon: `${import.meta.env.BASE_URL}EC.png`,
      title: "Endscreen Creation",
      description: "Keep your audience engaged till the very end with my custom endscreen designs. I create dynamic and interactive end screens that encourage viewers to watch more of your content.",
      features: [
        "Channel description optimization",
        "Playlist & category setup",        
      ],
      price: "Custom quote",
    },
    {
      icon: `${import.meta.env.BASE_URL}CIC.png`,
      title: "Channel Intro Creation",
      description: "Make a great first impression with a unique channel intro. My creative intros set the tone for your content, giving your channel a professional and polished look. ",
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
                <div className="p-3 transition-all duration-300">
                  {/* ✅ Render image here */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-black-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-black mb-6 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Services;
