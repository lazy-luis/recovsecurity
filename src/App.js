import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [currentPage, currentState] = useState("home");
  const [siderBar, siderBarState] = useState(false);

  const updatePage = (page) => {
    currentState(page);
  };

  const updateSideBar = () => {
    siderBarState(!siderBar);
  };

  return (
    <BrowserRouter>
      <Sidebar
        currentPage={currentPage}
        updatePage={updatePage}
        Sidebar={siderBar}
        updateSideBar={updateSideBar}
      />
      <Header
        currentPage={currentPage}
        updatePage={updatePage}
        updateSideBar={updateSideBar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer currentPage={currentPage} updatePage={updatePage} />
    </BrowserRouter>
  );
}

export default App;
