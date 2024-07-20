
import CategoryList from '../components/CategoryList';
import HotProducts from '../components/HotProducts';
import ProductList from '../components/ProductList';

const ProductCatagory = () => {
  return (
    <div className="container mx-auto p-4 flex mt-28">
      <div className="w-1/4 pr-4">
        <CategoryList />
        <HotProducts />
      </div>
      <ProductList />
    </div>
  );
}

export default ProductCatagory;
