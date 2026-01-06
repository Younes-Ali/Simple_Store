import { useEffect } from "react";
import WOW from "wowjs";

export default function Story() {
    useEffect(() => {
        new WOW.WOW({
        live: false,
        }).init();
    }, []);

    return (
        <section className="py-24 px-5 bg-white">
        <div
            className="max-w-4xl mx-auto wow animate__animated animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
        >
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8 text-center uppercase">
            Our Story
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-600 font-light">
            <p>
                Founded in 2015, our journey began with a simple vision: to create
                clothing that transcends trends and celebrates individuality. What
                started as a small studio has grown into a globally recognized
                fashion house, but our core values remain unchanged.
            </p>
            <p>
                Every piece we create is a testament to our commitment to
                excellence. From the initial sketch to the final stitch, we pour our
                hearts into crafting garments that not only look beautiful but feel
                incredible to wear. Our collections are designed for those who
                appreciate the finer things in life and refuse to compromise on
                quality.
            </p>
            <p>
                We believe fashion should be sustainable, ethical, and accessible.
                That's why we work closely with our suppliers to ensure fair
                practices and use eco-friendly materials whenever possible. Our goal
                is to make a positive impact on both our customers and the planet.
            </p>
            </div>
        </div>
        </section>
    );
}
