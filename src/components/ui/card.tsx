// src/components/ui/Card.tsx

import { Link } from "react-router-dom";

interface CardProps {
  name: string;
  description: string;
  img: string;
  price: number;
}

const Card = ({ name, description, img, price }: CardProps) => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg h-[720px] rounded-lg rounded-tl-full rounded-tr-full flex flex-col  justify-evenly">
      <div>
        <img src={img} alt={name} className=" object-cover hover:scale-105" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
      <div className="px-6  pb-2 ">
        <Link
          to="/products"
          className="text-blue-500 hover:text-blue-800 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
