import ProductCard from './ProductCard'

const ProductList = ({ product }: any) => {
  return (
    <div className="flex-1">
      <ProductCard product={product} />
    </div>
  )
}

export default ProductList
