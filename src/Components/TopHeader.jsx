import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <>
      <div className="header-top-section">
        <div className="container-xl">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fa-regular fa-clock p2-clr"></i>
                Mon – Sat: 9.00 am – 8.00pm
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-envelope p2-clr"></i>
                <Link to="mailto:info@barandbell.com" className="link">
                  info@granoopixr.com
                </Link>
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-location-dot p2-clr"></i>
                <Link to="#" className="link">
                <span className=" p-1">NOIDA</span> |  <span className=" p-1">GURUGRAM</span>  | <span className=" p-1">MUMBAI</span>
                </Link>
              </li>
            </ul>
            <div className="header-top-social d-flex align-items-center">
              <Link
                to="https://www.facebook.com/people/Granoopixrcom/61572259677987/"
                target="_blank"
                className="white sub-font"
              >
                <i className="fa-brands fa-facebook"></i> Facebook
              </Link>
              <span className="line"></span>
              <Link
                to="https://www.instagram.com/granoopixr/"
                target="_blamk"
                className="white sub-font"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
              </Link>
              <span className="line"></span>
              <Link
                to="https://www.linkedin.com/company/granoopixr/"
                target="_blank"
                className="white sub-font"
              >
                <i className="fa-brands fa-linkedin"></i> Linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
