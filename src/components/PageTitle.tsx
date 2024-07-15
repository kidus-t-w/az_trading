import { House } from "lucide-react";
import { Link } from "react-router-dom";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <>
      <div className="relative w-full h-[300px]">
        <div className="w-full h-full bg-banner bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-full flex flex-col gap-y-4 items-center justify-center text-center">
          <h1 className="text-8xl text-white">{title}</h1>
        </div>
      </div>
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
          <span className="text-gray-700">{title}</span>
        </div>
      </div>
    </>
  );
}
