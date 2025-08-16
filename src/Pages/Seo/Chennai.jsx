import { Link } from "react-router-dom";
import Faq from "../../Components/Faq";
import images from "../../Components/Images";
import Form from "../Home/Form";
import SEO from "./Seo";
import OurService from "../Home/OurService";
import chennaiFaqs from "../../Data/FaqChennai.json";
import alfa from "../../assets/newimage/alpha.png";
function Chennai() {
  return (
    <>
      <SEO
        title="VR & AR Companies in Chennai | Virtual Reality & AR Services"
        description="We are a leading VR Development Company and Augmented Reality Studio in Chennai. We offer customized Virtual Reality and Augmented Reality solutions for various industries."
        keywords="Virtual Reality in Chennai, Augmented Reality in Chennai, VR Companies in Chennai, Augmented Reality Studio in Chennai"
        image="https://granoopixr.com/assets/images/about-og-image.jpg"
        url="https://granoopixr.com/chennai"
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
                  Granoopixr – Leading AR/VR Innovation in Chennai
                </h3>
                <h5
                  className="fw-bold mb-3 wow fadeInUp"
                  data-wow-delay="0.45s"
                >
                  Creating immersive experiences that engage and elevate your
                  brand.
                </h5>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Granoopixr is your trusted partner for cutting-edge{" "}
                  <Link
                    to="https://granoopixr.com/virtual-reality"
                    target="_blank"
                  >
                    Virtual Reality
                  </Link>
                  and Augmented Reality in Chennai. We help brands, educators,
                  and enterprises reimagine what’s possible.
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
                <p className="pra mb-lg-3 mb-2">
                  As one of the top-rated VR companies in Chennai, we specialize
                  in creating custom-built virtual environments, simulations,
                  and interactive experiences. Our creative team at Granoopixr’s
                  Augmented Reality Studio in Chennai blends digital magic with
                  real-world applications—offering unforgettable experiences
                  that drive results.
                </p>
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
                  <li>• Real-time support and collaboration across Chennai</li>
                  <li>• Quick delivery with creative quality</li>
                  <li>• Proven impact on user engagement and brand recall</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  Our Core Services
                </h2>
                <ul className="list-style mb-3">
                  <li>• Virtual Reality app & game development</li>
                  <li>• Augmented Reality filters & app integration</li>
                  <li>• Interactive product demos & virtual showrooms</li>
                  <li>• VR simulations for training & education</li>
                  <li>• Virtual tours for real estate and hospitality</li>
                  <li>• Immersive storytelling for events & marketing</li>
                </ul>
                <p className="pra">
                  Let’s build the future together—one immersive experience at a
                  time.
                </p>
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
                  Contact Us Today
                </h2>
                <p className="pra mb-2">
                  📞 Let’s connect today and explore how we can help you lead
                  the future of digital engagement in Chennai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq faqs={chennaiFaqs} />
      <Form />
    </>
  );
}

export default Chennai;
