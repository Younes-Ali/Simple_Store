import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb';
import { cartProducts } from '../components/store';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = cartProducts((state) => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      import("wowjs").then((module) => {
        const WOW = module.default || module.WOW;
        new WOW.WOW({ live: false }).init();
      });
    }
  }, [product]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert(`Added ${quantity} ${product.title} to cart!`);
    setQuantity(1); // Reset quantity after adding
  };

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <div className="alert alert-error max-w-md">
          <span>{error || 'Product not found'}</span>
        </div>
        <button onClick={() => navigate('/products')} className="btn bg-gray-900 text-white">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Breadcrumb title={product.title} />
      
      <section className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-125 object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="wow animate__animated animate__fadeInRight" data-wow-delay="0.2s" data-wow-duration="1s">
              <div className="badge badge-outline uppercase text-xs mb-4">
                {product.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="rating rating-sm">
                  <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 1} readOnly />
                  <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 2} readOnly />
                  <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 3} readOnly />
                  <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 4} readOnly />
                  <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 5} readOnly />
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-5xl font-bold mb-8">
                ${product.price}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 uppercase tracking-wider">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="text-sm font-semibold mb-2 block uppercase tracking-wider">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={decreaseQty}
                    className="btn btn-circle btn-outline"
                  >
                    -
                  </button>
                  <span className="text-2xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={increaseQty}
                    className="btn btn-circle btn-outline"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-lg bg-gray-900 text-white hover:bg-gray-800 border-none flex-1"
                >
                  Add to Cart
                </button>
                <button className="btn btn-lg btn-outline flex-1">
                  Add to Wishlist
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">SKU:</span>
                    <span className="text-gray-600">#{product.id.toString().padStart(6, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Category:</span>
                    <span className="text-gray-600 capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Availability:</span>
                    <span className="text-green-600 font-semibold">In Stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}