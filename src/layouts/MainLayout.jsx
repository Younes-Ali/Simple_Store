import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavSideMenu from "../components/NavSideMenu";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../pages/Cart";
import { useState } from "react";
import { cartProducts } from "../components/store";

export default function MainLayout() {
    const location = useLocation();
    const showIcon =
        location.pathname === '/products' ||
        location.pathname.startsWith('/products/');
    
    const [cartState, setCartState] = useState(false);
    
    // استخدام Zustand بشكل صحيح - هيتحدث تلقائياً
    const products = cartProducts((state) => state.cartProducts);
    const getTotalItems = cartProducts((state) => state.getTotalItems);
    
    const totalItems = getTotalItems(cartProducts.getState());
    
    return(
        <div className="w-full flex flex-col">
            <header className="w-full flex justify-around bg-gray-900 items-center p-5">
                <h1 className="text-4xl font-bold font-dancing-script">Shoppy</h1>
                <NavBar />
                {showIcon && (
                    <div className="relative cursor-pointer" onClick={() => setCartState(!cartState)}>
                        <FaShoppingCart className="text-white text-3xl" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </div>
                )}
                <NavSideMenu />
            </header>
            <main className="w-full h-dvh overflow-auto">
                {cartState && (
                    <Cart 
                        products={products}
                        onClose={() => setCartState(false)}
                    />
                )}
                <Outlet />
            </main>
        </div>
    );
}