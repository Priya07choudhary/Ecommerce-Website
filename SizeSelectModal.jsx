import { useState } from "react";
import "./SizeSelectModal.css";

const SizeSelectModal = ({ product, onConfirm, onClose }) => {
  const [size, setSize] = useState(null);

  const handleConfirm = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }
    onConfirm(size);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Select Size</h3>
        <p>{product.name}</p>

        <div className="sizes">
          {["S", "M", "L", "XL"].map((s) => (
            <button
              key={s}
              className={size === s ? "active" : ""}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="modal-actions">
          <button onClick={handleConfirm}>Add to Cart</button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SizeSelectModal;
