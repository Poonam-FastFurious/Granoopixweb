import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../assets/newimage/LOGO (4).png";
import images from "./Images";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, [location.pathname]);

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{ backgroundColor: "#808080" }}
      >
        <header
          className="flex xl:hidden flex-col relative  h-screen "
          style={{ backgroundColor: "#808080", paddingTop: "10px" }}
        >
          <div
            className="h-16    flex items-center justify-between fixed top-0 left-0 z-50 w-full px-2.5"
            style={{ backgroundColor: "#808080" }}
          >
            <Link to="/" aria-label="logo">
              <img src={logo} alt="logo" className="  h-auto" />
            </Link>
          </div>
          <div className="transition-all duration-300">
            <div
              className={`fixed h-screen overflow-y-scroll w-full top-16 transition-all duration-300 ${
                isOpen ? "left-0" : "-left-full"
              }`}
            >
              <div
                className="flex gap-28 flex-col pr-5 pt-5"
                style={{ padding: "10px" }}
              >
                <ul className="flex gap-5 flex-col text-paragraph text-base leading-5 font-medium font-inter">
                  <li className="has-dropdown ">
                    <Link to="/" onClick={toggleDrawer}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" onClick={toggleDrawer}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/Service" onClick={toggleDrawer}>
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" onClick={toggleDrawer}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </Drawer>
      <header
        id="header-sticky"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
        className="header-section white-bg"
      >
        <div className="container-xl">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <img src={logo} alt="logo-img" style={{ width: "200px" }} />
              </Link>
              <div className="mean__menu-wrapper ">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li
                        className="has-dropdown active menu-thumb"
                        style={{ flexGrow: 1, textAlign: "center" }}
                      >
                        <Link to="/">Home</Link>
                      </li>
                      <li style={{ flexGrow: 1, textAlign: "center" }}>
                        <Link to="/aboutus">About Us</Link>
                      </li>
                      <li
                        className="has-dropdown"
                        style={{ flexGrow: 1, textAlign: "center" }}
                      >
                        <Link to="/service">
                          Services <i className="fas fa-angle-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/augumented-reality">
                              Augmented Reality
                            </Link>
                          </li>
                          <li>
                            <Link to="/virtual-reality">Virtual Reality</Link>
                          </li>
                          <li>
                            <Link to="/mixed-reality">Mix Reality</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link to="#">
                          Industry <i className="fas fa-angle-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/industry/ecomerce">E-commerce</Link>
                          </li>
                          <li>
                            <Link to="/industry/entertainment">
                              Entertainment
                            </Link>
                          </li>
                          <li>
                            <Link to="/industry/education">Education</Link>
                          </li>
                          <li>
                            <Link to="/industry/medical">Medical</Link>
                          </li>
                          <li>
                            <Link to="/industry/automobile">Automobile</Link>
                          </li>{" "}
                          <li>
                            <Link to="/industry/realestate">Real Estate</Link>
                          </li>
                          <li>
                            <Link to="/industry/travel">Travel & Tourism</Link>
                          </li>{" "}
                        </ul>
                      </li>
                      <li style={{ flexGrow: 1, textAlign: "center" }}>
                        <Link to="/blogs">Blog</Link>
                      </li>
                      <li style={{ flexGrow: 1, textAlign: "center" }}>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right ">
                <div
                  className="header__hamburger my-auto"
                  onClick={toggleDrawer}
                  style={{}}
                >
                  <div className="sidebar__toggle">
                    <img src={images.icon} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
