import { Link } from "react-router-dom";
import Faq from "../../Components/Faq";
import images from "../../Components/Images";
import Form from "../Home/Form";
import SEO from "./Seo";
import OurService from "../Home/OurService";
import gurugramFaqs from "../../Data/FaqGurugram.json";
import alfa from "../../assets/newimage/alpha.png";
function Gurugram() {
  return (
    <>
      <SEO
        title="Augmented Reality Agency & VR Company in Gurugram | Granoopixr"
        description="Looking for an Augmented Reality Agency in Gurugram? Granoopixr offers leading VR Development. We bring your ideas to life with immersive Virtual and Augmented Reality solutions."
        keywords="Virtual Reality in gurugram, Augmented Reality in gurugram, VR Development Company in gurugram, Augmented Reality Agency in gurugram"
        image="https://granoopixr.com/assets/images/about-og-image.jpg"
        url="https://granoopixr.com/gurugram"
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
                  Granoopixr: Your Creative AR/VR Partner in Gurugram
                </h3>
                <h5
                  className="fw-bold mb-3 wow fadeInUp"
                  data-wow-delay="0.45s"
                >
                  Step into the Future with Granoopixr a leading name in
                  Immersive Experiences
                </h5>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Whether youre a brand, business, or educational institution,
                  we bring your ideas to life with cutting-edge Virtual Reality
                  (VR) and Augmented Reality (AR) solutions in Gurugram.
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
                  Innovative VR Development in Gurugram
                </h2>
                <p className="pra mb-lg-3 mb-2">
                  As a trusted VR Development Company in Gurugram, we specialize
                  in building tailor-made virtual worlds that engage, educate,
                  and entertain. Our solutions help businesses unlock new ways
                  of storytelling, training, and customer interaction,creating
                  experiences that leave a lasting impact.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  Top-Rated Augmented Reality Agency in Gurugram
                </h2>
                <p className="pra mb-lg-3 mb-2">
                  Looking for next-gen marketing or product visualization? Our
                  team at Granoopixr, a top-rated Augmented Reality Agency in
                  Gurugram, creates interactive AR solutions that seamlessly
                  blend the physical and digital worlds. From mobile apps to
                  social media filters, we help you connect with your audience
                  in new and exciting ways.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  Why Partner with Granoopixr?
                </h2>
                <ul className="list-style mb-3">
                  <li>
                    • Expert Team: High-quality, creative AR/VR content from
                    skilled professionals.
                  </li>
                  <li>
                    • Custom Solutions: Tailored for your industry—education,
                    retail, real estate, and more.
                  </li>
                  <li>• Proven Results: Real brand engagement and ROI.</li>
                  <li>
                    • Local Support: On-site support and smooth deployment in
                    Gurugram.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  Our Services
                </h2>
                <ul className="list-style mb-3">
                  <li>• VR Experiences: 360° content and virtual tours.</li>
                  <li>• AR Solutions: Filters and mobile app integration.</li>
                  <li>• Training & Simulations: Immersive VR modules.</li>
                  <li>
                    • Interactive Demos: Augmented product demos and retail
                    experiences.
                  </li>
                </ul>
                <p className="pra">
                  At Granoopixr, innovation should feel natural, exciting, and
                  impactful. Let’s build the future together, one immersive
                  experience at a time.
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
                  <Link to="https://granoopixr.com/contact" target="_blank">
                    Contact Us Today
                  </Link>
                </h2>
                <p className="pra mb-2">
                  Contact us today to explore how Virtual and Augmented Reality
                  can elevate your business in Gurugram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq faqs={gurugramFaqs} />
      <Form />
    </>
  );
}

export default Gurugram;
