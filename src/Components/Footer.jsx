import { Link } from "react-router-dom";
import logo from "../assets/newimage/LOGO (4).png";
function Footer() {
  return (
    <>
      <footer className="fix">
        <section className="">
          <div className="container  text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <Link to="/" className="text-uppercase fw-bold mb-4">
                  <img
                    src={logo}
                    alt="logo-img"
                    className="mb-4"
                    style={{ width: "220px" }}
                  />
                </Link>
                <p>
                  We create magic in engaging audiences and converting clicks
                  into clients. Are you ready to begin your upward journey?
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <div className="footer-widget text-md-start ">
                  <h4 className="white-clr fw_600 mb-4">Quick Links</h4>
                  <ul className="footer-list mb-40">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/service">Our Service</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Other Pages</h6>
                <ul className="footer-list mb-40">
                  <li>
                    <Link to="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blog</Link>
                  </li>

                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/term-and-conditions">Term & Conditions</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <ul className="footer-list mb-40">
                  <li>
                    <i className="fas fa-home me-3"></i>{" "}
                    <span className=" p-1">NOIDA</span> |{" "}
                    <span className=" p-1">GURUGRAM</span> |{" "}
                    <span className=" p-1">MUMBAI</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope me-3"></i>
                    info.granoopixr@gmail.com
                  </li>

                  <li>
                    <i className="fas fa-phone me-3"></i> +91-9999596976
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          Copyright © 2025:
          <Link
            className="text-reset fw-bold"
            to="https://granoopixr.com"
            target="_blank"
          >
            All rights reserved by Granoopixr
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
