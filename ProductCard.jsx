import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();

  return (
    <div className="product-card">
      {/* Product Image – click navigates to details */}
      <img
        src={`/${product.image}`}
        alt={product.name}
        className="product-image"
        onClick={() => navigate(`/product/${product.id}`)}
      />

      {/* Wishlist Icon */}
      <FaHeart
        className="wishlist-icon"
        onClick={() => addToWishlist(product)}
      />

      {/* Product Name – click navigates */}
      <h4 onClick={() => navigate(`/product/${product.id}`)}>
        {product.name}
      </h4>

      {/* Price */}
      <p>₹{product.price}</p>

      {/* Add to Cart → opens size modal */}
      
<button
  className="add-to-cart-btn"
  onClick={() => onAddToCart(product)}
>
  Add to Cart
</button>

    </div>
  );
};

export default ProductCard;