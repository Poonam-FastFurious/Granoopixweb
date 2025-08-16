/* eslint-disable react/prop-types */

import entertainmentimage from "../../assets/img/entertainment.jpg";
import settingicon from "../../assets/img/icon/settings.png";
import technologyicon from "../../assets/img/icon/technology.png";
import labelsicon from "../../assets/img/icon/settings.png";
import hourssupporticon from "../../assets/img/icon/hours-support.png";
import wordthumb from "../../assets/img/banner/wrold-thumb.jpg";
import Form from "../Home/Form";
function IndustryDetails({
  Heading = "Entertainment",
  paragraph = " Enjoy the limitless entertainment possibilities with VR  Witness, play, and explore new worlds ",
  image = entertainmentimage,
  thumbimage = wordthumb,
  industryconytent,
  industricontent2,
  industricontent4,
  industricontent3,
  heading1 = " From your imagination to an entire universe, experience the magic of VR.",
  heading2,
}) {
  return (
    <>
      <section className="banner-breadcrumbs position-relative space-top white-bg space-bottom">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {Heading}
                </h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  {paragraph}
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb mb-60">
            <img src={image} alt="img" className="w-100 rounded-3" />
          </div>
          <div className="row g-lg-4 g-3 justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <h2 className="black fw_700 visible-slowly-right">{heading1}</h2>
            </div>
            <div className="col-xl-5 col-lg-6">
              <p
                className="pra fs-seven mb-xxl-4 mb-xl-3 mb-2 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                {industryconytent}
              </p>
              <p
                className="pra fs-seven mb-xxl-4 mb-xl-3 mb-2 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {industricontent2}
              </p>
              <p className="pra fs-seven wow fadeInUp" data-wow-delay="0.5s">
                {industricontent3}
                <br />
              </p>
              <p
                className="pra fs-seven mt-xxl-4 mt-xl-3 mt-2 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {industricontent4}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="choose-sections position-relative fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6
              className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
              data-wow-delay=".3s"
            >
              WHY CHOOSE US
            </h6>
            <h2>
              Immersive solutions for <br />
              your business
            </h2>
          </div>
          <div className="choose-wrapper">
            <div className="choose-item text-center">
              <div className="icon black-bg d-center rounded-circle">
                <img src={settingicon} alt="icon" />
              </div>
              <h4 className="black fw-bold visible-slowly-right">
                <a href="service-details.html" className="black">
                  Team Profesional
                </a>
              </h4>
              <p className="pra fs-seven fadeInUp">
                We provide reliable solutions that ensure security and ease,
                prioritizing your well-being.
              </p>
            </div>
            <div className="choose-line"></div>
            <div className="choose-item text-center">
              <div className="icon black-bg d-center rounded-circle">
                <img src={technologyicon} alt="icon" />
              </div>
              <h4 className="black fw-bold visible-slowly-right">
                <a href="service-details.html" className="black">
                  Advanced Technology
                </a>
              </h4>
              <p className="pra fs-seven fadeInUp">
                Innovative solutions designed to push boundaries, simplify
                lives, and shape the future.
              </p>
            </div>
            <div className="choose-line"></div>
            <div className="choose-item text-center">
              <div className="icon black-bg d-center rounded-circle">
                <img src={labelsicon} alt="icon" />
              </div>
              <h4 className="black fw-bold visible-slowly-right">
                <a href="service-details.html" className="black">
                  Professional Service
                </a>
              </h4>
              <p className="pra fs-seven fadeInUp">
                We provide expert services with a focus on quality, reliability,
                and precision.
              </p>
            </div>
            <div className="choose-line"></div>
            <div className="choose-item text-center">
              <div className="icon black-bg d-center rounded-circle">
                <img src={hourssupporticon} alt="icon" />
              </div>
              <h4 className="black fw-bold visible-slowly-right">
                <a href="service-details.html" className="black">
                  24/7 Support
                </a>
              </h4>
              <p className="pra fs-seven fadeInUp">
                There are many variations passages the majority have suffered
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="world-withness fix section-padding white-bg">
        <div className="container">
          <div className="world-content text-center mb-60">
            <h3 className="black fw_700 mb-60 visible-slowly-bottom">
              {heading2}
            </h3>
            <div className="world-thumb wow fadeInUp" data-wow-duration="1200">
              <img src={thumbimage} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <Form />
    </>
  );
}

export default IndustryDetails;
