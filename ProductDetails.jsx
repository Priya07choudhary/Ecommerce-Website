import { useParams } from "react-router-dom";
import { useState } from "react";
import { getProductById } from "../services/productService";
import "./ProductDetails.css";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductFeedback from "../components/ProductFeedback";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  // ✅ size state MUST be here
  const [selectedSize, setSelectedSize] = useState("M");

  if (!product) {
    return <h2>Product not found</h2>;
  }

 const handleAddToCart = () => {
  if (!selectedSize) {
    alert("Please select a size");
    return;
  }

  addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    size: selectedSize
  });
};


  return (
    <div className="product-details">
      {/* Image section */}
      <div className="pd-image">
        <img
          src={`/${product.image}`}
          alt={product.name}
          className="main-image"
        />
      </div>

      {/* Product info */}
      <div className="pd-info">
        <h1 className="pd-title">{product.name}</h1>
        <h2 className="pd-price">₹{product.price}</h2>

        {/* Size selection */}
        <div className="pd-sizes">
          <h4>Select Size</h4>
          <div className="sizes">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "active-size" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pd-actions">
          <button className="add-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>

          <button
            className="add-wishlist"
            onClick={() => addToWishlist(product)}
          >
            WISHLIST
          </button>
        </div>
      </div>

      {/* Ratings & Reviews */}
      <ProductFeedback productId={product.id} />
    </div>
  );
};

export default ProductDetails;