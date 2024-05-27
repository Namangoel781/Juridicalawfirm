import React from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testiminial";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Practice from "./Components/Practice-Areas/Practice";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar />
      <Hero />
      <Testimonials />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice-area" element={<Practice />} />
        <Route path="/people" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
