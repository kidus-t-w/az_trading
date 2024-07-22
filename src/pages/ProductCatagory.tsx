
import { useLocation } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import HotProducts from '../components/HotProducts';
import ProductList from '../components/ProductList';

type ProductType = {
  name: string;
  price: number;
  img: string;
  description: string;
}
const ProductCategory = () => {
  const location = useLocation();
  const products = location.state.product;
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row mt-28">
      <div className="w-full md:w-1/4 md:pr-4 mb-4 md:mb-0">
        <div className=" hidden md:block">
          <CategoryList />
          <HotProducts />
        </div>
      </div>
      <div className="w-full ">
        {products.map((product: ProductType, index: number) => (
          <ProductList key={index} product={product} />))}
      </div>
    </div>
  );
};

export default ProductCategory;
