import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ui/ProductCard";
import Item from "../assets/img/item.jpg";
import { Link } from "react-router-dom";

const products = [
  {
    image: Item,
    title: "Gunpowder Tea",
    description:
      "We're professional gunpowder tea suppliers in China for over 30 years, specialized in providing high quality tea with low price. We warmly welcome you to wholesale.",
  },
  {
    image: Item,
    title: "Chunmee Tea",
    description:
      "We're professional chunmee tea suppliers in China for over 30 years, specialized in providing high quality tea with low price. We warmly welcome you to wholesale.",
  },
  {
    image: Item,
    title: "Special Tea",
    description:
      "We're professional special tea suppliers in China for over 30 years, specialized in providing high quality tea with low price. We warmly welcome you to wholesale.",
  },
  {
    image: Item,
    title: "Black Tea",
    description:
      "We're professional black tea suppliers in China for over 30 years, specialized in providing high quality tea with low price. We warmly welcome you to wholesale.",
  },
];
export default function Products() {
  return (
    <>
      <PageTitle title="Products" />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/product_detail">
              <ProductCard
                key={products[0].title}
                image={products[0].image}
                title={products[0].title}
                description={products[0].description}
              />
            </Link>
            <Link to="/product_detail">
              <ProductCard
                key={products[1].title}
                image={products[1].image}
                title={products[1].title}
                description={products[1].description}
              />
            </Link>
            <Link to="/product_detail">
              <ProductCard
                key={products[2].title}
                image={products[2].image}
                title={products[2].title}
                description={products[2].description}
              />
            </Link>
            <Link to="/product_detail">
              <ProductCard
                key={products[3].title}
                image={products[3].image}
                title={products[3].title}
                description={products[3].description}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
