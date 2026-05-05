/*import "./FilterSidebar.css";

const FilterSidebar = ({ setCategory }) => {
  return (
    <div className="filters">
      <h3>FILTERS</h3>

      <h4>Category</h4>
      <ul>
        <li onClick={() => setCategory("Men")}>Men</li>
        <li onClick={() => setCategory("Women")}>Women</li>
        <li onClick={() => setCategory("Kids")}>Kids</li>
      </ul>
    </div>
  );
};

export default FilterSidebar;
*/

// import "./FilterSidebar.css";

// const categories = {
//   Women: ["Saree", "Jeans", "Top"],
//   Men: ["Shirt", "Jeans", "T-Shirt"],
//   Kids: ["Dress", "Tops"]
// };

// const FilterSidebar = ({
//   setCategory,
//   setSubCategory,
//   setPriceRange,
//   selectedCategory
// }) => {
//   return (
//     <div className="filters">
//       <h3>FILTERS</h3>

//       {/* CATEGORY */}
//       <h4>Category</h4>
//       <ul>
//         {Object.keys(categories).map(cat => (
//           <li
//             key={cat}
//             className={selectedCategory === cat ? "active" : ""}
//             onClick={() => {
//               setCategory(cat);
//               setSubCategory("");
//             }}
//           >
//             {cat}
//           </li>
//         ))}
//       </ul>

//       {/* SUB CATEGORY */}
//       {selectedCategory && (
//         <>
//           <h4>Sub Category</h4>
//           <ul>
//             {categories[selectedCategory].map(sub => (
//               <li key={sub} onClick={() => setSubCategory(sub)}>
//                 {sub}
//               </li>
//             ))}
//           </ul>
//         </>
//       )}

//       {/* PRICE */}
//       <h4>Price</h4>
//       <ul>
//         <li onClick={() => setPriceRange([0, 999])}>Under ₹1000</li>
//         <li onClick={() => setPriceRange([1000, 1999])}>₹1000 – ₹1999</li>
//         <li onClick={() => setPriceRange([2000, 5000])}>Above ₹2000</li>
//       </ul>
//     </div>
//   );
// };

// export default FilterSidebar;


import "./FilterSidebar.css";

const subCategoryMap = {
  Women: ["Sarees", "Jeans", "Tops", "Kurtas"],
  Men: ["T-Shirts", "Shirts", "Jeans"],
  Kids: ["Dresses", "Tops", "Clothing Sets"],
  Accessories:["Laptop","Charger","Mobile"]
};

const priceRanges = [
  { label: "Under ₹1000", value: [0, 999] },
  { label: "₹1000 - ₹1999", value: [1000, 1999] },
  { label: "₹2000 - ₹3999", value: [2000, 3999] }
];

const FilterSidebar = ({
  selectedCategory,
  selectedSubCategories,
  setSelectedSubCategories,
  setPriceRange
}) => {
  const toggleSubCategory = (sub) => {
    setSelectedSubCategories((prev) =>
      prev.includes(sub)
        ? prev.filter((s) => s !== sub)
        : [...prev, sub]
    );
  };

  return (
    <div className="filters">
      <div className="filter-section">
        <h4>CATEGORIES</h4>

        {subCategoryMap[selectedCategory]?.map((sub) => (
          <label key={sub} className="filter-option">
            <input
              type="checkbox"
              checked={selectedSubCategories.includes(sub)}
              onChange={() => toggleSubCategory(sub)}
            />
            {sub}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>PRICE</h4>

        {priceRanges.map((range) => (
          <label key={range.label} className="filter-option">
            <input
              type="radio"
              name="price"
              onChange={() => setPriceRange(range.value)}
            />
            {range.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;