import { Route, Routes } from "react-router";
import Landing from "./pages/landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Assessment from "./pages/assessment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Process from "./pages/process";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/process" element={<Process/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
