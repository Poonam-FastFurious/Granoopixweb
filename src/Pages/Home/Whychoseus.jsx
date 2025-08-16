import { Link } from "react-router-dom";
import images from "../../Components/Images";

function Whychoseus() {
  return (
    <>
      <section className="space-top space-bottom">
        <div className="section-title text-center mb-60">
          <h6
            className="body-font  mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
            data-wow-delay=".3s"
          >
            Why Choose Us
          </h6>
          <h2 className="black visible-slowly-right fw-bold d-block">
            Benefits of Choosing Us
          </h2>
          <p>
            Granoopixr Reality delivers cutting-edge AR, VR, and MR solutions
            with stunning visuals, real-time adaptability, and tailored
            immersive experiences.
          </p>
        </div>
        <div className="container">
          <div className="row justify-content-center z-index-2 position-relative">
            <div className="col-12">
              <div className="row align-items-md-center">
                <div className="col">
                  <div
                    className="col-sm-12 col-lg-12 wow fadeInUp custom-card"
                    data-wow-delay="200ms"
                    style={{
                      position: "relative",
                      marginBottom: "20px", // Gap between cards vertically
                    }}
                  >
                    <div
                      className="card p-3"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 position-relative me-4">
                          <div className="icon-box">
                            <img
                              src={images.team}
                              alt="Icon"
                              style={{ maxWidth: "60px" }}
                            />
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <h4 className="h5 mb-1 mb-md-3">
                            <Link
                              to="#"
                              style={{
                                color: "#4F0EA4",
                                textDecoration: "none",
                              }}
                            >
                              Team Profesional
                            </Link>
                          </h4>
                          <p className="mb-0" style={{ color: "#4F0EA4" }}>
                            We provide reliable solutions that ensure security
                            and ease, prioritizing your well-being.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-sm-12 col-lg-12 wow fadeInUp custom-card"
                    data-wow-delay="200ms"
                    style={{
                      position: "relative",
                      marginBottom: "20px", // Gap between cards vertically
                      left: "-170px",
                    }}
                  >
                    <div
                      className="card p-3"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 position-relative me-4">
                          <div className="icon-box">
                            <img
                              src={images.advancetech}
                              alt="Icon"
                              style={{ maxWidth: "60px" }}
                            />
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <h4 className="h5 mb-1 mb-md-3">
                            <Link
                              to="#"
                              style={{
                                color: "#4F0EA4",
                                textDecoration: "none",
                              }}
                            >
                              Advanced Technology
                            </Link>
                          </h4>
                          <p className="mb-0" style={{ color: "#4F0EA4" }}>
                            Innovative solutions designed to push boundaries,
                            simplify lives, and shape the future.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-sm-12 col-lg-12 wow fadeInUp custom-card"
                    data-wow-delay="200ms"
                    style={{
                      position: "relative",
                      left: "-250px", // Moves the card container to the left without affecting card size
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      className="card p-3"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 position-relative me-4">
                          <div className="icon-box">
                            <img
                              src={images.variuse}
                              alt="Icon"
                              style={{ maxWidth: "60px" }}
                            />
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <h4 className="h5 mb-1 mb-md-3">
                            <Link
                              to="#"
                              style={{
                                color: "#4F0EA4",
                                textDecoration: "none",
                              }}
                            >
                              Various Services
                            </Link>
                          </h4>
                          <p className="mb-0" style={{ color: "#4F0EA4" }}>
                            We provide tailored solutions designed to meet your
                            unique needs and drive success.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="  image-hidden-on-sm "
                  style={{ position: "absolute", left: "32%", top: "-80px" }}
                >
                  <img
                    src={images.benifitimage}
                    alt="..."
                    className="max-w-full h-auto "
                  />
                </div>

                <div className="col">
                  <div
                    className="col-sm-12 col-lg-12 wow fadeInUp custom-card"
                    data-wow-delay="200ms"
                    style={{
                      position: "relative",
                      marginBottom: "20px", // Gap between cards vertically
                    }}
                  >
                    <div
                      className="card p-3"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 position-relative me-4">
                          <div className="icon-box">
                            <img
                              src={images.saftycomfirt}
                              alt="Icon"
                              style={{ maxWidth: "60px" }}
                            />
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <h4 className="h5 mb-1 mb-md-3">
                            <Link
                              to="#"
                              style={{
                                color: "#4F0EA4",
                                textDecoration: "none",
                              }}
                            >
                              Safety & Comfort
                            </Link>
                          </h4>
                          <p className="mb-0" style={{ color: "#4F0EA4" }}>
                            We provide reliable solutions that ensure security
                            and ease, prioritizing your well-being.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-sm-12 col-lg-12 wow fadeInUp custom-card"
                    data-wow-delay="200ms"
                    style={{
                      position: "relative",
                      marginBottom: "20px", // Gap between cards vertically
                      right: "-170px",
                    }}
                  >
                    <div
                      className="card p-3"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 position-relative me-4">
                          <div className="icon-box">
                            <img
                              src={images.team}
                              alt="Icon"
                              style={{ maxWidth: "60px" }}
                            />
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <h4 className="h5 mb-1 mb-md-3">
                            <Link
                              to="#"
                              style={{
                                color: "#4F0EA4",
                                textDecoration: "none",
                              }}
                            >
                              Professional Service
                            </Link>
                          </h4>
                          <p className="mb-0" style={{ color: "#4F0EA4" }}>
                            We provide expert services with a focus on quality,
                            reliability, and precision.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-sm-12 col-lg-12 wow fadeInUp custom-card"
                    data-wow-delay="200ms"
                    style={{
                      position: "relative",
                      right: "-250px",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      className="card p-3"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 position-relative me-4">
                          <div className="icon-box">
                            <img
                              src={images.flexibl}
                              alt="Icon"
                              style={{ maxWidth: "60px" }}
                            />
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <h4 className="h5 mb-1 mb-md-3">
                            <Link
                              to="#"
                              style={{
                                color: "#4F0EA4",
                                textDecoration: "none",
                              }}
                            >
                              Very Easy & Flexible
                            </Link>
                          </h4>
                          <p className="mb-0" style={{ color: "#4F0EA4" }}>
                            Our solutions are user-friendly and adaptable,
                            designed for your convenience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="why-choose-shape1"></span>
      </section>
    </>
  );
}

export default Whychoseus;
