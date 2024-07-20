import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pin from "./components/ui/Pin";

function App() {
  return (
    <div className="font-[Poppins]">
      <Header />
      <body className="">
        <Pin />
        <Outlet />
      </body>
      <Footer />
    </div>
  );
}

export default App;
