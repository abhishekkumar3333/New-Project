// Home.jsx — DON'T include BrowserRouter here!
import React from 'react';
import BannerSlider from '../Components/banner/BannerSlider';
import About from '../Components/about/About';
import Service from '../Components/service/Service';
import Studies from '../Components/study/Studies';
import FeedBack from '../Components/feedback/FeedBack';
import Blog from '../Components/blog/Blog';

const Home = () => {
  return (
    <>
      <BannerSlider />
      <About />
      <Service />
      <Studies />
      <FeedBack />
      <Blog />
    </>
  );
};

export default Home;
