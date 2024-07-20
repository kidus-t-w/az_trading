// src/components/CategoryList.js
const CategoryList = () => {
  const categories = ["Beans", "Cereals", "Oil Seeds", "Spices"];

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="font-bold text-xl mb-4">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <button className="bg-blue-700 hover:bg-blue-500 text-white w-full p-2 rounded">{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
