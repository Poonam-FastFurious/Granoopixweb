/* eslint-disable react/no-unescaped-entities */

import images from "../../Components/Images";

function OurService() {
  return (
    <>
      <section className="team-section fix section-padding position-relative section-bg">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6
              className="body-font  mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
              data-aos-delay="300"
            >
              Our Service
            </h6>
            <h2
              className="black  fw-bold d-block"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Explore Our Services
            </h2>
            <p className="mt-2  container-sm">
              {" "}
              we offer a comprehensive range of AR, VR, and MR solutions
              designed to meet your unique needs and goals. Here's how we bring
              immersive technology to life:
            </p>
          </div>
          <div className="row g-lg-5 g-4 align-items-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div
                className="pricing-items"
                style={{
                  backgroundImage: `url('${images.vrimage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                  borderRadius: "10px",
                  paddingBottom: "0",
                  position: "relative",
                  border: "1px solid white", // Added red border
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "20px",
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: "0px",
                    left: "20px",
                    right: "20px",
                  }}
                >
                  <h5 className="white basic-title">Virtual Reality</h5>

                  <p className="white">
                    Granoopixr Reality, an India-based VR service provider,
                    delivers cutting-edge VR solutions with high definition
                    visuals, real-time .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div
                className="pricing-items"
                style={{
                  backgroundImage: `url('${images.arimage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                  borderRadius: "10px",
                  paddingBottom: "0",
                  position: "relative",
                  border: "1px solid white", // Added red border
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "20px",
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: "0px",
                    left: "20px",
                    right: "20px",
                  }}
                >
                  <h5 className="white basic-title">Augumented Reality</h5>

                  <p className="">
                    Bringing the digital world into the physical, enabling
                    seamless visualization and communication anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div
                className="pricing-items"
                style={{
                  backgroundImage: `url('${images.miximage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                  borderRadius: "10px",
                  paddingBottom: "0",
                  position: "relative",
                  border: '1px solid white', // Added red border
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "20px",
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: "0px",
                    left: "20px",
                    right: "20px",
                  }}
                >
                  <h5 className="white basic-title">Mixed Reality</h5>

                  <p className="white">
                    Grannoopixr Reality provides cost-effective Mixed Reality
                    solutions, enhancing productivity and reducing errors in
                    industrial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurService;
