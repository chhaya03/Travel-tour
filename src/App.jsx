import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import PlaceRoute from "./Pages/PlaceRoute";
import About from "./Pages/About";
import NoPages from "./Pages/NoPages";
import "aos/dist/aos.css";
import AOS from "aos";
import Location from "./Components/Location/Location";
import ServicePage from "./Pages/ServicePage";
import TopBrands from "./Pages/TopBrands";
import Results from "./Components/Hero/Results";
import Booked from "./Components/OrderPopup/Booked";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route WITHOUT layout for booking confirmation */}
          <Route path="/booked" element={<Booked />} />

          {/* Everything else WITH Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route path="best-places" element={<PlaceRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPages />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="top-brands" element={<TopBrands />} />
            <Route path="location" element={<Location />} />
            <Route path="results" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
