import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import "./Transaction.css";

const Transaction = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const { placeOrder } = useOrders();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleContinue = () => {
    placeOrder(cart, total);
    clearCart();
    navigate("/");
  };

  return (
    <div className="transaction">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Your payment was successful.</p>

      <button onClick={handleContinue}>
        Continue Shopping
      </button>
    </div>
  );
};

export default Transaction;