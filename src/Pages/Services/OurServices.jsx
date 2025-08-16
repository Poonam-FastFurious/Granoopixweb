import OurService from "../Home/OurService";
import Faq from "../../Components/Faq";
import { Link } from "react-router-dom";
import alfa from "../../assets/newimage/alpha.png";
import images from "../../Components/Images";
import SEO from "../Seo/Seo";
function OurServices() {
  return (
    <>
      <SEO
        title="Granoopixr – Augmented Reality & Virtual Reality in India"
        description="Granoopixr is a leading augmented reality solutions provider in India, offering a cutting-edge augmented reality website in India and trusted virtual reality services."
        keywords="Granoopixr, AR services, VR solutions, Mixed Reality, augmented reality services, virtual reality company, mixed reality solutions, immersive technology, industrial MR solutions, high-definition VR, AR VR MR experts, cost-effective mixed reality, digital visualization, AR VR for industries, immersive services"
        url="https://granoopixr.com/service"
        image="https://granoopixr.com/assets/images/services-og-image.jpg" // Replace with the actual OG image URL
      />

      <section className="banner-breadcrumbs position-relative space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Our Services
                </h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Enjoy the limitless entertainment possibilities with VR.
                  Witness, play, and explore new worlds
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb">
            <div className="play-thumb w-100 position-relative d-center rounded-3">
              <img
                src={images.servicebg}
                alt="img"
                className="w-100 rounded-2"
              />
              <Link
                to="https://www.youtube.com/watch?v=9PcHjRqotgI"
                target="_blank"
                className="play-in video-popup white-bg rounded-circle d-center fw-bold btn-vivacity fs-five sub-font black"
              >
                Play
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section fix section-padding position-relative section-bg">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div>
                  <h6
                    className="body-font  p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    WHY CHOOSE US
                  </h6>
                  <h2 className="black  f mb-xl-4 mb-3 d-block">
                    Reality Ends & Imagination Begins
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <p>
                Our cutting-edge AR/VR & Mixed reality solutions that turn your
                ideas into engaging, interactive experiences. We blend
                creativity with advanced technology to help your brand connect
                with and captivate your audience in unique ways.
              </p>
            </div>
          </div>
          <div className="row g-lg-4 g-4 align-items-center choose-wrapper space-top">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="pricing-items">
                <div className="choose-item text-center">
                  <div className="icon black-bg d-center rounded-circle">
                    <img src={images.techicon} alt="icon" />
                  </div>
                  <h4 className="black ">
                    <Link href="service-details.html" className="black">
                      Modern Feature
                    </Link>
                  </h4>
                  <span>
                    Immerse in VR, blend physical and digital with MR, and
                    enhance life with AR. Our user-friendly interface makes
                    exploring these technologies simple, intuitive, and
                    engaging.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="pricing-items">
                <div className="choose-item text-center">
                  <div className="icon black-bg d-center rounded-circle">
                    <img src={images.setting} alt="icon" />
                  </div>
                  <h4 className="black ">
                    <Link to="#" className="black">
                      User Friendly
                    </Link>
                  </h4>
                  <span>
                    Our simple, user-friendly technology makes it easy for you
                    to enjoy fun, engaging, and memorable experiences that truly
                    captivate.
                  </span>
                </div>
              </div>
            </div>{" "}
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="pricing-items">
                <div className="choose-item text-center">
                  <div className="icon black-bg d-center rounded-circle">
                    <img src={images.suport} alt="icon" />
                  </div>
                  <h4 className="black ">
                    <Link to="#" className="black">
                      24/7 Support
                    </Link>
                  </h4>
                  <span>
                    Our team of experts provides 24/7 customer support, ensuring
                    prompt and efficient resolution of any issues our customers
                    may face.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurService />
      <div className="common-thumb">
        <div className="play-thumb w-100 position-relative d-center rounded-3">
          <img src={alfa} alt="img" className="w-100 rounded-2" />
          <Link
            to="https://www.youtube.com/watch?v=9PcHjRqotgI"
            target="_blank"
            className="play-in video-popup white-bg rounded-circle d-center fw-bold btn-vivacity fs-five sub-font black"
          >
            <div className="play-button">
              <i
                className="fa fa-play"
                style={{ fontSize: "24px", color: "#000" }}
              ></i>
            </div>
          </Link>
        </div>
      </div>
      <Faq />
    </>
  );
}

export default OurServices;
