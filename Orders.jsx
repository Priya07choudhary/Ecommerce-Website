import { useOrders } from "../context/OrdersContext";
import "./Orders.css";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div className="orders-page">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>You have not placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <span>Order ID: {order.id}</span>
              <span>Date: {order.date}</span>
              <strong>Total: ₹{order.total}</strong>
            </div>

            {order.items.map((item) => (
              <div className="order-item" key={item.id}>
                {item.image}
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;