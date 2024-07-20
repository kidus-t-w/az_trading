// src/components/ui/Card.tsx


interface CardProps {
  name: string;
  description: string;
  img: string;
  price: number;
}

const Card = ({ name, description, img, price }: CardProps) => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg h-[700px] rounded-lg rounded-tl-full rounded-tr-full grid grid-row-3 justify-between">
      <img src={img} alt={name} className="w-[300px]  object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
      <div className="px-6  pb-2 ">
        <a href="#" className="text-green-500 hover:text-green-800">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
