// src/components/HotProducts.js
const hotProducts = [
  "Black Kidney Beans",
  "Cream Beans",
  "Green Mung Beans",
  "Red Kidney Beans",
  "Fave Beans",
  // add more products here...
];

const HotProducts = () => {
  return (
    <div className="bg-white shadow p-4 rounded-lg mt-4">
      <h2 className="font-bold text-xl mb-4">Hot products</h2>
      <ul>
        {hotProducts.map((product, index) => (
          <li key={index} className="mb-2">
            <button className="text-left w-full">{product}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotProducts;
