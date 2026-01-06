import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SponsorsSection() {
  const sponsorsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sponsor-logo',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sponsorsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sponsorsRef);

    return () => ctx.revert();
  }, []);

  const brands = ['VOGUE', 'ELLE', 'GUCCI', 'PRADA', 'CHANEL', 'DIOR'];

  return (
    <section ref={sponsorsRef} className="py-20 px-5 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
        {brands?.map((brand, index) => (
          <div 
            key={index} 
            className="sponsor-logo text-xl md:text-2xl font-bold tracking-widest text-center text-gray-900 p-8 border border-gray-200 hover:border-gray-400 transition-colors duration-300"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}