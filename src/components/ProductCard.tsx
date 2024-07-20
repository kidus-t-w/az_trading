import { Link } from "react-router-dom";

const ProductCard = ({ product }:any) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg mb-4 flex">
      <img src={product.image} alt={product.name} className="w-1/4 rounded-lg" />
      <div className="ml-4">
        <h2 className="font-bold text-xl mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <Link to="/product_detail" className="text-green-500 hover:text-green-800">
        <button className="bg-blue-700 hover:bg-blue-500c text-white p-2 rounded">Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
