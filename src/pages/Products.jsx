import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [categories, setCategories] = useState([]);

    const heroRef = useRef(null);
    const productsRef = useRef(null);

    useEffect(() => {
        // Fetch products
        const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
            setLoading(false);
        } catch (err) {
            setError("Failed to load products");
            setLoading(false);
        }
        };

        // Fetch categories
        const fetchCategories = async () => {
        try {
            const response = await axios.get(
            "https://fakestoreapi.com/products/categories"
            );
            setCategories(["all", ...response.data]);
        } catch (err) {
            console.error("Failed to load categories");
        }
        };

        fetchProducts();
        fetchCategories();
    }, []);

    useEffect(() => {
        // Hero Animation
        const heroCtx = gsap.context(() => {
        gsap.fromTo(
            ".products-hero-title",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );

        gsap.fromTo(
            ".products-hero-subtitle",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );
        }, heroRef);

        return () => heroCtx.revert();
    }, []);

    useEffect(() => {
        if (!loading && products.length > 0) {
        const ctx = gsap.context(() => {
            gsap.fromTo(
            ".product-card",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                trigger: productsRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
                },
            }
            );
        }, productsRef);

        return () => ctx.revert();
        }
    }, [loading, products, selectedCategory]);

    const filteredProducts =
        selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen">
        {/* Hero Section */}
        <section
            ref={heroRef}
            className="min-h-[50vh] flex flex-col justify-center items-center text-center px-5 bg-gray-50"
        >
            <h1 className="products-hero-title text-5xl md:text-7xl lg:text-8xl font-light tracking-widest mb-5 uppercase">
            Our Products
            </h1>
            <p className="products-hero-subtitle text-base md:text-xl lg:text-2xl font-light max-w-2xl text-gray-600">
            Discover our curated collection of premium fashion
            </p>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-5 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                >
                    {category}
                </button>
                ))}
            </div>
            </div>
        </section>

        {/* Products Grid */}
        <section ref={productsRef} className="py-16 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
            {loading ? (
                <div className="flex justify-center items-center min-h-100">
                <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : error ? (
                <div className="alert alert-error">
                <span>{error}</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="product-card"
                    >
                    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                        <figure className="px-6 pt-6 h-64 bg-white">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-contain"
                        />
                        </figure>
                        <div className="card-body bg-gray-900">
                        <h2 className="card-title text-base font-semibold line-clamp-2">
                            {product.title}
                        </h2>
                        <p className="text-sm text-white uppercase tracking-wider">
                            {product.category}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="rating rating-sm">
                            <input
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                disabled
                                checked={product.rating.rate >= 1}
                                readOnly
                            />
                            <input
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                disabled
                                checked={product.rating.rate >= 2}
                                readOnly
                            />
                            <input
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                disabled
                                checked={product.rating.rate >= 3}
                                readOnly
                            />
                            <input
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                disabled
                                checked={product.rating.rate >= 4}
                                readOnly
                            />
                            <input
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                disabled
                                checked={product.rating.rate >= 5}
                                readOnly
                            />
                            </div>
                            <span className="text-sm text-gray-500">
                            ({product.rating.count})
                            </span>
                        </div>
                        <div className="card-actions justify-between items-center mt-4">
                            <span className="text-2xl font-bold">
                            ${product.price}
                            </span>
                            <button className="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 border-none">
                            View Details
                            </button>
                        </div>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            )}
            </div>
        </section>
        </div>
    );
}
