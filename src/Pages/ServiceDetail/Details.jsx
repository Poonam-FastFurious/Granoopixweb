/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import images from "../../Components/Images";
import { useEffect } from "react";
import AOS from "aos";
import faqimag from "../../assets/newimage/faqs.png";
import SEO from "../Seo/Seo";
import Form from "../Home/Form";
function Details({
  faqs,
  title,
  t2,
  p2,
  p1,
  img2,
  description,
  imageSrc,
  extraParagraphs,
  paragraph2,
  metatitle,
  metadescription,
  metakeywords,
  canonical,
}) {
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
        title={metatitle}
        description={metadescription}
        keywords={metakeywords}
        url={canonical}
      />
      <section className="banner-breadcrumbs position-relative space-top white-bg space-bottom">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {title}
                </h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  {paragraph2} <br />
                  Witness, play, and explore new worlds
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb mb-60">
            <img src={imageSrc} alt="Banner" className="w-100 rounded-3" />
          </div>
          <div className="row g-lg-4 g-3 justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <h2 className="black fw_700 visible-slowly-right">
                {description}
              </h2>
            </div>
            <div className="col-xl-5 col-lg-6">
              <p className={`pra fs-seven mb-xxl-4 mb-xl-3 mb-2 wow fadeInUp`}>
                {extraParagraphs}
              </p>
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
          </div>{" "}
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
                    exploring these technologies simple.
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
      <section className="world-withness fix  white-bg">
        <div className="container">
          <div className="world-content text-center mb-60">
            <h3 className="black fw_700 mb-60 visible-slowly-bottom">{t2}</h3>
            <div className="world-thumb wow fadeInUp" data-wow-duration="1200">
              <img src={img2} alt="img" />
            </div>
          </div>
          <div className="row g-3 justify-content-between">
            <div className="col-lg-5">
              <p
                className="pra fs-seven mb-xl-4 mb-md-3 mb-2 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                {p1}
              </p>
            </div>
            <div className="col-lg-5">
              <p
                className="pra fs-seven mb-xl-4 mb-md-3 mb-2 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                {p2}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section-version2 fix section-padding">
        <div className="container">
          <div className=" mb-60">
            <h3
              className="fw-bold  mb-xxl-3 mb-sm-3 mb-2 text-uppercase"
              data-wow-delay=".3s"
            >
              Frequently Ask Questions
            </h3>
          </div>
          <div className="row g-lg-0 g-4 align-items-center justify-content-lg-between justify-content-center">
            <div className="col-lg-6">
              <div
                className="accordion faq-content border-0 d-flex flex-column gap-xxl-4 gap-3"
                id="accordionExample22"
              >
                {faqs.map((item) => (
                  <div
                    key={item.id}
                    className={`accordion-item wow fadeInUp`}
                    data-wow-delay={item.delay}
                  >
                    <div className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${
                          item.expanded ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded={item.expanded}
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.heading}
                      </button>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          item.expanded ? "show" : ""
                        }`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample22"
                      >
                        <div className="accordion-body">
                          <p className="pra">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-1 d-lg-block d-none">
              <div className="faqs-lines"></div>
            </div>

            <div className="col-lg-5">
              <div
                className="faq-thumb-version2 rounded-3  w-100"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <img
                  src={faqimag}
                  alt="img"
                  className="rounded-3 w-100 "
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Form />
    </>
  );
}

export default Details;
