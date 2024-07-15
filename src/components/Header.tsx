import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.jpg";
import { Facebook, Mail, SendHorizontal, Twitter, Youtube } from "lucide-react";
export default function Header() {
  return (
    <>
      <div className="flex justify-between items-align p-2 bg-gray-800 text-white px-16">
        <div className="flex gap-x-8">
          <div className="flex gap-x-4">
            <SendHorizontal />
            <h3>+251-915579335</h3>
          </div>
          <div className="flex gap-x-4">
            <Mail />
            <h3>+251-915579335</h3>
          </div>
        </div>
        <div className="flex gap-x-4">
          <Link to="/">
            <Twitter />
          </Link>
          <Link to="/">
            <Youtube />
          </Link>
          <Link to="/">
            <Facebook />
          </Link>
        </div>
      </div>
      <header className="flex items-center justify-between w-full h-16 p-8">
        <div className="">
          <Link to="/" className="flex gap-x-4 items-center">
            <img className="w-[50px] h-[50px]" src={Logo} alt="" />
            <h1 className="font-bold text-2xl">AZ Trading</h1>
          </Link>
        </div>
        <ul className=" flex gap-x-4 font-bold">
          <li className=" h-16 text-center content-center hover:bg-blue-950 w-[100px]">
            <Link to="/" className="block h-full w-full content-center hover:text-white">Home</Link>
          </li>
          <li className=" h-16 text-center content-center hover:bg-blue-950 w-[100px]">
            <Link to="/about_us" className="block h-full w-full content-center hover:text-white">
              About Us
            </Link>
          </li>
          <li className="h-16 text-center content-center hover:bg-blue-950 w-[100px]">
            <Link to="/products" className="block h-full w-full content-center hover:text-white">Products</Link>
          </li>
          <li className="h-16 text-center content-center hover:bg-blue-950 w-[100px]">
            <Link to="/videos" className="block h-full w-full content-center hover:text-white">Videos</Link>
          </li>
          <li className="h-16 text-center content-center hover:bg-blue-950 w-[100px]">
            <Link to="/contact_us" className="block h-full w-full content-center hover:text-white">Contact Us</Link>
          </li>
          <li className="h-16 text-center content-center hover:bg-blue-950 w-[100px]">
            <Link to="/faq" className="block h-full w-full content-center hover:text-white">FAQ</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
