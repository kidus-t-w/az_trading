import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pin from "./components/ui/Pin";

function App() {
  return (
    <div className="font-[Poppins]">
      <Header />
        <Pin />
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;
