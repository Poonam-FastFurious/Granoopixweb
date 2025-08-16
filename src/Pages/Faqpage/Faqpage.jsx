import { Link } from "react-router-dom";
import Faq from "../../Components/Faq";
import images from "../../Components/Images";
import SEO from "../Seo/Seo";
import faqdata from "../../Data/Faq.json";
function Faqpage() {
  return (
    <>
      <SEO
        title="FAQs - Augmented & Virtual Reality Services in India"
        description="Find answers about AR VR development, augmented reality solutions, virtual reality training, and immersive marketing. Explore how Granoopixr can transform your business with AR & VR."
        keywords="Granoopixr, AR solutions, VR experiences, Mixed Reality, geospatial intelligence, business intelligence, game development, virtual production, immersive technologies, product realization company"
        url="https://granoopixr.com/faq"
        image="https://granoopixr.com/assets/images/og-image.jpg"
      />
      <section className="banner-breadcrumbs position-relative section-padding">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  FAQs Page
                </h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Enjoy the limitless entertainment possibilities with VR.
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
      <Faq faqs={faqdata} />
      <section className="getin-touch section-padding cmnbg-bg">
        <div className="container position-relative">
          <div className="getin-touch-wrap white-bg rounded-2 position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="getin-touch">
                  <div className="section-title">
                    <h6
                      className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      GET IN TOUCH
                    </h6>
                    <h2 className="black visible-slowly-right fw-bold d-block mb-xxl-4 mb-lg-3 mb-2">
                      Need Help? Contact our Support Team
                    </h2>

                    <h4 className="black fw-bold mb-1">
                      We’r always happy to help.
                    </h4>
                    <Link to="#" className="black fw-semibold fs-six">
                      Info@brandbell.in
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 get-in-touch wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="row g-xxl-4 g-3">
                  <div className="col-lg-12">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your Number" />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="get-intouch"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="button"
                      className="common-btn w-100  d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={images.shape} alt="img" className="get-shape" />
          <img src={images.element} alt="img" className="get-element" />
        </div>
      </section>
    </>
  );
}

export default Faqpage;
