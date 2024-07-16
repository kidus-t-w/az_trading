interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }:ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex max-w-lg">
      <div className="w-1/3">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
