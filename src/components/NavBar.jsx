import { Link } from "react-router-dom";

export default function NavBar() {
    const linkStyle = "text-lg font-semibold text-white hover:bg-creamy hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg hover:shadow-lg";
    return (
        <div className="hidden sm:flex gap-6 font-dancing-script">
        <Link to="/" className={linkStyle}>Home</Link>
        <Link to="/about" className={linkStyle}>About</Link>
        <Link to="/contact" className={linkStyle}>Contact</Link>
        <Link to="/products" className={linkStyle}>Products</Link>
        </div>
    );
}
