import { useEffect } from 'react';
import heroImg from '../assets/images/heroSec.jpg';

export default function HeroSection() {
  useEffect(() => {
    import("wowjs").then((module) => {
      const WOW = module.default || module.WOW;
      new WOW.WOW({ live: false }).init();
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-widest mb-5 uppercase text-white drop-shadow-2xl wow animate__animated animate__fadeInUp"
          data-wow-duration="1.2s"
          data-wow-delay="0.2s"
        >
          ELEVATE YOUR STYLE
        </h1>
        <p 
          className="text-base md:text-xl lg:text-2xl font-light mb-10 max-w-xl text-white drop-shadow-lg wow animate__animated animate__fadeInUp"
          data-wow-delay="0.3s"
          data-wow-duration="1s"
        >
          Discover timeless elegance and modern sophistication
        </p>
        <button 
          className="px-12 py-4 text-base font-medium tracking-widest uppercase bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-xl wow animate__animated animate__zoomIn"
          data-wow-delay="0.6s"
          data-wow-duration="0.8s"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}