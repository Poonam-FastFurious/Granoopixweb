import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import video from "../../assets/newimage/welcomevideo.webm";
function Hero() {
  return (
    <>
      <section className="banner-section position-relative  ">
        <Swiper
          slidesPerView={1}
          autoplay={false}
          navigation={{
            nextEl: ".array-next",
            prevEl: ".array-prev",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          modules={[Navigation, Pagination, Autoplay, A11y]}
          className="swiper-wrapper"
        >
          <SwiperSlide className="">
            <div className="banner-inner-item hero-video">
              <video
                autoPlay
                muted
                loop
                className="background-video"
                loading="lazy"
                preload="metadata"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <noscript>
                <img
                  src={`${video}`}
                  alt="Banner Background"
                  style={{ display: "none" }}
                />
              </noscript>
              <div className="container z-1 position-relative">
                <div className="banner-content">
                  <span className=" fs-five fw_500 body-font mb-xl-4 mb-3 d-block">
                    Mix Reality
                  </span>
                  <h1 className="white fw_700 mb-xl-4 mb-3">
                    We Bring Your Ideas to Life with Immersive <br />
                    Experiences
                  </h1>
                  <p className="white fs-six mb-40">
                    Transforming businesses with innovative experiences, we use
                    advanced tech to deliver results. Among top augmented
                    reality and virtual reality companies in India, we create
                    impactful digital solutions.
                  </p>
                  <div className="banner-video d-flex flex-sm-nowrap flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 mb-60 position-relative">
                    <Link
                      to="/contact"
                      className="common-btn box-style  d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2"
                    >
                      Discover More
                    </Link>
                    <div className="d-flex align-items-center gap-3">
                      <Link
                        target="_blank"
                        to="https://www.youtube.com/watch?v=9PcHjRqotgI"
                        className="video-style p2-bg rounded-circle d-center video-popup"
                        aria-label="Learn more about Granoopixr service throw our video Play Video "
                      >
                        <i className="fa-solid fa-play fs-six"></i>
                      </Link>
                      <span className="white fw_600 sub-font">Play Video</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="banner-inner-item hero-images2">
              <div className="container z-1 position-relative">
                <div className="banner-content">
                  <span className="p2-clr fs-five fw_500 body-font mb-xl-4 mb-3 d-block">
                    Mix Reality
                  </span>
                  <h1 className="white fw_700 mb-xl-4 mb-3">
                    Where Reality Ends and Imagination Begins
                  </h1>
                  <p className="white fs-six mb-40">
                    Transforming businesses with innovative experiences, we use
                    advanced tech to deliver results. Among top augmented
                    reality and virtual reality companies in India, we create
                    impactful digital solutions.
                  </p>
                  <div className="banner-video d-flex flex-sm-nowrap flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 mb-60 position-relative">
                    <Link
                      to="/contact"
                      className="common-btn  d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2"
                    >
                      Discover More
                    </Link>
                    <div className="d-flex align-items-center gap-3">
                      <Link
                        to="https://www.youtube.com/watch?v=nV_hd6bLXmw"
                        className="video-style p2-bg rounded-circle d-center video-popup"
                      >
                        <i className="fa-solid fa-play fs-six"></i>
                      </Link>
                      <span className="white fw_600 sub-font">Play Video</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="banner-inner-item hero-images1">
              <div className="container z-1 position-relative">
                <div className="banner-content">
                  <span className="p2-clr fs-five fw_500 body-font mb-xl-4 mb-3 d-block">
                    Mix Reality
                  </span>
                  <h1 className="white fw_700 mb-xl-4 mb-3">
                    Get Transported to New Worlds Through VR
                  </h1>
                  <p className="white fs-six mb-40">
                    Transforming businesses with innovative experiences, we use
                    advanced tech to deliver results. Among top augmented
                    reality and virtual reality companies in India, we create
                    impactful digital solutions.
                  </p>
                  <div className="banner-video d-flex flex-sm-nowrap flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 mb-60 position-relative">
                    <Link
                      to="/contact"
                      className="common-btn  d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2"
                    >
                      Discover More
                    </Link>
                    <div className="d-flex align-items-center gap-3">
                      <Link
                        to="https://www.youtube.com/watch?v=nV_hd6bLXmw"
                        className="video-style p2-bg rounded-circle d-center video-popup"
                      >
                        <i className="fa-solid fa-play fs-six"></i>
                      </Link>
                      <span className="white fw_600 sub-font">Play Video</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="banner-controller">
          <div className="swiper-dot text-center">
            <div className="dot"></div>
          </div>
          <div className="line"></div>
          <div className="array-button d-flex gap-lg-3 gap-2">
            <button className="array-prev">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="array-next active">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
