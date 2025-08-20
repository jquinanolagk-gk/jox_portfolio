import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Haroun Gajraj",
      company: "Director of VeinCare Academy",
      image: "/11.png",
      quote: "In all respects, Jochristi's videos have been of exceptional quality. Jox is fast, effecient and reliable. Once she got to know my preferences, the videos were produced with very input from me. In cases, where my audio was of poor quality, she was able to apply a 'fix' and when I had little or no B-roll, Jox was able to source relevant video. I highly recommend her to you if you are looking for a premium video editing service.",
      rating: 5
    },
    {
      name: "Tim Hubbard",
      company: "Real Estate Investor",
      image: "/10.png",
      quote: "Jox did a fabulous job with our videos and was always easy to work with and handled our suggestions very well. She makes top quality videos.",
      rating: 5
    },
    {
      name: "Cameron Alder Jade",
      company: "Content Creator",
      image: "/12.png",
      quote: "Jox is an absolute joy to work with. She consistently takes initiative, adapts easily to my requests and brings my vision to life with every edit. She handles all of my horizontal video editing and I truly can't imagine doing what I do without her. If she happens to have an opening for another client, I recommend that you jump fast! She is worth it.",
      rating: 5
    },
    {
      name: "Dr. Noor Gajraj",
      company: "North Texas Anti-Aging Medical Center",
      image: "/12.png",
      quote: "I have worked with Jochristi for a year. I am very please with her work. She is very effecient. I can recommend her as an asset to your organization without reservation.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear what industry professionals have to say about working with me 
            and the impact of our collaborative projects.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8">
                  <div className="bg-gray-900 rounded-lg p-8 md:p-12 text-center">                    
                    
                    <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center justify-center">
                      <img
                        src={`${import.meta.env.BASE_URL}${testimonial.image}`}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div className="text-left">
                        <div className="font-bold text-white text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-teal text-sm">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gold/10 hover:bg-gold text-gold hover:text-black p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gold/10 hover:bg-gold text-gold hover:text-black p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;