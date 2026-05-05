/*import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="container" style={{ padding: 40 }}>
      <h2>Wishlist</h2>

      {wishlist.length === 0 && <p>Your wishlist is empty</p>}

      {wishlist.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Wishlist;

*/

import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="products">
      {wishlist.length === 0 && <h3>Your wishlist is empty</h3>}
      {wishlist.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Wishlist;
