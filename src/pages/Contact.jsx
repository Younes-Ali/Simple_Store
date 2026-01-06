import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .min(10, 'Phone must be at least 10 digits'),
      subject: Yup.string()
        .required('Subject is required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required')
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form values:', values);
      alert('Thank you for contacting us! We will get back to you soon.');
      resetForm();
    }
  });

  useEffect(() => {
    // Hero Animation
    const heroCtx = gsap.context(() => {
      gsap.fromTo(
        '.contact-hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.contact-hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }, heroRef);

    // Form Animation
    const formCtx = gsap.context(() => {
      gsap.fromTo(
        '.contact-form-wrapper',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, formRef);

    // Info Animation
    const infoCtx = gsap.context(() => {
      gsap.fromTo(
        '.contact-info-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, infoRef);

    return () => {
      heroCtx.revert();
      formCtx.revert();
      infoCtx.revert();
    };
  }, []);

  const contactInfo = [
    {
      title: 'Email',
      content: 'hello@fashionbrand.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      content: '+1 (555) 123-4567',
      icon: '📞'
    },
    {
      title: 'Address',
      content: '123 Fashion Street, New York, NY 10001',
      icon: '📍'
    },
    {
      title: 'Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      icon: '🕒'
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-5 bg-gray-50"
      >
        <h1 className="contact-hero-title text-5xl md:text-7xl lg:text-8xl font-light tracking-widest mb-5 uppercase">
          Contact Us
        </h1>
        <p className="contact-hero-subtitle text-base md:text-xl lg:text-2xl font-light max-w-2xl text-gray-600">
          We'd love to hear from you. Get in touch with us today.
        </p>
      </section>

      {/* Form and Info Section */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef}>
            <div className="contact-form-wrapper">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 uppercase">
                Send us a message
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-5 py-4 text-base border ${
                      formik.touched.name && formik.errors.name
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } bg-gray-50 focus:border-gray-400 focus:outline-none transition-colors duration-300`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-5 py-4 text-base border ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } bg-gray-50 focus:border-gray-400 focus:outline-none transition-colors duration-300`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-5 py-4 text-base border ${
                      formik.touched.phone && formik.errors.phone
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } bg-gray-50 focus:border-gray-400 focus:outline-none transition-colors duration-300`}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-5 py-4 text-base border ${
                      formik.touched.subject && formik.errors.subject
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } bg-gray-50 focus:border-gray-400 focus:outline-none transition-colors duration-300`}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows="6"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-5 py-4 text-base border ${
                      formik.touched.message && formik.errors.message
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } bg-gray-50 resize-y focus:border-gray-400 focus:outline-none transition-colors duration-300`}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                  )}
                </div>

                <button 
                  type="button"
                  onClick={formik.handleSubmit}
                  disabled={formik.isSubmitting}
                  className="px-12 py-4 text-base font-medium tracking-widest uppercase bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-400 transition-all duration-300"
                >
                  {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div ref={infoRef}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 uppercase">
              Get in touch
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="contact-info-card p-6 bg-gray-50 border border-gray-200 hover:border-gray-400 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 h-64 bg-gray-200 border border-gray-300 flex items-center justify-center">
              <p className="text-gray-500 uppercase tracking-wider">Map Location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}