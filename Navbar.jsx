import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="navbar">
      {/* LEFT SECTION */}
      <div className="nav-left">
        <Link to="/" className="logo">ROZANA</Link>

        <Link to="/products?category=Women">WOMEN</Link>
        <Link to="/products?category=Men">MEN</Link>
        <Link to="/products?category=Kids">KIDS</Link>
        <Link to="/products?category=Accessories">ACCESSORIES</Link>
      </div>

      {/* SEARCH */}
      <div className="nav-search">
        <FaSearch />
        <input placeholder="Search for products, brands and more" />
      </div>

      {/* RIGHT SECTION */}
      <div className="nav-right">
        {user ? (
          <>
            {/* Profile */}
            <Link to="/profile" className="profile-link">
              <FaUser /> {user.email}
            </Link>

            {/* Orders */}
            <Link to="/orders" style={{ marginLeft: 15 }}>
              Orders
            </Link>

            {/* Logout */}
            <button onClick={logout} style={{ marginLeft: 15 }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" style={{ marginLeft: 15 }}>
              Signup
            </Link>
          </>
        )}

        {/* Wishlist */}
        <Link to="/wishlist" style={{ marginLeft: 15 }}>
          <FaHeart /> ({wishlist.length})
        </Link>

        {/* Cart */}
        <Link to="/cart" style={{ marginLeft: 15 }}>
          <FaShoppingBag /> ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;