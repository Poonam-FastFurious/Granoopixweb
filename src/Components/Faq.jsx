/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import faqimag from "../assets/newimage/faqs.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Faq({ faqs }) {
  const [openId, setOpenId] = useState(null);
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Run animation only once
    });
  }, []);
  return (
    <div>
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
                {faqs.slice(0, 5).map((item) => (
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
                        onClick={() =>
                          setOpenId(openId === item.id ? null : item.id)
                        }
                        aria-expanded={openId === item.id}
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.heading}
                      </button>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          openId === item.id ? "show" : ""
                        }`}
                        aria-labelledby={`heading${item.id}`}
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
    </div>
  );
}

export default Faq;
