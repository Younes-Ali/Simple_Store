import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import SponsorsSection from "../components/SponsorsSection";


export default function HomePage() {


  useEffect(() => {
    // Refresh ScrollTrigger after all content is loaded
    ScrollTrigger.refresh();
    
    return () => {
      // Kill all ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);




  return (
    <div className="font-sans text-gray-900 bg-white">
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
