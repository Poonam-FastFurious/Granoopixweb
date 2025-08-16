import { Link } from "react-router-dom";
import images from "../../Components/Images";

function Banner() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#574B90", borderTopRightRadius: "100px" }}
      >
        <div
          className="container-xl text-white "
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="fw-bold">
                Awesome experiences with
                <br /> virtual reality world
              </h2>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <div
                  className="bg-dark rounded shadow"
                  style={{
                    width: "400px",
                    height: "300px",
                    backgroundImage: `url('${images.banner1}')`,
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="play-button">
                      <Link
                        to="https://www.youtube.com/watch?v=GwjDoe1zaSY"
                        className="video-style  rounded-circle d-center video-popup"
                      >
                        <i
                          className="fa fa-play"
                          aria-label="Learn more about Granoopixr service throw our video Play Video "
                          style={{ fontSize: "24px", color: "#000" }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
