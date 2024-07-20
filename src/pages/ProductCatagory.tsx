
import CategoryList from '../components/CategoryList';
import HotProducts from '../components/HotProducts';
import ProductList from '../components/ProductList';

const ProductCategory = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row mt-28">
      <div className="w-full md:w-1/4 md:pr-4 mb-4 md:mb-0">
        <div className=" hidden md:block">
          <CategoryList />
          <HotProducts />
        </div>
      </div>
      <div className="w-full">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductCategory;
