import { useEffect } from "react";
import productsImg from "../assets/images/product.jpg";

export default function HeroProducts() {
    useEffect(() => {
        import("wowjs").then((module) => {
        const WOW = module.default || module.WOW;
        new WOW.WOW({ live: false }).init();
        });
    }, []);
    
    return (
        <section className="relative min-h-[50vh] flex flex-col justify-center items-center text-center px-5 bg-gray-50">
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${productsImg})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10">
            <h1
            className="text-5xl text-creamy md:text-7xl lg:text-8xl font-light tracking-widest mb-5 uppercase wow animate__animated animate__fadeInDown"
            data-wow-duration="1.2s"
            >
            Our Products
            </h1>
            <p
            className="text-base text-creamy md:text-xl lg:text-2xl font-light max-w-2xl wow animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
            data-wow-duration="1s"
            >
            Discover our curated collection of premium fashion
            </p>
        </div>
        </section>
    );
}
