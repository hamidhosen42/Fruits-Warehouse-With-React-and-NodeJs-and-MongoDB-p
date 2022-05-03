import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-button bg-dark">
      <footer className="text-center Inventorys-container text-white p-5 footer">
        <div className="text-start">
          <h5>INFORMATION</h5>
          <p>Address</p>
          <p>Order</p>
          <p>About</p>
          <p>Forget Password</p>
        </div>
        <div className="text-start">
          <h5>MY ACCOUNT</h5>
          <p>Delivery</p>
          <p>About us</p>
          <p>New Product</p>
          <p>Best sales</p>
        </div>
        <div className="text-start">
          <div className="icon-size">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaGooglePlusG />
          </div>
          <div className="mt-4">
            <span>
              <FaMailBulk />
              <span> hamidhosen73848@gmail.com</span>
            </span>
          </div>
          <div className="mt-3">
            <span>
              <FaMobileAlt />
              <span> 01858540338</span>
            </span>
          </div>
          <div className="mt-3">
            <p>
              <h5>Address : Chittagong, Bangladesh</h5>
            </p>
          </div>
        </div>
      </footer>
      <p className="text-center text-white pb-5">
        <small>
          Copyright @ {year} : Fruits Warehouse Management Websites{" "}
        </small>
      </p>
    </div>
  );
};

export default Footer;
