import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState({}); 
  // { productId: [ { user, rating, comment } ] }

  const addFeedback = (productId, feedback) => {
    setFeedbacks((prev) => ({
      ...prev,
      [productId]: prev[productId]
        ? [...prev[productId], feedback]
        : [feedback],
    }));
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);