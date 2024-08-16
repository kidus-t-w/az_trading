import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.jpg'
import { Facebook, Mail, Menu, SendHorizontal, Twitter, X, Youtube } from 'lucide-react'
import { useEffect, useState } from 'react'
export default function Header() {
  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT US', link: '/about_us' },
    { name: 'PRODUCTS', link: '/products' },
    { name: 'CONTACT US', link: '/contact_us' },
    { name: 'FAQ', link: '/faq' }
  ]

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOpen(false)
      } 
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-[1000] bg-white" >
      <div className=" bg-gray-800 text-white  ">
        <div className="sm:flex justify-between items-align p-2 container px-6 hidden">
          <div className="flex gap-x-8">
            <div className="flex gap-x-4">
              <SendHorizontal />
              <h3>az.trading@gmail.com</h3>
            </div>
            <div className="flex gap-x-4">
              <Mail />
              <h3>+251 96 248 8640</h3>
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
      </div>
      <div className="md:flex bg-white py-2 items-center justify-between container">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <Link
            to="/"
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800"
          >
            <span className="text-3xl text-blue-600 mr-1 ">
              <img src={Logo} alt="az-trading-logo" className="w-10" />
            </span>
            <h1>AZ Trading</h1>
          </Link>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu className="md:hidden text-3xl text-gray-800 cursor-pointer" />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? 'top-10 ' : 'top-[-499px]'
          }`}
        >
          {Links.map((link, index) => (
            <li className="md:ml-8 text-l font-semibold md:my-0 my-7" key={index} onClick={() => setOpen(!open)}>
              <Link to={link.link} className="text-gray-600 hover:text-gray-800 duration-500">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
