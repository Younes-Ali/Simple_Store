export default function CategoryFilter({
    categories,
    selectedCategory,
    onCategoryChange,
    }) {
    return (
        <section className="py-8 px-5 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
                >
                {category}
                </button>
            ))}
            </div>
        </div>
        </section>
    );
}
