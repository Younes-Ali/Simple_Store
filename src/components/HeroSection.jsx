import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImg from '../assets/images/heroSec.jpg';
import { Link } from 'react-router-dom';

export default function HeroSection() {

  
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        '.hero-headline',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${heroImg}')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="hero-headline text-5xl md:text-7xl lg:text-8xl font-light tracking-widest mb-5 uppercase text-white drop-shadow-lg">
          ELEVATE YOUR STYLE
        </h1>
        <p className="hero-subtitle text-base md:text-xl lg:text-2xl font-light mb-10 max-w-xl text-white drop-shadow-md">
          Discover timeless elegance and modern sophistication
        </p>
        <Link to="/products" className="hero-cta px-12 py-4 text-base font-medium tracking-widest uppercase bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl">
          Shop Now
        </Link>
      </div>
    </section>
  );
}