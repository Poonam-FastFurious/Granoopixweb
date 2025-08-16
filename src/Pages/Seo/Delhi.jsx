/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import images from "../../Components/Images";
import OurService from "../Home/OurService";
import SEO from "./Seo";
import alfa from "../../assets/newimage/alpha.png";
import Form from "../Home/Form";

function Delhi() {
  return (
    <>
      <SEO
        title="Delhi's Top AR/VR Development | Granoopixr"
        description="Granoopixr is Delhi's best VR company & a leader in AR VR development. Get cutting-edge Virtual & Augmented Reality solutions today!"
        keywords="AR company in Delhi, VR company in Delhi, Virtual Reality services Delhi, Augmented Reality developers, immersive tech Delhi, VR training Delhi, AR marketing solutions Delhi"
        image="https://granoopixr.com/assets/images/about-og-image.jpg"
        url="https://granoopixr.com/delhi"
      />

      <section className="banner-breadcrumbs position-relative space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-8">
              <div className="breadcrumbs-content text-center">
                <h3
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Granoopixr: Pioneering Virtual & Augmented Reality in Delhi
                </h3>
                <h6
                  className="fw-bold mb-3 wow fadeInUp"
                  data-wow-delay="0.45s"
                >
                  Experience Tomorrow, Today: Leading VR & AR Innovation
                </h6>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Welcome to Granoopixr, Delhi's premier destination for
                  cutting-edge Virtual Reality (VR) and Augmented Reality (AR)
                  solutions. We're a top VR/AR development company dedicated to
                  transforming how businesses and individuals interact with
                  technology. At Granoopixr, we don't just build experiences; we
                  craft immersive realities that drive engagement, foster
                  understanding, and unlock new possibilities.
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

      <section className="about-section p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  Why Choose Granoopixr for Your Immersive Needs?
                </h2>
                <h4 className="fw-bold mb-3">
                  Unmatched Expertise and Experience
                </h4>
                <p className="pra mb-3">
                  At Granoopixr, our team comprises highly skilled and
                  experienced developers, designers, and strategists passionate
                  about VR and AR development. Our collective experience spans
                  numerous successful projects across diverse industries, from
                  education and healthcare to real estate and entertainment.
                </p>
                <p className="pra mb-3">
                  We pride ourselves on our deep understanding of the latest
                  immersive technologies, ensuring that every solution we
                  deliver is at the forefront of innovation. Our commitment to
                  excellence is reflected in our robust portfolio and the
                  testimonials of our satisfied clients.
                </p>

                <h4 className="fw-bold mb-3">Authority and Trustworthiness</h4>
                <p className="pra mb-3">
                  Granoopixr has established itself as a trusted name among
                  leading AR and VR companies. We actively contribute to the
                  AR/VR community through thought leadership articles,
                  participation in industry events, and collaborations with
                  academic institutions.
                </p>
                <p className="pra mb-3">
                  Our published case studies and whitepapers demonstrate our
                  expertise and the tangible results we deliver. We believe in
                  complete transparency and building long-term relationships
                  based on trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section p-5">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
           
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title">
                  <h2 className="black fw-bold mb-3">
                    Comprehensive VR & AR Solutions
                  </h2>
                  <ul className="list-style mb-3">
                    <li>
                      • <strong>Custom VR Application Development:</strong> From
                      immersive training simulations to captivating virtual
                      tours, we build bespoke VR experiences that transport your
                      audience.
                    </li>
                    <li>
                      • <strong>Augmented Reality App Development:</strong>{" "}
                      Enhance real-world interactions with engaging AR
                      applications for marketing, education, and entertainment.
                    </li>
                    <li>
                      • <strong>3D Modeling and Animation:</strong>{" "}
                      High-fidelity 3D assets are crucial for compelling VR/AR
                      experiences, and our artists excel at bringing your
                      visions to life.
                    </li>
                    <li>
                      • <strong>Consultation and Strategy:</strong> Not sure
                      where to start? Our experts provide strategic guidance to
                      help you identify the best immersive solutions for your
                      business.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-3">
                  The Granoopixr Difference: Delivering Information Gain
                </h2>
                <p className="pra mb-3">
                  Unlike generic providers, Granoopixr focuses on delivering
                  information gain through our solutions. We don't just create
                  pretty visuals; we design experiences that provide genuine
                  value and deeper understanding.
                </p>
                <p className="pra mb-3">
                  For example, our VR training simulations for medical
                  professionals offer a safe and realistic environment to
                  practice complex procedures, leading to improved skills and
                  better patient outcomes.
                </p>
                <p className="pra">
                  Our AR applications for retail allow customers to visualize
                  products in their own space, providing invaluable information
                  before purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-3">
                  Our Process: Collaborative and Transparent
                </h2>
                <ul className="list-style mb-3">
                  <li>
                    • <strong>Discovery & Planning:</strong> Understanding your
                    vision, goals, and target audience.
                  </li>
                  <li>
                    • <strong>Design & Prototyping:</strong> Crafting intuitive
                    user interfaces and immersive experiences.
                  </li>
                  <li>
                    • <strong>Development & Iteration:</strong> Building and
                    refining the solution with your feedback.
                  </li>
                  <li>
                    • <strong>Testing & Deployment:</strong> Rigorous testing to
                    ensure flawless performance.
                  </li>
                  <li>
                    • <strong>Support & Maintenance:</strong> Ongoing support to
                    keep your applications optimal.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section p-5">
        <div className="container text-center">
          <div className="section-title">
            <h2 className="black fw-bold mb-3">
              Explore the Future with Granoopixr
            </h2>
            <p className="pra mb-3">
              Ready to leverage the power of Virtual Reality and Augmented
              Reality? Contact Granoopixr today to discuss your project.
            </p>
            <p className="pra fw-bold">
              Let us help you create groundbreaking immersive experiences that
              set you apart.
            </p>
            <Link to="/contact" className="btn btn-primary mt-3">
              Get a Free Consultation Now!
            </Link>
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

      <Form />
    </>
  );
}

export default Delhi;
