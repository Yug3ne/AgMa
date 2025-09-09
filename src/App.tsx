import { Route, Routes } from "react-router";
import Landing from "./pages/landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Assessment from "./pages/assessment";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/assessment" element={<Assessment/>}/>
    </Routes>
  )
};

export default App;
