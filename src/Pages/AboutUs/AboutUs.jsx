/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import images from "../../Components/Images";
import Crausal from "./Crausal";
import SEO from "../Seo/Seo";
function AboutUs() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Run animation only once
    });
  }, []);
  return (
    <>
     <SEO
        title="About Granoopixr - Leading Virtual & Augmented Reality Company in India"
        description="Discover Granoopixr, a top augmented reality company in India, specializing in VR training, AR marketing, and immersive solutions for businesses across Delhi, Mumbai, Bangalore, and Hyderabad"
        keywords="Granoopixr, Augmented Reality, Virtual Reality, Mixed Reality, Artificial Reality, AR solutions, VR experts, MR technology, immersive technologies, AR VR MR ARt, digital transformation, virtual experiences, product realization, innovation in AR and VR, geospatial intelligence, game development, virtual production"
        url="https://granoopixr.com/aboutus"
        image="https://granoopixr.com/assets/images/about-og-image.jpg" // Replace with the actual OG image URL
      />
      <section className="banner-breadcrumbs position-relative space-top">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  About Us
                </h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Enjoy the limitless entertainment possibilities with VR{" "}
                  <br />
                  Witness, play, and explore new worlds
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb">
            <img src={images.thumb} alt="img" className="w-100 rounded-3" />
          </div>
        </div>
      </section>
      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h6
                    className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    Who We Are
                  </h6>
                  <h2 className="black  fw-bold mb-xl-4 mb-3 d-block">
                    Granoopixr VR Reimagine Reality, Drive Results
                  </h2>
                  <p className="pra mb-lg-3 mb-2 ">
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
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </section>
      <section
        className="vission-section fix space-top space-bottom"
        style={{ backgroundColor: "#e2e2e2" }}
      >
        <div className="container">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-5">
              <div className="vissiton-thumb wow fadeInUp">
                <img
                  src={images.valuethumb}
                  alt="img"
                  data-aos="fade-up"
                  data-aos-delay="300" // Delay the animation
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="vission-content">
                <div className="section-title">
                  <h6
                    className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    OUR VALUE
                  </h6>
                  <h2
                    className="black  fw-bold mb-xl-4 mb-3 d-block"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Virtual reality is about to become our new reality
                  </h2>
                  <p className="pra visible-from-bottom mb-40">
                    We aim to solve industry challenges using innovative
                    technology.
                  </p>
                  <div className="mission-box-inner">
                    <div className="mission-box">
                      <div className="icon d-center">
                        <img src={images.vision} alt="img" />
                      </div>
                      <div className="cont">
                        <h4 className="black mb-xxl-3 mb-2 fw_700 visible-slowly-bottom">
                          Our Vision
                        </h4>
                        <p className="pra wow fadeInUp">
                          Driving Impact Through Innovation: We believe
                          impactful solutions emerge from the fusion of human
                          ingenuity, cutting-edge technology, and artistic
                          expression. We connect people, foster collaboration,
                          and leverage immersive AR/VR/MR experiences to
                          transform ideas into realities that shape a better
                          tomorrow
                        </p>
                      </div>
                    </div>
                    <div className="mission-box">
                      <div className="icon d-center">
                        <img src={images.mision} alt="img" />
                      </div>
                      <div className="cont">
                        <h4 className="black mb-xxl-3 mb-2 fw_700 visible-slowly-bottom">
                          Our Mission
                        </h4>
                        <p className="pra wow fadeInUp">
                          To be the global leader in providing high-quality
                          services within the AR/VR industry, exceeding customer
                          expectations and delivering unparalleled value across
                          the globe within the next five years
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <Crausal />
    </>
  );
}

export default AboutUs;
