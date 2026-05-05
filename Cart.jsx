import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const handleProceedToBuy = () => {
    if (user) {
      navigate("/transaction");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="cart-page">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
  src={`/${item.image}`}
  alt={item.name}
  className="cart-item-image"
/>


              <div className="item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
               
               
<p className="cart-size">
    Size: <strong>{item.size}</strong>
  </p>

                <button
                  className="remove-btn"
                  onClick={() =>removeFromCart(item.id, item.size)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="cart-summary">
            <h3>Total: ₹{totalAmount}</h3>

            <button className="buy-btn" onClick={handleProceedToBuy}>
              Proceed to Buy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;