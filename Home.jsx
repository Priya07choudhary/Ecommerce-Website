import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
       <img
        className="banner"
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        alt="Fashion Banner"
      />

      <h2 className="section-title">SHOP BY CATEGORY</h2>

      <div className="categories">
        <Link to="/products?category=Men">Men</Link>
        <Link to="/products?category=Women">Women</Link>
        <Link to="/products?category=Kids">Kids</Link>
        <Link to="/products?category=Accessories">Accessories</Link>
      </div>
    </div>
  );
};

export default Home;


