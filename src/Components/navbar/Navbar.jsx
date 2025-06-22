import React, { useEffect, useState } from 'react';
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const homePage = location.pathname === '/' || location.pathname === "/portfolio";
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
useEffect(() => {
  setMobileMenuOpen(false);
}, [location.pathname]);
  useEffect(() => {
    const header = document.getElementById("stiky-header");
    const mainHeader = document.getElementById("header");
    if (!homePage) {
      mainHeader.classList.add("addBg");
    } else {
      mainHeader.classList.remove("addBg");
    }

    const handleScroll = () => {
      if (window.scrollY > 44) {
        header.classList.add("sticky-added");
      } else {
        header.classList.remove("sticky-added");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location, homePage]);

  return (
    <>
      <header className='header' id='header'>
        <div className="top-header">
          <div className="container">
            <div className="top-header-inner">
              <div className="address">
                <div className="mail">
                  <div className="icon"><IoMdMail /></div>
                  <span>needhelp@linoor.com</span>
                </div>
                <div className="location">
                  <div className="icon"><FaLocationDot /></div>
                  <span>Suite 20 Golden Street USA</span>
                </div>
              </div>
              <div className="contact-us">
                <div className="welcome-message">
                  <p>Welcome to Amazing Consulting Agency.</p>
                </div>
                <div className="social-media">
                  <ul>
                    <li><FaTwitter /></li>
                    <li><FaFacebookF /></li>
                    <li><FaPinterestP /></li>
                    <li><AiFillInstagram /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-header" id='stiky-header'>
          <div className="container">
            <div className="main-header">
             <div className='logo-outer'> <div className="logo">
                <img src="logo1.webp" alt="Logo" onClick={()=>navigate("/")} />
              </div>

              {/* Mobile Menu Toggle */}
              <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <GiHamburgerMenu />
              </div>
              </div>

              <div className={`header-element ${mobileMenuOpen ? 'open' : ''}`}>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/page">Pages</Link></li>
                  <li><Link to="/service">Services</Link></li>
                  <li><Link to="/portfolio">PortfoLio</Link></li>
                  <li><Link to="/allproducts">Shop</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="search-icon">
                <HiOutlineSearch />
                <IoMdLogOut onClick={handleLogOut} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
