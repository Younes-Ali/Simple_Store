import { useEffect } from 'react';
export default function SponsorsSection() {
  


  const brands = ['VOGUE', 'ELLE', 'GUCCI', 'PRADA', 'CHANEL', 'DIOR'];


  useEffect(() => {
    import("wowjs").then((module) => {
      const WOW = module.default || module.WOW;
      new WOW.WOW({ live: false }).init();
    });
  }, []);

  return (
    <section className="py-20 px-5 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <div 
            key={index} 
            className="text-xl md:text-2xl font-bold tracking-widest text-center text-gray-900 p-8 border border-gray-200 hover:border-gray-400 transition-colors duration-300 wow animate__animated animate__fadeInUp"
            data-wow-delay={`${index * 0.15}s`}
            data-wow-duration="0.8s"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}