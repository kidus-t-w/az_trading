interface CardProps {
  name: string
  description: string
  img: string
  price: number
}

const Card = ({ name, description, img, price }: CardProps) => {
  return (
    <div className="max-w-sm shadow-lg h-[720px] rounded-t-full rounded-b-lg flex flex-col justify-evenly">
      {' '}
      <div>
        <img src={img} alt={name} className=" object-cover hover:scale-105" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </div>
  )
}

export default Card
