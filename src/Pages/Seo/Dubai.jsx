import { Link } from "react-router-dom";
import images from "../../Components/Images";
import OurService from "../Home/OurService";
import SEO from "./Seo";
import alfa from "../../assets/newimage/alpha.png";
import Faq from "../../Components/Faq";
import Form from "../Home/Form";
import datafaq from "../../Data/Faq.json";
function Dubai() {
  return (
    <>
      <SEO
        title="Virtual Reality Development & AR Agency in Dubai"
        description="Granoopixr is a virtual reality development company in Dubai and a top augmented reality agency offering VR and AR solutions across Dubai.."
        keywords="virtual reality Dubai, augmented reality Dubai, augmented reality agency in Dubai, augmented reality developer in Dubai, augmented reality technology in Dubai, augmented reality marketing in Dubai, augmented reality website in Dubai, augmented reality in education in Dubai, virtual reality company in Dubai, ar vr development company in Dubai, virtual reality training in Dubai, virtual reality technology in Dubai, vr development company in Dubai, virtual reality development in Dubai, virtual reality solutions in Dubai, virtual reality development company in Dubai, virtual reality company in Dubai, virtual reality production company in Dubai, Top augmented reality companies in Dubai, Best augmented reality companies in Dubai, augmented reality agency in Dubai, augmented reality solutions in Dubai, Virtual Reality in Dubai, Augmented Reality in Dubai, VR Development Company in Dubai, Best AR Companies in Dubai, VR Training in Dubai, Virtual Reality in Abu Dhabi, Augmented Reality in Abu Dhabi, VR Development in Abu Dhabi, Augmented Reality Studio in Abu Dhabi, Virtual Reality in Sharjah, Augmented Reality in Sharjah, Best VR Companies in Sharjah, AR VR Training in Sharjah"
        image="https://granoopixr.com/assets/images/about-og-image.jpg" // Replace with the actual OG image URL
        url={"https://granoopixr.com/ar-vr-solutions-in-dubai"}
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
                  Revolutionizing Digital Experiences with AR/VR Solutions in
                  Dubai
                </h6>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Granoopixr is a leading AR VR development company in Dubai,
                  specializing in immersive augmented and virtual reality
                  solutions tailored for businesses across various industries.
                  Our expertise in augmented reality technology in Dubai enables
                  brands to create highly engaging and interactive digital
                  experiences that captivate audiences and drive business growth
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
      <OurService />{" "}
      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <p className="pra mb-lg-3 mb-2 ">
                    As a trusted augmented reality agency in Dubai, we provide
                    cutting-edge AR solutions for marketing, education, and real
                    estate. Our AR-driven campaigns enhance customer engagement
                    by integrating interactive storytelling, 3D visualization,
                    and real-time data overlays. Whether you need AR-based
                    product demonstrations, retail experiences, or virtual
                    showrooms, our team delivers state-of-the-art solutions that
                    elevate your brand.
                  </p>
                  <p className="pra mb-lg-3 mb-2 ">
                    In addition, we specialize in virtual reality development in
                    Dubai, offering businesses high-quality VR applications for
                    training, simulation, and entertainment. From immersive VR
                    training programs for employees to hyper-realistic real
                    estate tours, our VR solutions help businesses streamline
                    operations and enhance customer engagement.
                  </p>{" "}
                  <p className="pra mb-lg-3 mb-2 ">
                    As a top virtual reality production company in Dubai, we
                    leverage the latest advancements in VR technology to develop
                    high-performance applications for gaming, healthcare, and
                    corporate training. Our team of expert virtual reality
                    developers in Dubai ensures that each project is tailored to
                    meet specific business needs, delivering seamless and
                    engaging experiences.
                  </p>
                  <p>
                    At Granoopixr, we believe in the power of AR/VR to transform
                    industries and create unparalleled digital experiences.
                    Partner with us to unlock the full potential of augmented
                    and virtual reality in Dubai.
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
      </section>{" "}
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
      <Faq faqs={datafaq} /> <Form />
    </>
  );
}

export default Dubai;
