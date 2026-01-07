import { useEffect, useState } from "react";
import axios from "axios";
import HeroProducts from "../components/HeroProducts";
import CategoryFilter from "../components/CategoryFilter";
import ProductsGrid from "../components/ProductsGrid";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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
    if (!loading) {
      import("wowjs").then((module) => {
        const WOW = module.default || module.WOW;
        new WOW.WOW({ live: false }).init();
      });
    }
  }, [loading, selectedCategory]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <HeroProducts />
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <ProductsGrid
        products={filteredProducts}
        loading={loading}
        error={error}
      />
    </div>
  );
}