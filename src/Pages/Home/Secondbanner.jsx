import { Link } from "react-router-dom";


function Secondbanner() {
  return (
    <>
      {/* <div
        className="partner-section fix space-top space-bottom  "
        style={{
          backgroundImage: `url('${images.bannerbg2}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container ">
          <div className="partnert-get-wrapper space-bottom space-top  rounded-4 text-center">
            <div>
              <h6
                className="body-font white mb-xxl-4 mb-sm-3 mb-3 text-uppercase wow fadeInUp"
                data-wow-delay=".3s"
              >
                Lorem ipsum dolor sit amet consectetur.
              </h6>
              <h2 className=" visible-slowly-bottom fw-bold d-block mb-40">
                Explore, Learn, and Play in a New Dimension
              </h2>
              <p className=" container-md body-font white mb-xxl-4 mb-sm-3 mb-3">
                We use cutting-edge VR, AR, and MR technologies to create
                immersive, interactive experiences that transform how you engage
                with the world.
              </p>
              <Link
                to="/aboutus"
                className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p2-bg rounded-2"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="partner-section fix space-top">
        <div className="container">
          <div className="partnert-get-wrapper space-bottom space-top rounded-3 text-center">
            <div className="section-title">
              <h6
                className="body-font white-sub-badge white mb-xxl-4 mb-sm-3 mb-3 text-uppercase wow fadeInUp"
                data-wow-delay=".3s"
              >
                GET STARTED
              </h6>
              <h2 className="white visible-slowly-bottom fw-bold d-block mb-40">
                Discover the possibilities of virtual reality for your business.
              </h2>
              <Link
                to="/contact"
                className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p2-bg rounded-2"
              >
                Contact With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secondbanner;
