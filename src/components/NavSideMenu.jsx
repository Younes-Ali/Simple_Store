import { IoMenuSharp, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavSideMenu() {
    const closeDrawer = () => {
        document.getElementById('my-drawer-1').checked = false;
    };

    return (
        <div className="drawer sm:hidden w-fit z-50">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-fit">
                <label 
                    htmlFor="my-drawer-1" 
                    className="btn btn-circle bg-gray-900 hover:bg-creamy hover:text-black border-none text-white shadow-lg transition-all duration-300 hover:scale-110"
                >
                    <IoMenuSharp className="text-2xl" />
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-1"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="bg-linear-to-b font-dancing-script from-gray-900 to-gray-800 min-h-full w-64 p-6 shadow-2xl">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-white">MENU</h2>
                        <label 
                            htmlFor="my-drawer-1" 
                            className="btn btn-circle btn-ghost text-white hover:bg-red-600 hover:rotate-90 transition-all duration-300"
                        >
                            <IoClose className="text-2xl" />
                        </label>
                    </div>
                    
                    {/* Navigation Links */}
                    <ul className="menu space-y-2">
                        <li>
                            <Link 
                                to="/" 
                                onClick={closeDrawer}
                                className="text-white hover:bg-creamy hover:text-black hover:translate-x-2 rounded-lg p-3 transition-all duration-300 text-lg font-medium hover:shadow-lg"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                onClick={closeDrawer}
                                className="text-white hover:bg-creamy hover:text-black hover:translate-x-2 rounded-lg p-3 transition-all duration-300 text-lg font-medium hover:shadow-lg"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                onClick={closeDrawer}
                                className="text-white hover:bg-creamy hover:text-black hover:translate-x-2 rounded-lg p-3 transition-all duration-300 text-lg font-medium hover:shadow-lg"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/products" 
                                onClick={closeDrawer}
                                className="text-white hover:bg-creamy hover:text-black hover:translate-x-2 rounded-lg p-3 transition-all duration-300 text-lg font-medium hover:shadow-lg"
                            >
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}