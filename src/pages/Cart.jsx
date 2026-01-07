import { cartProducts } from '../components/store';
import { FaTimes, FaTrash } from 'react-icons/fa';

export default function Cart({ products, onClose }) {
    const removeFromCart = cartProducts((state) => state.removeFromCart);
    const updateQuantity = cartProducts((state) => state.updateQuantity);
    const clearCart = cartProducts((state) => state.clearCart);
    const getTotalPrice = cartProducts((state) => state.getTotalPrice);
    
    const totalPrice = getTotalPrice(cartProducts.getState());

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-black mx-4">
                    <h2 className="text-2xl font-bold text-black">Shopping Cart</h2>
                    <button 
                        onClick={onClose}
                        className="btn btn-ghost btn-circle"
                    >
                        <FaTimes className="text-xl text-red-700" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {products.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <p className="text-lg text-gray-500">Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {products.map((product) => (
                                <div key={product.id} className="flex gap-4 border-b pb-4 border-black">
                                    <img 
                                        src={product.image} 
                                        alt={product.title}
                                        className="w-20 h-20 object-contain"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm line-clamp-2 text-gray-600">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            ${product.price}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button 
                                                onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                                                className="btn btn-xs btn-outline bg-gray-400 text-black"
                                            >
                                                -
                                            </button> 
                                            <span className="text-sm font-semibold text-gray-600">
                                                {product.quantity}
                                            </span>
                                            <button 
                                                onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                                                className="btn btn-xs btn-outline bg-gray-400 text-black"
                                            >
                                                +
                                            </button>
                                            <button 
                                                onClick={() => removeFromCart(product.id)}
                                                className="btn btn-xs btn-error ml-auto"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {products.length > 0 && (
                    <div className="border-t p-6 space-y-4 border-black mx-4">
                        <div className="flex justify-between items-center text-xl font-bold text-black">
                            <span>Total:</span>
                            <span className='text-green-800'>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="btn btn-lg bg-gray-900 text-white hover:bg-gray-800 w-full">
                            Checkout
                        </button>
                        <button 
                            onClick={clearCart}
                            className="btn btn-outline w-full"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}