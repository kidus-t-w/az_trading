import { House, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Banner from "../assets/img/Banner.jpg";
import { Button } from "../components/ui/button";

export default function ProductDetail() {
  return (
    <>
      <div className="bg-gray-100 py-4 border-b-2 border-green-600">
        <div className="container mx-auto px-4 flex items-center">
          <Link
            to="/"
            className="text-green-500 hover:text-green-700 flex items-center"
          >
            <House />
            Home
          </Link>
          <span className="mx-2 text-green-500">/</span>
          <span className="text-gray-700">Products</span>
        </div>
      </div>
      <h2 className="container text-2xl font-bold my-8">
        Best Quality Produce
      </h2>
      <div className="container w-full flex flex-row gap-8">
        <div className="w-2/3">
          <img src={Banner} alt="" />
          <div className="grid grid-cols-5 gap-4 my-4">
            <img src={Banner} alt="" />
            <img src={Banner} alt="" />
            <img src={Banner} alt="" />
            <img src={Banner} alt="" />
            <img src={Banner} alt="" />
          </div>
        </div>
        <div className="w-1/3 bg-gray-300 rounded-xl h-full p-4">
          <h2 className="text-2xl font-bold">Details:</h2>
          <p>Product Name: Best quality Red Kidney beans</p>
          <p>Product Type: Beans</p>
          <p>Age: 1- 2 years</p>
          <p>Processing Type: Stir-fried</p>
          <p>Look: Big leaves uniform shape less or no stems</p>
          <p>Liquid: Orange Amber</p>
          <p>
            1.Inner packet: paper box, paper bag/foil bag, plastic bag for
            25g,40g,100g,125g,150g,200g,250g,500g 2.Large packing: woven bag,
            wooden case, carton for 5kg,10kg,20kg,30kg. provide inner packet for
            large packing: ≥10kg, with 40 paper boxes/paper/foil bags;
            ≥20kg,with 40 plastic bags/paper boxes
          </p>
          <p>Taste: quite mellow, without sour or bitter</p>
          <p>Payment Term: D/P, D/A, L/C, T/T, can be further discussed</p>
          <p>Place of Origin: Zhejiang, China</p>

          <div className="grid grid-cols-2 gap-8 m-4">
            <Button className="flex gap-4">
              {" "}
              <Mail />
              <span>Send Inquery</span>{" "}
            </Button>
            <Button>Chat Now</Button>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 h-16 my-8 flex items-center">
        <h2 className="text-2xl font-bold text-white container ">
          Description
        </h2>
      </div>
      <div className="container mb-8">
        <h2 className="text-2xl font-bold">Best Quality Red Kidney Beans</h2>
        <p>
          Introduction to Our Company's Latest Gunpowder Tea Production Line and
          3505AAA Gunpowder Tea Our company is proud to introduce our latest
          gunpowder tea production line, which is now up and running. This new
          production line incorporates the latest technology and is capable of
          producing some of the highest-quality pearl tea available on the
          market today. In this article, we will discuss the features of this
          new production line and showcase our flagship product - the 3505AAA
          tea. Features of Our New Gunpowder Tea Production Line Our new
          gunpowder tea production line is a state-of-the-art facility that
          features the latest advancements in technology and production
          techniques. Here are some of the key features of this new production
          line: 1. High efficiency - The new production line is designed to be
          highly efficient, allowing us to produce large quantities of tea in a
          relatively short amount of time. This ensures that we can meet the
          growing demand for our products both domestically and internationally.
          2. Precise temperature control - The production line incorporates
          precise temperature control systems, which is essential for producing
          high-quality tea. This ensures that the tea is brewed at the optimal
          temperature, allowing us to maintain consistency in flavor and quality
          across batches. 3. Automated processes - The new production line is
          largely automated, which helps us achieve consistency in our products
          while reducing the risk of errors or defects. 4. Quality control - We
          have implemented strict quality control measures throughout the
          production process. This includes regular testing and sampling of our
          products to ensure that they meet our high standards of quality and
          purity. 3505AAA gunpowder Tea - Our Flagship Product One of the
          products that we are particularly proud of is our 3505AAA green tea.
          This tea is made using high-quality leaves from the Camellia sinensis
          plant, which is grown in the high-altitude regions of China. Here are
          some of the key features of our 3505AAA tea: 1. Rich flavor - Our
          3505AAA tea is renowned for its rich, full-bodied flavor. It has a
          unique taste that is both smooth and complex, with notes of honey and
          caramel. 2. Exquisite aroma - The tea has a delicate aroma that is
          both refreshing and soothing. It is a perfect blend of floral, herbal,
          and fruity notes. 3. Premium quality - Our 3505AAA tea is made using
          only the highest-quality tea leaves. Each tea leaf is carefully
          selected and processed to ensure that it meets our strict quality
          standards. 4. Health benefits - Pearl tea is rich in antioxidants and
          other beneficial compounds that help to support overall health and
          well-being. Regular consumption of pearl tea can help to boost
          metabolism, improve digestion, and reduce the risk of chronic
          diseases. Conclusion Our latest pearl tea production line and the
          3505AAA tea are a testament to our commitment to producing
          high-quality, premium teas that are enjoyed by tea lovers around the
          world. We are proud to offer a product that is not only delicious but
          also beneficial for our health. We invite you to try our pearl tea and
          experience the unique taste and aroma for yourself!
        </p>
      </div>
      <div className="w-full mx-auto mt-10 mb-2 p-4 bg-gray-100 shadow-lg rounded">
      <h2 className="text-2xl font-semibold mb-4 container">Send Inquiry</h2>
      <form className="container">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-mail:*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="mb-4" >
          {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Please include details like size, weight, destination port and etc., so that we can quote the best price.*
          </label> */}
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            rows={4}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Leave a message
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
