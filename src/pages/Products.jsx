import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WOW from 'wowjs';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);


  const wow = new WOW.WOW({
    live: false
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(['all', ...response.data]);
        wow.sync();
      } catch (err) {
        console.error('Failed to load categories');
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!loading) {
      wow.init();
    }
  }, [loading, selectedCategory]);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-5 bg-gray-50">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-widest mb-5 uppercase wow animate__animated animate__fadeInDown" data-wow-duration="1.2s">
          Our Products
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-light max-w-2xl text-gray-600 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
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
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-5 bg-white">
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
              {filteredProducts.map((product, index) => (
                <Link 
                  key={product.id} 
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
                      <h2 className="card-title text-base font-semibold line-clamp-2">
                        {product.title}
                      </h2>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">
                        {product.category}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="rating rating-sm">
                          <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 1} readOnly />
                          <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 2} readOnly />
                          <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 3} readOnly />
                          <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 4} readOnly />
                          <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={product.rating.rate >= 5} readOnly />
                        </div>
                        <span className="text-sm text-gray-500">({product.rating.count})</span>
                      </div>
                      <div className="card-actions justify-between items-center mt-4">
                        <span className="text-2xl font-bold">${product.price}</span>
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