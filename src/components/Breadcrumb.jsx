import { Link } from "react-router-dom";

export default function Breadcrumb({ title }) {
    return (
        <div className="bg-gray-50 py-4 px-5">
            <div className="max-w-7xl mx-auto">
            <div className="text-sm breadcrumbs">
                <ul>
                <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
                <li><Link to="/products" className="hover:text-gray-600">Products</Link></li>
                <li className="font-semibold">{title}</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
