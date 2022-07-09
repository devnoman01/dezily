import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-part">
        <div className="container mx-auto p-5  block lg:flex items-center	justify-between">
          <div>
            <h2 className="font-bold text-xl mb-3">Subscribe With Us</h2>
            <p className="text-gray-400 mb-4">
              For any help mail us. 24/7 emergency services
            </p>
            <div class="form-control">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="ENTER YOUR EMAIL"
                  className="input input-bordered "
                />
                <button class="btn ">Message</button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400">With More 25+ Hospitals</p>
            <p className="text-gray-400">In United States,Europe, and Asia</p>
            <div class="divider"></div>
            <h1 className="hospital-count">
              25<sup>+</sup> Hospitals
            </h1>
          </div>
          <div>
            <button className="btn footer-location-btn">
              View Our Location
            </button>
          </div>
        </div>
      </div>
      <div className="footer-middle-part">
        <div className="container mx-auto p-5 grid grid-cols-4 gap-4">
          <div>
            <h2 className="font-bold text-xl mb-4">About Dezily</h2>
            <p className="text-gray-400 pr-5">
              Our Hospital has grown to provide a world class facilities for the
              clinically advanced restorative heart ralated treatments
              available.
            </p>
          </div>
          <div>
            {" "}
            <h2 className="font-bold text-xl mb-3">Useful Links</h2>
            <div className="flex ">
              <ul className="pr-10">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">How It Work</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Pricing Plans</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Policies</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            {" "}
            <h2 className="font-bold text-xl mb-3">Popular Posts</h2>
          </div>
          <div>
            {" "}
            <h2 className="font-bold text-xl mb-3">Get In Touch</h2>
            <h3 className="text-gray-400 mb-3">
              Mail:{" "}
              <a className="font-bold " href="mailto:needhelp@company.com">
                needhelp@company.com
              </a>
            </h3>
            <h3 className="text-gray-400 mb-3">Fax: +123 456 7890</h3>
            <h3 className="text-gray-400 mb-3">Fax: +000 78945 666</h3>
            <h3 className="text-gray-400 mb-3">Location: Fair Oaks Blvd,</h3>
            <h3 className="text-gray-400 mb-3">San Francisco,USA</h3>
          </div>
        </div>
      </div>
      <div className="footer-bottom-part">
        <div className="container mx-auto p-5">
          <div>
            <p>
              Copyright © 2022 <a href="#">Dezaly</a> . All rights reserved
            </p>
          </div>
          <div>
            <ul className="flex">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>|</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
