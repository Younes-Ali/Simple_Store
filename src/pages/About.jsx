import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    const heroCtx = gsap.context(() => {
      gsap.fromTo(
        '.about-hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.about-hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }, heroRef);

    // Story Animation
    const storyCtx = gsap.context(() => {
      gsap.fromTo(
        '.story-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, storyRef);

    // Values Animation
    const valuesCtx = gsap.context(() => {
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, valuesRef);

    // Team Animation
    const teamCtx = gsap.context(() => {
      gsap.fromTo(
        '.team-member',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, teamRef);

    return () => {
      heroCtx.revert();
      storyCtx.revert();
      valuesCtx.revert();
      teamCtx.revert();
    };
  }, []);

  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on the quality of our materials and craftsmanship.'
    },
    {
      title: 'Sustainability',
      description: 'Environmental responsibility is at the heart of everything we do.'
    },
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to create unique, modern designs.'
    },
    {
      title: 'Integrity',
      description: 'Honesty and transparency guide our relationships with customers and partners.'
    }
  ];

  const team = [
    { name: 'Younes Ali', role: 'Creative Director' },
    { name: 'Mostafa Ali', role: 'Head Designer' },
    { name: 'Yasser Maher', role: 'Sustainability Manager' },
    { name: 'Abo Treka', role: 'Production Lead' }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-5 bg-gray-50"
      >
        <h1 className="about-hero-title text-5xl md:text-7xl lg:text-8xl font-light tracking-widest mb-5 uppercase">
          About Us
        </h1>
        <p className="about-hero-subtitle text-base md:text-xl lg:text-2xl font-light max-w-2xl text-gray-600">
          Crafting timeless fashion with purpose and passion
        </p>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-24 px-5 bg-white">
        <div className="story-content max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8 text-center uppercase">
            Our Story
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-600 font-light">
            <p>
              Founded in 2015, our journey began with a simple vision: to create clothing 
              that transcends trends and celebrates individuality. What started as a small 
              studio has grown into a globally recognized fashion house, but our core values 
              remain unchanged.
            </p>
            <p>
              Every piece we create is a testament to our commitment to excellence. From the 
              initial sketch to the final stitch, we pour our hearts into crafting garments 
              that not only look beautiful but feel incredible to wear. Our collections are 
              designed for those who appreciate the finer things in life and refuse to 
              compromise on quality.
            </p>
            <p>
              We believe fashion should be sustainable, ethical, and accessible. That's why 
              we work closely with our suppliers to ensure fair practices and use eco-friendly 
              materials whenever possible. Our goal is to make a positive impact on both our 
              customers and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-24 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-16 text-center uppercase">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="value-card p-8 bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 uppercase tracking-wider">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamRef} className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-16 text-center uppercase">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div 
                key={index}
                className="team-member text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 uppercase text-sm tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}