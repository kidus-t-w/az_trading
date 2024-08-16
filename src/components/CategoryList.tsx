import beans from '../data/beans.json'
import oilSeeds from '../data/oilSeeds.json'
import cereal from '../data/cereal.json'
import spice from '../data/spice.json'
import { useNavigate } from 'react-router-dom'

const CategoryList = () => {
  const navigate = useNavigate()
  const handleClick = (product: any) => {
    navigate('/product_catagory', { state: { product } })
  }
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="font-bold text-xl mb-4">Categories</h2>

      <button
        onClick={() => handleClick(beans)}
        className="mb-2 bg-blue-700 hover:bg-blue-500 text-white w-full p-2 rounded"
      >
        Beans
      </button>

      <button
        onClick={() => handleClick(cereal)}
        className="mb-2 bg-blue-700 hover:bg-blue-500 text-white w-full p-2 rounded"
      >
        Cereals
      </button>

      <button
        onClick={() => handleClick(oilSeeds)}
        className="mb-2 bg-blue-700 hover:bg-blue-500 text-white w-full p-2 rounded"
      >
        Oil Seeds
      </button>

      <button
        onClick={() => handleClick(spice)}
        className="mb-2 bg-blue-700 hover:bg-blue-500 text-white w-full p-2 rounded"
      >
        Spices
      </button>
    </div>
  )
}

export default CategoryList
