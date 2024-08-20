import { motion } from 'framer-motion'

import PageTitle from '../components/PageTitle'
import Map from '../assets/img/Map.png'
import wearHouse from '/imgs/wearHouse/wear house.png'
import wearHouse2 from '/imgs/wearHouse/wear house 2.png'
import wearHouse3 from '/imgs/wearHouse/wear house 3.png'
export default function AboutUs() {
  return (
    <>
      <PageTitle title="About Us" />
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-4">
            One of the famous and main enterprises in Ethiopia
            <br />
            who focus on the beans product import and export business.
          </h2>
          <p className="text-gray-700 mb-2">
            AZ Trading – Leading supplier of Beans & Pulses, Oil Seed, Cereal, & Spices Az Trading
            P.L.C is a leading supplier of premium quality product range of beans & Pulses, Oil
            Seed, Cereal, & Spices. The company believes in providing the most fresh, natural and
            best quality products, without any compromise to all its clients. Beans & Pulses range
            consist of quality beans with rich protein content, like Red Kidney Bean, Black Kidney
            Bean, Red Speckled Kidney Bean, Light Speckled Kidney Bean, Pinto Bean, Green Mung Beans
            & Fava /Broad Beans.
          </p>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center">Our History</h2>
      <motion.div
        className="mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 30 }
        }}
      >
        <div className="container flex flex-col md:flex-row items-center md:items-start bg-white p-4">
          <img
            src={wearHouse2}
            alt="Company"
            className="w-full md:w-[600px] h-auto rounded-2xl m-2 shadow-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0 md:w-1/2 h-[250px] flex flex-col justify-center">
            <p className="text-gray-700 mb-2 my-auto">
              Founded 15 years ago in the heart of Burau, Ethiopia, AZ Trading has grown from a
              small local enterprise into a global leader in agricultural solutions. Our journey
              began with a vision to bring innovative and sustainable practices to the agricultural
              sector, helping farmers and businesses alike to optimize their operations and achieve
              greater success. With a deep commitment to quality and customer satisfaction, we
              started by serving local clients, gradually expanding our reach across Ethiopia.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -30 }
        }}
      >
        <div className="container flex flex-col md:flex-row-reverse items-center md:items-start bg-white p-4">
          <img
            src={wearHouse}
            alt="Company"
            className="w-full md:w-[600px] h-auto rounded-2xl m-2 shadow-lg"
          />
          <div className="md:mr-8 mt-4 md:mt-0 md:w-1/2 h-[270px] flex flex-col justify-center">
            <p className="text-gray-700 mb-2 my-auto">
              Over the years, our relentless pursuit of excellence has led us to work with clients
              in multiple countries, including the USA, Central America, and Asia. These
              international partnerships have allowed us to refine our expertise and adapt our
              solutions to meet the diverse needs of agricultural businesses around the world. Our
              ability to understand and address the unique challenges faced by our clients has been
              key to our success and has earned us a reputation as a trusted partner in the
              industry.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 30 }
        }}
      >
        <div className="container flex flex-col md:flex-row items-center md:items-start bg-white p-4">
          <img
            src={wearHouse3}
            alt="Company"
            className="w-full md:w-[600px] h-auto rounded-2xl m-2 shadow-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0 md:w-1/2 h-[250px] flex flex-col justify-center">
            <p className="text-gray-700 mb-2 my-auto">
              Today, AZ Trading proudly employs over 200 dedicated professionals who are passionate
              about driving positive change in the agricultural sector. With over 30 clients served
              globally, we continue to innovate and expand our offerings, staying true to our
              founding principles while embracing new technologies and methodologies. Our history is
              one of growth, collaboration, and unwavering commitment to making a lasting impact on
              the agricultural industry.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-row-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -30 }
              }}
            >
              <h3 className="text-lg font-bold mb-2">
                Producing high-quality beans with the most advanced technology and equipment
              </h3>
              <div className="border-b-2 border-green-500 w-24 mb-4"></div>
              <p className="text-gray-700">
                At AZ Trading, we are committed to delivering the highest quality beans by
                leveraging the latest advancements in technology and equipment. Our state-of-the-art
                facilities are equipped with cutting-edge machinery that ensures precision and
                consistency in every batch we produce. By continuously investing in technological
                innovation, we are able to meet the growing demands of our clients while maintaining
                the superior quality that has become synonymous with our brand. Our dedication to
                excellence in production ensures that our beans not only meet but exceed industry
                standards.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -30 }
              }}
            >
              <h3 className="text-lg font-bold mb-2">Adopted a fully automated production line</h3>
              <div className="border-b-2 border-green-500 w-24 mb-4"></div>
              <p className="text-gray-700">
                To enhance efficiency and maintain the highest levels of quality control, AZ Trading
                has adopted a fully automated production line. This automation allows us to
                streamline our processes, minimize human error, and achieve unparalleled consistency
                in our output. By integrating advanced automation technologies, we can produce
                larger volumes of beans with precision and speed, ensuring that our clients receive
                their products on time and to the exact specifications required. This commitment to
                automation reflects our forward-thinking approach and our dedication to remaining at
                the forefront of the industry.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -30 }
              }}
            >
              <h3 className="text-lg font-bold mb-2">Takes health and safety seriously</h3>
              <div className="border-b-2 border-green-500 w-24 mb-4"></div>
              <p className="text-gray-700">
                At AZ Trading, the health and safety of our employees, clients, and consumers are
                our top priorities. We adhere to the strictest health and safety standards in all
                aspects of our operations, from production to packaging and distribution. Our
                facilities are regularly inspected and maintained to ensure a safe working
                environment, and our staff is thoroughly trained in safety protocols. We believe
                that a safe workplace is not just a regulatory requirement but a fundamental aspect
                of our company culture. By prioritizing health and safety, we protect our workforce
                and ensure the integrity and safety of our products for the end consumer.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Sales Market</h2>
          <p className="mb-12">
            AZ Trading has established a strong and diverse sales market that spans multiple
            continents, including North America, Central America, Asia, and beyond. Our commitment
            to quality and innovation has enabled us to build lasting relationships with over 30
            clients worldwide, positioning us as a trusted supplier in the global agricultural
            industry. By understanding the unique needs and preferences of each market, we tailor
            our products and services to meet the specific demands of our clients, ensuring their
            satisfaction and loyalty. Our expansive sales network continues to grow as we explore
            new opportunities and forge partnerships that drive our mission of delivering
            high-quality agricultural solutions to customers across the globe.
          </p>
          <div className="">
            <img src={Map} alt="Sales Market Map" className="rounded-2xl m-2 shadow-lg" />
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Professional Team</h2>
          <p className="text-gray-700 mb-2">
            At AZ Trading, our success is driven by the dedication and expertise of our professional
            team. With over 200 skilled employees, each member of our team brings a wealth of
            knowledge and experience to the table, contributing to our reputation as a leader in the
            agricultural industry. Our team is composed of professionals from diverse backgrounds,
            including agronomists, engineers, quality control experts, and business specialists, all
            working together to achieve a common goal: delivering exceptional products and services
            to our clients. Their commitment to continuous learning and improvement ensures that we
            stay ahead of industry trends and maintain our competitive edge.
          </p>
          <p className="text-gray-700 mb-2">
            Our team’s collaborative spirit and shared passion for excellence are at the core of
            everything we do. Whether it’s developing innovative solutions, optimizing production
            processes, or providing top-notch customer service, our professionals are dedicated to
            meeting and exceeding the expectations of our clients. We foster a supportive and
            inclusive work environment where each team member is empowered to contribute their best
            ideas and efforts. This collective expertise and commitment to quality have been
            instrumental in shaping AZ Trading into the trusted global partner it is today.
          </p>
        </div>
      </div>
    </>
  )
}
