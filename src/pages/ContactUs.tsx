import { Facebook, Linkedin, Mail, MapPin, Phone, Printer, Twitter } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">We'd Love To Help You</h2>
        <p className="mb-12">Please feel free to get in touch using the form below. We'd love to hear your thoughts & answer any questions you may have!</p>
        
        <div className="flex flex-col md:flex-row justify-center mb-12">
          <div className="bg-white p-4 rounded shadow-lg m-4 flex items-center">
            <MapPin className="text-green-500 text-2xl mr-4" />
            <div className="text-left">
              <h3 className="font-bold">Our Address:</h3>
              <p>Burau, Ethiopia</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-lg m-4 flex items-center">
            <Phone className="text-green-500 text-2xl mr-4" />
            <div className="text-left">
              <h3 className="font-bold">Phone Line:</h3>
              <p>+251-915579335</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-lg m-4 flex items-center">
            <Mail className="text-green-500 text-2xl mr-4" />
            <div className="text-left">
              <h3 className="font-bold">Email Address:</h3>
              <p>az.trading@gmail.com</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-lg m-4 flex items-center">
            <Printer className="text-green-500 text-2xl mr-4" />
            <div className="text-left">
              <h3 className="font-bold">Fax:</h3>
              <p>+251-915579335</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded shadow-lg">
          <div className="md:w-1/2 text-left md:pr-8">
            <h3 className="text-xl font-bold mb-4">Have questions? Feel free to write us</h3>
            <p className="mb-4">Chunli Company tea garden is a beautiful and scenic place located in a serene environment. The tea garden boasts of miles of neatly trimmed green tea plants that give off a fresh, flowery aroma that is sure to captivate the senses.</p>
            <div className="flex space-x-4">
              <Facebook  className="text-xl text-gray-700 hover:text-green-500" />
              <Twitter className="text-xl text-gray-700 hover:text-green-500" />
              <Linkedin className="text-xl text-gray-700 hover:text-green-500" />
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">E-mail:*</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message:*</label>
                <textarea id="message" className="w-full p-2 border border-gray-300 rounded" required placeholder="Please include details like size, weight, destination port and etc., so that we can quote the best price."></textarea>
              </div>
              <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-700">Leave a message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}