import React from "react";

import NatureVid from "../assets/video/main.mp4";
import Hero from "../Components/Hero/Hero";
import Places from "../Components/Places/Places";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import BannerPic from "../Components/BannerPic/BannerPic";
import Blog from "./Blog";
import BlogsComp from "../Components/Blogs/BlogsComp";
import Banner from "../Components/Banner/Banner";
import Testimonial from "../Components/Testimonial/Testimonial ";
import OrderPopup from "../Components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <Blog />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
