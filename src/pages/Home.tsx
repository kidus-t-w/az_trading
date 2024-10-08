import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import Banner from '../assets/img/Banner.jpg'
import { Button } from '../components/ui/button'
import Card from '../components/ui/card'
import { Link } from 'react-router-dom'
import productsData from '../data/beans.json'
import wearHouse from '/imgs/wearHouse/wear house 3.png'

type ProductType = {
  name: string
  price: number
  img: string
  description: string
}

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <main className="bg-white">
        <section className="bg-gray-900 text-white p-8 space-y-8">
          <h2 className="text-4xl font-bold text-center my-16">
            We Offer Multi-Scenario Solutions
          </h2>
          <div
            className="flex flex-col lg:flex-row justify-evenly items-center space-y-8 lg:space-y-0
          "
          >
            <motion.img
              className="rounded-xl w-full lg:w-[800px]"
              src={Banner}
              alt="Banner"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -30 }
              }}
            />
            <motion.div
              className="w-full lg:w-[600px] space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 3}}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 }
              }}
            >
              <p>
                AZ Trading – Leading supplier of Beans & Pulses, Oil Seed, Cereal, & Spices Az
                Trading P.L.C is a leading supplier of premium quality product range of beans &
                Pulses, Oil Seed, Cereal, & Spices. The company believes in providing the most
                fresh, natural and best quality products, without any compromise to all its clients.
                Beans & Pulses range consist of quality beans with rich protein content, like Red
                Kidney Bean, Black Kidney Bean, Red Speckled Kidney Bean, Light Speckled Kidney
                Bean, Pinto Bean, Green Mung Beans & Fava /Broad Beans.
              </p>
              <Link to="about_us">
                <Button className="bg-blue-700 hover:bg-blue:500 hover:text-black mt-4">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        <section className="my-4">
          <h2 className="text-center text-4xl font-bold my-16">Popular Products</h2>
          <motion.div
            className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 }
            }}
          >
            {productsData.map((product: ProductType) => (
              <Card key={product.name} {...product} />
            ))}
          </motion.div>
        </section>
        <section className="flex flex-col lg:flex-row w-full mt-16">
          <div className="w-full lg:w-1/2 bg-red-300 flex items-center justify-center">
            <img className="w-full " src={wearHouse} alt="Banner" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-evenly items-center bg-black text-white p-8">
            <div className="w-full lg:w-[700px] space-y-8">
              <p>
                At AZ Trading, our vision is to be the leading provider of innovative and
                sustainable agricultural solutions, empowering businesses to achieve greater
                productivity and success. We strive to create a future where every agricultural
                enterprise, regardless of size, has access to the tools and technologies necessary
                to thrive in an ever-changing global market. Our commitment to quality, integrity,
                and customer satisfaction drives us to continuously innovate and deliver solutions
                that make a lasting impact on the industry and the communities we serve.
              </p>
              <Link to="/about_us">
                <Button className="bg-blue-700  hover:bg-blue-500 text-white mt-10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <div className="bg-blue-800 text-white py-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 text-center px-4">
            Get A Solution For All Types Of Interior Services
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/about_us">
              <button className="border border-gray-300 text-white px-6 py-2 rounded-md hover:bg-gray-200 hover:text-black w-[200px]">
                More About Us
              </button>
            </Link>
            <Link to="/contact_us">
              <button className="bg-white text-blue-800 px-6 py-2 rounded-md hover:bg-blue-800 hover:border border-white hover:text-white w-[200px]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
