import { useEffect } from 'react';
import WOW from 'wowjs';

export default function AboutSection() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  return (
    <section className="py-24 px-5 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center wow animate__animated animate__fadeInUp" data-wow-duration="1s">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-8 uppercase">
          About Our Brand
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-light">
          We are a contemporary fashion house dedicated to creating sophisticated, 
          sustainable clothing that empowers individuals to express their unique style. 
          Our collections blend timeless elegance with modern innovation, crafted with 
          meticulous attention to detail and the finest materials. Each piece tells a 
          story of craftsmanship, quality, and the art of refined living.
        </p>
      </div>
    </section>
  );
}