import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="py-24 px-5 bg-gray-50">
      <div className="about-content max-w-4xl mx-auto text-center">
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