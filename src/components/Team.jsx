import { useEffect } from "react";
import WOW from "wowjs";

export default function Team() {
    useEffect(() => {
        new WOW.WOW({
        live: false,
        }).init();
    }, []);
    const team = [
        { name: "Younes Ali", role: "Creative Director" },
        { name: "Mostafa Ali", role: "Head Designer" },
        { name: "Yasser Maher", role: "Sustainability Manager" },
        { name: "Abo Treka", role: "Production Lead" },
    ];
    return (
        <section className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2
            className="text-4xl md:text-5xl font-light tracking-wider mb-16 text-center uppercase wow animate__animated animate__fadeInDown"
            data-wow-duration="1s"
            >
            Meet The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
                <div
                key={index}
                className="text-center wow animate__animated animate__zoomIn"
                data-wow-delay={`${index * 0.15}s`}
                data-wow-duration="0.8s"
                >
                <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 uppercase text-sm tracking-wider">
                    {member.role}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
