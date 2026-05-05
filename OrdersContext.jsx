import { createContext, useContext, useState } from "react";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const placeOrder = (items, total) => {
    const newOrder = {
      id: Date.now(),
      items,
      total,
      date: new Date().toLocaleDateString(),
    };

    setOrders((prev) => [...prev, newOrder]);
  };

  return (
    <OrdersContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);