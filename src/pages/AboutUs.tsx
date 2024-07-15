import PageTitle from "../components/PageTitle";
import ArticleSection from "../components/ArticleSection";
import ArticleSectionLeft from "../components/ArticleSectionLeft";
import Banner from "../assets/img/Banner.jpg";
import Map from "../assets/img/Map.png";

export default function AboutUs() {
  return (
    <>
      <PageTitle title="About Us" />
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-4">
            One of the famous and main enterprises in Zhejiang province,
            <br />
            who focus on the tea product import and export business.
          </h2>
          <p className="text-gray-700 mb-2">
            The business aim of the Chunli is to supply the high-quality tea
            product with reasonable price to our customer.
            <br />
            To achieve this business aim, we have our own tea processing factory
            and stable supply chain.
            <br />
            The exporting quantity of our product reaches 35,000 tons per year.
            As well, it is rising steadily.
          </p>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center">Our History</h2>
      <ArticleSection />
      <ArticleSectionLeft />
      <ArticleSection />
      <ArticleSectionLeft />
      <ArticleSection />
      <ArticleSectionLeft />

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-row-3 md:grid-row-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">
                Producing high-quality tea with the most advanced technology and
                equipment
              </h3>
              <div className="border-b-2 border-green-500 w-24 mb-4"></div>
              <p className="text-gray-700">
                The tea production workshop is an important part of the
                company's production process, and is responsible for the
                production of quality tea under strict supervision and control.
                The tea production workshop is equipped with a state-of-the-art
                production line that includes several advanced tea manufacturing
                machines. The first step in the tea production process is the
                withering of the fresh tea leaves. The fresh tea leaves are
                placed on the withering machine to reduce their moisture
                content, which makes them pliable enough for further processing.
                The withered leaves are then transferred to the rolling machine,
                where they are rolled and twisted to break down the cell wall
                and release the essential oils and flavors. After rolling, the
                tea is then placed in a curing room to dry.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Adopted a fully automated production line
              </h3>
              <div className="border-b-2 border-green-500 w-24 mb-4"></div>
              <p className="text-gray-700">
                Ensuring the production process is safe, efficient, and
                hygienic. The use of automated machines reduces labor costs and
                eliminates human errors, thus improving overall efficiency. The
                company has also installed advanced temperature and humidity
                control systems, which allows for the adjustment of the
                production environment to ensure the highest quality tea is
                produced.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Takes health and safety seriously
              </h3>
              <div className="border-b-2 border-green-500 w-24 mb-4"></div>
              <p className="text-gray-700">
                The tea production workshop of Zhejiang Chunli Tea Industry Co.,
                Ltd. is well-lit, clean, and hygienic. All production equipment
                is maintained on a regular basis to ensure proper functionality
                and cleanliness. The production floor is cleaned and disinfected
                several times a day to maintain a hygiene and sanitary
                environment. This ensures that the tea produced is safe for
                human consumption. The company has implemented strict safety
                measures in the production workshop. All employees are required
                to wear protective clothing, including gloves, masks, and
                hairnets. The company also provides training for all employees
                on proper handling and use of production equipment to minimize
                the risk of accidents.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Certificate</h2>
        <p className="mb-12">As a testament to our commitment, we have received numerous certifications such as ISO 22000 and FDA, ensuring that our tea meets international food safety standards.</p>
        
        <div className="grid grid-cols-4 gap-x-8">
          <img src={Banner} alt="Certificate 1" className="rounded-2xl m-2 shadow-lg" />
          <img src={Banner} alt="Certificate 2" className="rounded-2xl m-2 shadow-lg" />
          <img src={Banner} alt="Certificate 3" className="rounded-2xl m-2 shadow-lg" />
          <img src={Banner} alt="Certificate 4" className="rounded-2xl m-2 shadow-lg" />
        </div>
        
      </div>
    </div>

    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Sales Market</h2>
        <p className="mb-12">As a testament to our commitment, we have received numerous certifications such as ISO 22000 and FDA, ensuring that our tea meets international food safety standards.</p>
        
        <div className="">
          <img src={Map} alt="Certificate 1" className="rounded-2xl m-2 shadow-lg" />
        </div>
        
      </div>
    </div>

    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Professional Team</h2>
        <p className="text-gray-700 mb-2">
          A team of exceptional and professional individuals is an important component of a successful business. When it comes to providing the best services to our clients, we believe that we have assembled a team that is second to none.
          Our team is made up of individuals who are passionate about their profession, and who are committed to delivering excellence in every task they undertake. Each team member is carefully selected based on their skills, experience and dedication to excellence. We invest in continuous learning and development programmes to ensure that our team is up-to-date with the latest trends, techniques and best practices in their respective fields.
        </p>
        <p className="text-gray-700 mb-2">
          Our team is dedicated to providing exceptional customer service to our clients. We strive to always exceed their expectations and go above and beyond to ensure their satisfaction. As a result, we have built long-term relationships with our clients over the years, and we are their trusted partner when it comes to meeting their needs and achieving their goals.
        </p>
        <p className="text-gray-700 mb-2">
          We are proud of the diversity of our team, which brings a variety of perspectives, cultures, experiences and skills to the table. This diversity helps us to better understand our clients' needs and provide tailored solutions that meet their unique requirements. Our team members have different backgrounds, but all share the same passion for excellence and delivering value to our clients.
        </p>
        <p className="text-gray-700 mb-2">
          At the heart of our team is a strong sense of collaboration, trust and respect. Each team member plays an important role, and we work together to achieve our objectives. We encourage open communication, constructive feedback and creativity, which enables us to continuously improve our services and processes. Our team is also committed to maintaining a positive work culture that fosters a supportive and enjoyable workplace.
        </p>
        <p className="text-gray-700">
          We believe that our team is the best in the business when it comes to providing exceptional services to our clients. We are passionate, skilled, and dedicated to delivering excellence in everything we do. Our team is a reflection of our commitment to achieving our clients' goals and building long-term relationships that are built on trust, respect and collaboration.
        </p>
      </div>
    </div>
    </>
  );
}
