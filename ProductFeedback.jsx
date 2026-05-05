import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useFeedback } from "../context/FeedbackContext";
import "./ProductFeedback.css";

const ProductFeedback = ({ productId }) => {
  const { user } = useAuth();
  const { feedbacks, addFeedback } = useFeedback();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitFeedback = () => {
    if (!user) return alert("Please login to give feedback");

    addFeedback(productId, {
      user: user.email,
      rating,
      comment,
    });

    setComment("");
    setRating(5);
  };

  return (
    <div className="feedback">
      <h3>Ratings & Reviews</h3>

      {/* Existing reviews */}
      {feedbacks[productId]?.map((f, index) => (
        <div key={index} className="review">
          <strong>{f.user}</strong>
          <p>{"⭐".repeat(f.rating)}</p>
          <p>{f.comment}</p>
        </div>
      ))}

      {/* Add review */}
      <div className="review-form">
        <select value={rating} onChange={(e) => setRating(+e.target.value)}>
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              {r} Stars
            </option>
          ))}
        </select>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={submitFeedback}>Submit Review</button>
      </div>
    </div>
  );
};

export default ProductFeedback;
