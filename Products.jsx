import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../data/products.json";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import SizeSelectModal from "../components/SizeSelectModal";
import { useCart } from "../context/CartContext";

import "./Products.css";

const Products = () => {
  const { addToCart } = useCart();
  const [params] = useSearchParams();

  // URL category
  const categoryFromUrl = params.get("category");

  // filter states
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([]);

  // cart modal state
  const [selectedProduct, setSelectedProduct] = useState(null);

  // read category from URL
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // filter logic
  const filteredProducts = products.filter((p) => {
    return (
      p.category === selectedCategory &&
      (selectedSubCategories.length === 0 ||
        selectedSubCategories.includes(p.subCategory)) &&
      (!priceRange.length ||
        (p.price >= priceRange[0] && p.price <= priceRange[1]))
    );
  });

  // when user clicks "Add to Cart" on card
  const handleAddToCartClick = (product) => {
    setSelectedProduct(product); // open size modal
  };

  // when size is confirmed
  const handleConfirmSize = (size) => {
    addToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      size
    });

    setSelectedProduct(null); // close modal
  };

  return (
    <>
      <div className="products-layout">
        {/* Sidebar */}
        <FilterSidebar
          selectedCategory={selectedCategory}
          selectedSubCategories={selectedSubCategories}
          setSelectedSubCategories={setSelectedSubCategories}
          setPriceRange={setPriceRange}
        />

        {/* Product grid */}
        <div className="products">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCartClick}
            />
          ))}
        </div>
      </div>

      {/* Size selection modal */}
      {selectedProduct && (
        <SizeSelectModal
          product={selectedProduct}
          onConfirm={handleConfirmSize}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Products;