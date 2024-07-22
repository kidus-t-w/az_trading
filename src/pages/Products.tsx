import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ui/ProductCard";
import { useNavigate } from "react-router-dom";
import Cereals from "../assets/img/products/Cereals.png";
import Beans from "../assets/img/products/Beans & Pulses.png";
import Oil from "../assets/img/products/Oil Seeds.png";
import Spices from "../assets/img/products/Spices.png";
import beans from "../data/beans.json";
import oilSeeds from "../data/oilSeeds.json";
import cereal from "../data/cereal.json";
import spice from "../data/spice.json";


const products = [
  {
    image: Beans,
    title: "Beans & Pulses",
    description:
      "High-quality beans and pulses, rich in protein and nutrients, perfect for soups, salads, and stews.",
  },
  {
    image: Cereals,
    title: "Cereals",
    description:
      "Premium cereals packed with essential nutrients, perfect for a healthy breakfast or versatile cooking.",
  },
  {
    image: Oil,
    title: "Oil Seeds",
    description:
      "Nutrient-rich oil seeds, ideal for cooking and health benefits. High-quality, fresh selection for all your needs.",
  },
  {
    image: Spices,
    title: "Spices",
    description:
      "Authentic, aromatic spices to elevate your culinary creations. Fresh, high-quality spices for every dish.",
  },
];
export default function Products() {
  const navigate = useNavigate();
  const handleClick = (product: any) => {
    navigate("/product_catagory", { state: { product } });
  };

  return (
    <>
      <PageTitle title="Products" />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <button onClick={() => handleClick(beans)}>
              <ProductCard
                key={products[0].title}
                image={products[0].image}
                title={products[0].title}
                description={products[0].description}
              />
            </button>
            <button onClick={() => handleClick(cereal)}>
              <ProductCard
                key={products[1].title}
                image={products[1].image}
                title={products[1].title}
                description={products[1].description}
              />
            </button>
            <button onClick={() => handleClick(oilSeeds)}>
              <ProductCard
                key={products[2].title}
                image={products[2].image}
                title={products[2].title}
                description={products[2].description}
              />
            </button>
            <button onClick={() => handleClick(spice)}>
              <ProductCard
                key={products[3].title}
                image={products[3].image}
                title={products[3].title}
                description={products[3].description}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
