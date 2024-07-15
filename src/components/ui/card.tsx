import { Button } from "./button";
import Item from '../../assets/img/item.jpg'

export default function card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={Item} alt="Tea Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Chunmee 41022 4A Export Tea</div>
        <p className="text-gray-700 text-base">
          Product name: Chunmee 41022 Export Tea Product...
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href="#" className="text-green-500 hover:text-green-800">Read More </a>
      </div>
    </div>
  )
}