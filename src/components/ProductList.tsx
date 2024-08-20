import { motion } from 'framer-motion'

import ProductCard from './ProductCard'

const ProductList = ({ product }: any) => {
  return (
    <motion.div
      className="flex-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 3 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -30 }
      }}
    >
      <ProductCard product={product} />
    </motion.div>
  )
}

export default ProductList
