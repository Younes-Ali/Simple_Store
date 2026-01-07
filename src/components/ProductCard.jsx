import { Link } from "react-router-dom";

export default function ProductCard({ product, index }) {
    return (
        <Link
        to={`/products/${product.id}`}
        className="wow animate__animated animate__fadeInUp"
        data-wow-delay={`${index * 0.1}s`}
        data-wow-duration="0.8s"
        >
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
            <figure className="px-6 pt-6 h-64 bg-white">
            <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
            />
            </figure>
            <div className="card-body">
            <h2 className="card-title text-white text-base font-semibold line-clamp-2">
                {product.title}
            </h2>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
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
                <span className="text-2xl text-white font-bold">
                ${product.price}
                </span>
                <button className="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 border-none">
                View Details
                </button>
            </div>
            </div>
        </div>
        </Link>
    );
}