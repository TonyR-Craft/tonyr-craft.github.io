import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import TheLights from "./components/Backgrounds/TheLights/TheLights";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <>
    <TheLights />
    <Pages />
    </>
  );
};

export default App;
