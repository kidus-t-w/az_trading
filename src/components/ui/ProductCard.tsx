interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }:ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex w-full h-[260px] hover:shadow-2xl">
      <div className="w-1/2">
        <img className="h-full w-full object-cover hover:scale-110" src={image} alt={title}/>
      </div>
      <div className="w-2/3 p-8 flex flex-col justify-between">
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
