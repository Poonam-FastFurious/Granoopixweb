/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import images from "../../Components/Images";
function About() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Run animation only once
    });
  }, []); // Empty dependency array to run only once on mount
  return (
    <>
      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-thumbs">
                <div className="thumb-inner">
                  <div className="img-about ">
                    <img
                      src={images.aboutarimage}
                      alt="img"
                      className="w-100"
                      data-aos="fade-right"
                      data-aos-delay="300" // Delay the animation
                    />
                  </div>
                  <div className="content-count">
                    <div className="count-item">5+</div>
                    <p>
                      Years of <br />
                      Experience
                    </p>
                  </div>
                </div>
                <div className="thumb-inner d-flex ">
                  <img
                    src={images.about2}
                    alt="img"
                    className="w-100"
                    data-aos="fade-up"
                    data-aos-delay="300" // Delay the animation
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h6
                    className="body-font   left-sub-maintain mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp "
                    data-wow-delay=".3s"
                  >
                    About Company
                  </h6>
                  <h2 className="black  fw-bold mb-xl-4 mb-3 d-block">
                    Granoopixr – India’s Leading AR VR Company: Reimagine
                    Reality, Drive Results.
                  </h2>
                  <p
                    className="pra mb-lg-3 mb-2 "
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    We're a leading product realization company specializing in
                    crafting impactful, immersive experiences using cutting-edge
                    technologies like AR, VR, and Mixed Reality. Our expertise
                    spans from Geospatial and Business Intelligence to Game
                    Development and Virtual Production. We collaborate with
                    clients to transform their ideas into captivating and
                    engaging realities. With a proven track record and a focus
                    on innovation, we help businesses like yours thrive in the
                    evolving digital landscape.
                  </p>

                  <Link
                    to="/aboutus"
                    className="common-btn box-style  d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg mt-4 rounded-2"
                    aria-label="Learn more about Granoopixr service "
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
