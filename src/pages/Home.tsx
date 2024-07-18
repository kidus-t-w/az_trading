import HeroSection from "../components/HeroSection";
import Banner from "../assets/img/Banner.jpg";
import { Button } from "../components/ui/button";
import Card from "../components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <HeroSection />
      <main className="bg-white">
        <section className="bg-gray-900 text-white p-8 space-y-8">
          <h2 className="text-4xl font-bold text-center my-16">
            We Offer Multi-Scenario Solutions
          </h2>
          <div className="flex flex-col lg:flex-row justify-evenly items-center space-y-8 lg:space-y-0">
            <img className="rounded-xl w-full lg:w-[800px]" src={Banner} alt="Banner" />
            <div className="w-full lg:w-[600px] space-y-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque rem incidunt id doloribus. Sapiente quas optio ut
                quae minus, earum dolorem numquam maiores sunt, quos eaque,
                impedit quia vel? Quam?
              </p>
              <Button className="bg-red-600">Learn More</Button>
            </div>
          </div>
        </section>
        <section className="my-4">
          <h2 className="text-center text-4xl font-bold my-16">
            Product Recommended
          </h2>
          <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container">
            {value.map((_, index) => (
              <Link key={index} to="/product_detail" className="text-black">
                <Card />
              </Link>
            ))}
          </div>
        </section>
        <section className="flex flex-col lg:flex-row w-full mt-16">
          <div className="w-full lg:w-1/2 bg-red-300 flex items-center justify-center">
            <img className="w-full" src={Banner} alt="Banner" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-evenly items-center bg-black text-white p-8">
            <div className="w-full lg:w-[700px] space-y-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque rem incidunt id doloribus. Sapiente quas optio ut
                quae minus, earum dolorem numquam maiores sunt, quos eaque,
                impedit quia vel? Quam?
              </p>
              <Button className="bg-white text-black hover:bg-red-500 hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <div className="bg-blue-800 text-white py-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 text-center px-4">
            Get A Solution For All Types Of Interior Services
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="border border-gray-300 text-white px-6 py-2 rounded-md hover:bg-gray-200 hover:text-black">
              More About Us
            </button>
            <button className="bg-white text-blue-800 px-6 py-2 rounded-md hover:bg-blue-800 hover:border border-white hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
