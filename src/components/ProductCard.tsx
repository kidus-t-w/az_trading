const ProductCard = ({ product }: any) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg mb-4 flex flex-col md:flex-row">
      <img
        src={product.img}
        alt={product.name}
        className="w-full md:w-1/4 rounded-lg object-cover mb-4 md:mb-0"
      />
      <div className="md:ml-4 flex flex-col justify-center">
        <div className="p-8">
          <h2 className="font-bold text-xl mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
