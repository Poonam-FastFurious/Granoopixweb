/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import alfa from "../../assets/newimage/alpha.png";

import images from "../../Components/Images";
import Form from "../Home/Form";
import SEO from "./Seo";
import OurService from "../Home/OurService";

function Bangalore() {
  return (
    <>
      <SEO
        title="Best VR & AR Services in Bangalore | Granoopixr"
        description="Granoopixr delivers Virtual Reality and Augmented Reality solutions in Bangalore. Partner with experts for immersive VR and AR experiences for your business."
        keywords="Virtual Reality in Bangalore, Augmented Reality in Bangalore, Best VR Companies in Bangalore, Top AR Development in Bangalore"
        image="https://granoopixr.com/assets/images/about-og-image.jpg"
        url="https://granoopixr.com/bangalore"
      />

      <section className="banner-breadcrumbs position-relative space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h3
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Granoopixr: Redefining AR/VR Experiences in Bangalore
                </h3>
                <h5
                  className="fw-bold mb-3 wow fadeInUp"
                  data-wow-delay="0.45s"
                >
                  Your Partner for Immersive Innovation
                </h5>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  We're a leading AR/VR company in Bangalore, helping businesses
                  unlock the full potential of immersive technology. Whether
                  you're in retail, real estate, education, or entertainment, we
                  create powerful, interactive experiences that bring your ideas
                  to life.
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

      <OurService />

      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  End-to-End VR & AR Services in Bangalore
                </h2>
                <p className="pra mb-lg-3 mb-2">
                  With deep expertise in both Virtual Reality and{" "}
                  <Link
                    to="https://granoopixr.com/augumented-reality"
                    target="_blank"
                  >
                    Augmented Reality
                  </Link>
                  , our team crafts every project with creativity, precision,
                  and impact. From realistic simulations to engaging product
                  visualizations, we build solutions that matter.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  Our Services
                </h2>
                <ul className="list-style mb-3">
                  <li>
                    • Custom VR Solutions: Tailored for training, simulation,
                    and marketing.
                  </li>
                  <li>
                    • AR Development: Interactive mobile apps, filters, and
                    storytelling.
                  </li>
                  <li>
                    • Virtual Showrooms & Tours: 360° virtual tours for real
                    estate and product demonstrations.
                  </li>
                  <li>
                    • Event Activations: Immersive AR/VR experiences for events
                    and exhibitions.
                  </li>
                  <li>
                    • End-to-End Support: We guide you from the initial concept
                    to final deployment.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  Why Choose Granoopixr?
                </h2>
                <ul className="list-style mb-3">
                  <li>• Expert team in AR/VR concept, design & deployment</li>
                  <li>
                    • Customized solutions for every industry: education, real
                    estate, retail, healthcare & more
                  </li>
                  <li>
                    • Real-time support and collaboration across Bangalore
                  </li>
                  <li>• Quick delivery with creative quality</li>
                  <li>• Proven impact on user engagement and brand recall</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  Let's Build the Future
                </h2>
                <p className="pra mb-2">
                  We’re proud to deliver top-tier AR and VR development in
                  Bangalore. Contact us today to start building immersive
                  experiences that make an impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Form />
    </>
  );
}

export default Bangalore;
