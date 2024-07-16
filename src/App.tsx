import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pin from "./components/ui/Pin";

function App() {
  return (
    <>
      <Header />
      <body className="">
        <Pin />
        <Outlet />
      </body>
      <Footer />
    </>
  );
}

export default App;
