import ProductCard from "./ProductCard";

export default function ProductsGrid({ products, loading, error }) {
    if (loading) {
        return (
        <section className="py-16 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center min-h-100">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
            </div>
        </section>
        );
    }

    if (error) {
        return (
        <section className="py-16 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
            <div className="alert alert-error">
                <span>{error}</span>
            </div>
            </div>
        </section>
        );
    }

    return (
        <section className="py-16 px-5 text-white bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
            ))}
            </div>
        </div>
        </section>
    );
}