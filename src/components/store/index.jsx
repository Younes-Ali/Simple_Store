import { create } from "zustand";

export const cartProducts = create((set, get) => ({
    cartProducts: [],
    
    addToCart: (product) => set((state) => {
        // Check if product already exists in cart
        const existingProduct = state.cartProducts.find(p => p.id === product.id);
        
        if (existingProduct) {
            // Update quantity if product exists
            return {
                cartProducts: state.cartProducts.map(p => 
                    p.id === product.id 
                        ? { ...p, quantity: p.quantity + product.quantity }
                        : p
                )
            };
        } else {
            // Add new product with quantity
            return {
                cartProducts: [...state.cartProducts, product]
            };
        }
    }),
    
    removeFromCart: (productId) => set((state) => ({
        cartProducts: state.cartProducts.filter(p => p.id !== productId)
    })),
    
    updateQuantity: (productId, quantity) => set((state) => ({
        cartProducts: state.cartProducts.map(p =>
            p.id === productId ? { ...p, quantity } : p
        )
    })),
    
    clearCart: () => set({ cartProducts: [] }),
    
    getTotalPrice: () => {
        const state = get();
        return state.cartProducts.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    },
    
    getTotalItems: () => {
        const state = get();
        return state.cartProducts.reduce((total, product) => {
            return total + product.quantity;
        }, 0);
    }
}));