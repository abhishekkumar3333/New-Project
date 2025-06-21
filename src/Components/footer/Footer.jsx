import React from 'react';
import img1 from "../../assets/sponsor-2-1.webp";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Sponsor Section */}
  

      {/* Footer Content Section */}
      <div className="footer-main container">
        <div className="footer-column company">
          <h3>About Us</h3>
          <p>
            We are a leading consulting firm with a track record of helping businesses grow since 1987. 
            From strategy to execution, we’ve got your back.
          </p>
        </div>

        <div className="footer-column links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h3>Contact Info</h3>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@yourcompany.com</p>
          <p><strong>Location:</strong> 123 Business Street, Mumbai, India</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
