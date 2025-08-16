import { Link } from "react-router-dom";
import images from "../../Components/Images";
import OurService from "../Home/OurService";
import SEO from "./Seo";
import alfa from "../../assets/newimage/alpha.png";
import Faq from "../../Components/Faq";
import Form from "../Home/Form";
import faqData from "../../Data/Faq.json"
function Usa() {
  return (
    <>
      <SEO
        title="AR VR Development & Virtual Reality Company in USA"
        description="Leading AR VR development company in USA offering advanced virtual reality and augmented reality solutions. Trusted virtual reality company in USA"
        keywords="virtual reality USA, augmented reality USA, augmented reality agency in USA, augmented reality developer in USA, augmented reality technology in USA, augmented reality marketing in USA, augmented reality website in USA, augmented reality in education in USA, virtual reality company in USA, ar vr development company in USA, virtual reality training in USA, virtual reality technology in USA, vr development company in USA, virtual reality development in USA, virtual reality solutions in USA, virtual reality development company in USA, virtual reality company in USA, virtual reality production company in USA, Top augmented reality companies in USA, Best augmented reality companies in USA, augmented reality agency in USA, augmented reality solutions in USA, Virtual Reality in New York, Augmented Reality in New York, Best VR Companies in New York, Top AR Development in New York, AR VR Training in New York, Virtual Reality in Los Angeles, Augmented Reality in Los Angeles, AR VR Development in Los Angeles, Virtual Reality Agency in Los Angeles, Virtual Reality in San Francisco, Augmented Reality in San Francisco, VR Training in San Francisco, Best AR Companies in San Francisco, Virtual Reality in Chicago, Augmented Reality in Chicago, AR VR Development in Chicago, Virtual Reality in Houston, Augmented Reality in Houston, Top VR Companies in Houston"
        image="https://granoopixr.com/assets/images/about-og-image.jpg" // Replace with the actual OG image URL
        url={"https://granoopixr.com/ar-vr-servises-in-usa"}
      />
      <section className="banner-breadcrumbs position-relative space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h6
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Virtual and Augmented Reality in the USA with Granoopixr
                </h6>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  The USA is a global leader in virtual reality (VR) and
                  augmented reality (AR), transforming industries like
                  entertainment, education, healthcare, and marketing.
                  Granoopixr is at the forefront of this innovation, delivering
                  cutting-edge AR and VR solutions to businesses seeking
                  immersive experiences.
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
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h2 className="black  fw-bold mb-xl-4 mb-3 d-block">
                    Virtual Reality USA: Unlocking New Possibilities
                  </h2>
                  <p className="pra mb-lg-3 mb-2 ">
                    Virtual reality is revolutionizing industries with immersive
                    training, simulations, and entertainment. Companies like
                    Granoopixr offer custom VR solutions for corporate training,
                    real estate, and healthcare, enabling users to engage with
                    digital environments in new and impactful ways.
                  </p>
                  <p className="pra mb-lg-3 mb-2 ">
                    Augmented Reality USA: Enhancing Digital Interactions Unlike
                    VR, augmented reality enhances the real world with digital
                    overlays. From AR-powered shopping experiences to
                    interactive marketing campaigns, businesses are leveraging
                    Granoopixr’s AR expertise to engage customers and enhance
                    brand experiences. Expert Augmented Reality Developers in
                    the USA With the growing demand for AR applications,
                    Granoopixr’s skilled developers create interactive AR apps,
                    smart glasses software, and AI-driven AR solutions for
                    various industries. Virtual Reality Solutions by Granoopixr
                    As AR and VR continue to shape the future, Granoopixr
                    provides tailored solutions, helping businesses harness
                    immersive technology to stay ahead in a competitive market.
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
      <Faq faqs={faqData} /> <Form />
    </>
  );
}

export default Usa;
