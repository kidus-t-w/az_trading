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
          AZ Trading – Leading supplier of Beans & Pulses, Oil Seed, Cereal, &
          Spices Az Trading P.L.C is a leading supplier of premium quality
          product range of beans & Pulses, Oil Seed, Cereal, & Spices. The
          company believes in providing the most fresh, natural and best quality
          products, without any compromise to all its clients. Beans & Pulses
          range consist of quality beans with rich protein content, like Red
          Kidney Bean, Black Kidney Bean, Red Speckled Kidney Bean, Light
          Speckled Kidney Bean, Pinto Bean, Green Mung Beans & Fava /Broad
          Beans.
        </p>
      </div>
      <div className="w-full mx-auto mt-10 mb-2 p-4 bg-gray-100 shadow-lg rounded">
        <h2 className="text-2xl font-semibold mb-4 container">Send Inquiry</h2>
        <form className="container">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
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
          <div className="mb-4">
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
