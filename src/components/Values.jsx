import { useEffect } from "react";
import WOW from "wowjs";
export default function Values() {
    useEffect(() => {
        new WOW.WOW({
        live: false,
        }).init();
    }, []);

    const values = [
        {
        title: "Quality",
        description:
            "We never compromise on the quality of our materials and craftsmanship.",
        },
        {
        title: "Sustainability",
        description:
            "Environmental responsibility is at the heart of everything we do.",
        },
        {
        title: "Innovation",
        description:
            "We constantly push boundaries to create unique, modern designs.",
        },
        {
        title: "Integrity",
        description:
            "Honesty and transparency guide our relationships with customers and partners.",
        },
    ];

    return (
        <section className="py-24 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
            <h2
            className="text-4xl md:text-5xl font-light tracking-wider mb-16 text-center uppercase wow animate__animated animate__fadeInDown"
            data-wow-duration="1s"
            >
            Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
                <div
                key={index}
                className="p-8 bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-300 wow animate__animated animate__fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
                data-wow-duration="0.8s"
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
    );
}
