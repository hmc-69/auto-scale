import React from 'react';

const testimonials = [
  {
    quote: "AutoScale completely transformed how our engineering team operates. We replaced 4 different tools with one cohesive platform. The AI reasoning engine is magic.",
    author: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "TechFlow",
    rating: 5,
    avatar: "SJ"
  },
  {
    quote: "The visual workflow builder let our non-technical operations team automate their entire lead qualification process in an afternoon. Incredible ROI.",
    author: "Michael Chen",
    role: "Head of Operations",
    company: "NexusCorp",
    rating: 5,
    avatar: "MC"
  },
  {
    quote: "Security was our main concern, but AutoScale's enterprise features gave our infosec team total peace of mind. The performance at scale is unmatched.",
    author: "Elena Rodriguez",
    role: "CTO",
    company: "GlobalFinance",
    rating: 5,
    avatar: "ER"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-oceanic relative overflow-hidden" aria-label="Customer Testimonials">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nocturnal/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-powder mb-6">
            Loved by engineering teams
          </h2>
          <p className="text-lg text-mint/80 font-sans">
            Don't just take our word for it. Here's what industry leaders are saying about AutoScale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="glass-card rounded-2xl p-8 border border-mint/10 hover:border-forsythia/30 hover:shadow-[0_0_20px_rgba(255,200,1,0.05)] transition-all duration-300 flex flex-col group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-forsythia" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-mint text-lg font-sans leading-relaxed mb-8 flex-1 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-nocturnal border border-mint/20 flex items-center justify-center text-powder font-bold text-sm group-hover:bg-gradient-to-br group-hover:from-forsythia group-hover:to-saffron group-hover:text-oceanic group-hover:border-transparent transition-all">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-powder font-bold font-sans">{testimonial.author}</h4>
                  <p className="text-mint/60 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
