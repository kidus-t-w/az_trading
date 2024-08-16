import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <div className="relative sm:w-full sm:h-[900px] h-[500px] z-0 mt-8">
        <div className="h-[500px] sm:w-full sm:h-full bg-banner bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 h-[500px] sm:w-full sm:h-full flex flex-col gap-y-4 items-center justify-center text-center">
        <div className=" text-white py-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-6 text-center px-4 md:text-[50px] md:leading-[50px] ">
            Get A Solution <br></br> For All Types Of Services
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/about_us">
              <button className="border border-gray-300 text-white px-6 py-2 rounded-md hover:bg-gray-200 hover:text-black w-[300px] h-[50px]">
                More About Us
              </button>
            </Link>
            <Link to="/contact_us">
              <button className="bg-white text-blue-800 px-6 py-2 rounded-md hover:bg-transparent hover:border border-white hover:text-white w-[300px] h-[50px]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
