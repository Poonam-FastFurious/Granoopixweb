import contactbanner from "../../assets/newimage/contactbanner.jpeg";
import { Link } from "react-router-dom";
import images from "../../Components/Images";
import SEO from "../Seo/Seo";
import Form from "../Home/Form";
function ContactUs() {
  return (
    <>
      <SEO title={"Contact Granoopixr | Best AR VR Development Company in India"} description={"Get in touch with Granoopixr, the leading augmented reality agency in India. Contact us for virtual reality development, AR marketing solutions, and immersive technology services"} keywords={"Keyword: Contact us, limitless VR entertainment, VR solutions, explore new worlds, Virtual Reality experience, VR entertainment, immersive technology, VR play, innovative VR solutions, play and explore with VR."} 
      url={"https://granoopixr.com/contact"}/>
      <section className="banner-breadcrumbs position-relative space-top">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Contact Us
                </h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Enjoy the limitless entertainment possibilities with VR <br />
                  Witness, play, and explore new worlds
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb">
            <img src={contactbanner} alt="img" className="w-100 rounded-3" />
          </div>
        </div>
      </section>
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-lg-4 g-3 align-items-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="contact-info-item">
                <div className="icon  rounded-2 d-center">
                  <img src={images.location} alt="img" />
                </div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">
                    Our Address
                  </h4>
                  <p className="pra fs-seven">
                  <span className=" p-1">NOIDA</span> |  <span className=" p-1">GURUGRAM</span>  | <span className=" p-1">MUMBAI</span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="contact-info-item">
                <div className="icon  rounded-2 d-center">
                  <img src={images.phone} alt="img" />
                </div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">
                    Contact Info
                  </h4>
                  <p className="pra fs-seven">Open a chat or give us call at</p>
                  <Link to="#" className=" fw-semibold">
                    +91-9999596976
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="contact-info-item">
                <div className="icon  rounded-2 d-center">
                  <img src={images.email} alt="img" />
                </div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">
                    Live Support
                  </h4>
                  <p className="pra fs-seven">live chat service</p>
                  <Link to="#" className=" fw-semibold">
                  info.granoopixr@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Form/>
      
    </>
  );
}

export default ContactUs;
