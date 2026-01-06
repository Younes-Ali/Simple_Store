import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import WOW from "wowjs";

export default function FormConact() {
    
    const wow = new WOW.WOW({
        live: true,
    }); 

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2).required(),
            email: Yup.string().email().required(),
            phone: Yup.string().min(10),
            subject: Yup.string().required(),
            message: Yup.string().min(10).required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            alert("Thank you for contacting us!");
            resetForm();
        },
    });
    
    const contactInfo = [
        { title: "Email", content: "hello@fashionbrand.com", icon: "📧" },
        { title: "Phone", content: "+1 (555) 123-4567", icon: "📞" },
        { title: "Address", content: "123 Fashion Street, New York", icon: "📍" },
        { title: "Hours", content: "Mon - Fri: 9AM - 6PM", icon: "🕒" },
    ];


    useEffect(() => {
        wow.init();
    }, []);
    return (
        <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="wow animate__animated animate__fadeInLeft">
            <h2 className="text-3xl font-light tracking-wider mb-8 uppercase">
                Send us a message
            </h2>

            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
                <input
                name="name"
                placeholder="Your Name *"
                {...formik.getFieldProps("name")}
                className="input w-full bg-creamy border border-gray-900"
                />
                <input
                name="email"
                placeholder="Your Email *"
                {...formik.getFieldProps("email")}
                className="input w-full bg-creamy border border-gray-900"
                />
                <input
                name="phone"
                placeholder="Your Phone"
                {...formik.getFieldProps("phone")}
                className="input w-full bg-creamy border border-gray-900"
                />
                <input
                name="subject"
                placeholder="Subject *"
                {...formik.getFieldProps("subject")}
                className="input w-full bg-creamy border border-gray-900"
                />
                <textarea
                rows="6"
                name="message"
                placeholder="Your Message *"
                {...formik.getFieldProps("message")}
                className="input w-full bg-creamy border border-gray-900"
                />

                <button
                type="submit"
                className="px-12 py-4 bg-gray-900 text-white uppercase tracking-widest hover:bg-gray-800 transition"
                >
                Send Message
                </button>
            </form>
            </div>

            {/* Info */}
            <div>
            <h2 className="text-3xl font-light tracking-wider mb-8 uppercase">
                Get in touch
            </h2>

            <div className="space-y-6">
                {contactInfo.map((info, i) => (
                <div
                    key={i}
                    className="wow animate__animated animate__fadeInUp p-6 bg-gray-50 border"
                    data-wow-delay={`${i * 0.8}s`}
                    data-wow-duration="0.8s"
                >
                    <div className="flex gap-4">
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                        <h3 className="uppercase tracking-wider font-semibold">
                        {info.title}
                        </h3>
                        <p className="text-gray-600">{info.content}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
                <div className="mt-10 h-64 bg-gray-200 flex items-center justify-center">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33854.562523679095!2d31.167779165872!3d30.458952568215956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145875f6592ee989%3A0xa0f7a3872335c0ce!2sBanha%2C%20Qism%20Banha%2C%20Banha%2C%20Al-Qalyubia%20Governorate!5e1!3m2!1sen!2seg!4v1767722657018!5m2!1sen!2seg"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Banha Location Map"
                        />
                </div>    
            </div>
        </div>
        </section>
    );
}
