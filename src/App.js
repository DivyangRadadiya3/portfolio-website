import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Routes element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
