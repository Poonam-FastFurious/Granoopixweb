/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import images from "../../Components/Images";
import OurService from "../Home/OurService";
import SEO from "./Seo";
import alfa from "../../assets/newimage/alpha.png";
import Faq from "../../Components/Faq";
import Form from "../Home/Form";
import noidaFaqs from "../../Data/FaqNoida.json";

function Noida() {
  return (
    <>
      <SEO
        title="Granoopixr: Top Augmented Reality & Virtual Reality Company in Noida"
        description="Granoopixr is Noida’s top AR & VR development company, crafting immersive Augmented & Virtual Reality solutions tailored for businesses. Contact us for expert AR/VR services."
        keywords="Augmented Reality in Noida, Virtual Reality in Noida, AR VR company in Noida, AR development Noida, VR development Noida, immersive experiences Noida, AR marketing Noida, VR training Noida, AR app developers Noida, VR app developers Noida"
        image="https://granoopixr.com/assets/images/about-og-image.jpg"
        url="https://granoopixr.com/noida"
      />

      <section className="banner-breadcrumbs position-relative space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h3 className="fw-bold black mb-lg-3 mb-2 wow fadeInUp" data-wow-delay="0.4s">
                  Granoopixr: Noida's Leading AR & VR Development Company
                </h3>
                <h5 className="fw-bold mb-3 wow fadeInUp" data-wow-delay="0.45s">
                  Transform Your Vision into Reality with Granoopixr
                </h5>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  At Granoopixr, we're not just building the future; we're making it a reality today. 
                  Based in Noida, we specialize in cutting-edge Augmented Reality (AR) and Virtual 
                  Reality (VR) development. We craft immersive, engaging, and practical solutions 
                  that redefine how businesses connect with their audiences and deliver tangible 
                  value. Whether you seek captivating experiences or robust applications, Granoopixr 
                  is here to elevate your digital presence.
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb">
            <div className="play-thumb w-100 position-relative d-center rounded-3">
              <img src={images.servicebg} alt="img" className="w-100 rounded-2" />
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
                  <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                    Augmented Reality in Noida: Experience Tomorrow, Today
                  </h2>
                  <p className="pra mb-lg-3 mb-2">
                    Looking to revolutionize how your brand interacts with customers? 
                    Granoopixr is your premier Augmented Reality Agency in Noida. 
                    We harness the power of AR to create dynamic and interactive experiences 
                    that seamlessly blend the digital world with physical reality.
                  </p>
                  <p className="pra mb-lg-3 mb-2">
                    Imagine your customers virtually trying on products, exploring interactive 
                    manuals, or engaging with your brand in entirely new ways—all from their smartphones.
                  </p>
                  <ul className="list-style mb-3">
                    <li>• Enhanced Customer Engagement: AR experiences deeply connect users with your brand.</li>
                    <li>• Product Visualization: Customers can see products in their own environment before buying.</li>
                    <li>• Interactive Marketing: Create memorable AR campaigns that stand out from the competition.</li>
                    <li>• Training & Education: Improve learning experiences with immersive AR modules.</li>
                    <li>• Visitor Experience: Add digital layers to physical spaces like museums or real estate properties.</li>
                  </ul>
                  <p className="pra">
                    Granoopixr provides the best AR development services in Noida, helping your 
                    business step into the future. We excel in custom AR app development, AR 
                    marketing solutions, and AR content creation tailored to your unique needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="about-thumbs">
                <div className="thumb-inner">
                  <div className="img-about">
                    <img
                      src={images.aboutarimage}
                      alt="img"
                      className="w-100"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    />
                  </div>
                  <div className="content-count">
                    <div className="count-item">5+</div>
                    <p>Years of <br />Experience</p>
                  </div>
                </div>
                <div className="thumb-inner d-flex">
                  <img
                    src={images.about2}
                    alt="img"
                    className="w-100"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title">
                  <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                    VR Development Company in Noida: Immersive Worlds Await
                  </h2>
                  <p className="pra mb-lg-3 mb-2">
                    Step into new dimensions with Granoopixr, a leading VR Development Company in Noida. 
                    Virtual Reality offers unparalleled opportunities for immersive storytelling, realistic 
                    simulations, and engaging user experiences.
                  </p>
                  <p className="pra mb-lg-3 mb-2">
                    Our VR Development Expertise Includes:
                  </p>
                  <ul className="list-style mb-3">
                    <li>• Custom VR App Development: Tailored applications for various platforms (Meta Quest, HTC Vive, Pico, etc.).</li>
                    <li>• 360-Degree Video Experiences: Engaging panoramic content for marketing, tourism, and entertainment.</li>
                    <li>• VR Training Simulations: Safe, cost-effective, and highly effective training environments for various industries.</li>
                    <li>• Interactive VR Experiences: Deeply engaging applications that provide profound user immersion.</li>
                    <li>• VR Game Development: Creating captivating and immersive gaming experiences.</li>
                  </ul>
                  <p className="pra">
                    As a top VR Development Company in Noida, Granoopixr is committed to pushing the 
                    boundaries of what's possible, delivering high-quality, impactful virtual reality 
                    experiences that leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="black fw-bold mb-xl-4 mb-3 d-block">
                  About Granoopixr: Your Trusted Partner in AR & VR
                </h2>
                <p className="pra mb-2">
                  At Granoopixr, we are a team of passionate innovators dedicated to delivering high-quality, helpful, 
                  and original content in the realm of AR and VR. Our deep experience, proven expertise, established 
                  authority, and unwavering trustworthiness are at the core of everything we do.
                </p>
                <p className="pra">
                  Our team comprises industry specialists with a profound understanding of AR and VR technologies. 
                  We work closely with you to understand your vision and transform it into stunning, realistic digital 
                  experiences. Our extensive portfolio of published works, detailed case studies, and glowing testimonials 
                  from our satisfied clients stand as a testament to our capabilities and reliability.
                </p>
                <p className="pra">
                  We prioritize transparency, integrity, and innovation—making us a trusted AR and VR partner in Noida.
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
              <i className="fa fa-play" style={{ fontSize: "24px", color: "#000" }}></i>
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
                  Ready to Innovate Together?
                </h2>
                <p className="pra mb-2">
                 Granoopixr is your premier Augmented Reality Agency Noida and trusted VR Development Company Noida. Let's discuss how we can bring your visionary projects to life. Contact us today!</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq faqs={noidaFaqs} />
      <Form />
    </>
  );
}

export default Noida;
