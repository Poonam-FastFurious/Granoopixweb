import images from "../../Components/Images";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
function TestiMonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const testimonials = [
    {
      text: " The mixed reality solutions provided were beyond impressive. They transformed our training programs, making them immersive and interactive. Employees now learn faster and retain more knowledge. This service is a must for any forward-thinking organization!",
      name: "Rahul Raj",
      title: "Web developer",
    },
    {
      text: "Incorporating VR and AR into our business operations was a game-changer, and this service made it effortless. Their expertise and attention to detail ensured our project exceeded expectations. The results speak for themselves: increased engagement ",
      name: "Ankit",
      title: "Customer",
    },
    {
      text: " Working with them on our VR project was a fantastic experience. Their creativity and technical skills brought our vision to life. The final product was not only cutting-edge but also user-friendly. Highly recommended for any AR, VR, or MR needs!",
      name: "Harshit",
      title: "Customer",
    },
  ];
  
  return (
    <>
      <section className="testimonial-section position-relative fix space-top ">
        <div className="container  space-bottom ">
          <div className="section-title-area align-items-end mb-60">
            <div className="section-title">
              <h6
                className="body-font white-sub-badge left-sub-maintain white mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                data-wow-delay=".3s"
              >
                Testimonial
              </h6>
              <h2 className="white  fw-bold d-block">
                Our Reality, Through Your Eyes
              </h2>
            </div>
            <div className="array-button wow fadeInUp" data-wow-delay=".5s">
              <button className="array-prev">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="array-next active">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
           
            autoplay={{ delay: 7000 }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              320: { slidesPerView: 1 },
            }}
            className=" testimonial-slider"
          >
            <div className=" space-bottom">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="swiper-slide">
                    <div className="testimonial-items">
                      <div className="testimonial-content">
                        <p>{testimonial.text}</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="cont">
                            <h5 className="black">{testimonial.name}</h5>
                            <span className="pra fs-seven">Customer</span>
                          </div>
                          <svg
                            width="49"
                            height="41"
                            viewBox="0 0 49 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5787 12.0281C23.5787 10.4656 23.2819 8.99683 22.6881 7.62183C22.0631 6.24683 21.2428 5.0437 20.2272 4.01245C19.2115 2.9812 18.0006 2.1687 16.5944 1.57495C15.2194 0.949951 13.7506 0.637451 12.1881 0.637451C10.6256 0.637451 9.15686 0.949951 7.78186 1.57495C6.37561 2.1687 5.15686 2.9812 4.12561 4.01245C3.09436 5.0437 2.28186 6.24683 1.68811 7.62183C1.09436 8.99683 0.797485 10.4656 0.797485 12.0281C0.797485 13.6218 1.09436 15.1062 1.68811 16.4812C2.28186 17.8562 3.09436 19.0593 4.12561 20.0906C5.15686 21.1218 6.35999 21.9343 7.73499 22.5281C9.14124 23.1218 10.6256 23.4187 12.1881 23.4187C12.5631 23.4187 12.9381 23.4031 13.3131 23.3718C13.6881 23.3406 14.0787 23.2781 14.485 23.1843C14.1412 24.6843 13.7194 26.1062 13.2194 27.45C12.7506 28.7937 12.2506 30.0437 11.7194 31.2C11.1881 32.3562 10.6569 33.4187 10.1256 34.3875C9.59436 35.325 9.14124 36.1375 8.76624 36.825C8.54749 37.1687 8.35999 37.489 8.20374 37.7859C8.04749 38.0828 7.90686 38.3406 7.78186 38.5593C7.68811 38.7468 7.59436 39.0203 7.50061 39.3796C7.40686 39.739 7.51624 40.0437 7.82874 40.2937C7.92249 40.3875 8.02405 40.4578 8.13342 40.5046C8.2428 40.5515 8.35999 40.575 8.48499 40.575C8.70374 40.575 8.94592 40.5046 9.21155 40.364C9.47717 40.2234 9.71936 40.075 9.93811 39.9187C10.2506 39.7312 10.6412 39.4734 11.11 39.1453C11.5787 38.8171 12.1881 38.3718 12.9381 37.8093L12.985 37.7625C14.3287 36.575 15.5475 35.2859 16.6412 33.8953C17.735 32.5046 18.7037 31.0437 19.5475 29.5125C20.235 28.2625 20.8365 26.9578 21.3522 25.5984C21.8678 24.239 22.2975 22.8406 22.6412 21.4031C23.2037 19.0906 23.5084 17.0828 23.5553 15.3796C23.6022 13.6765 23.61 12.5593 23.5787 12.0281ZM20.9537 20.9812C20.5787 22.5125 20.11 23.9968 19.5475 25.4343C18.985 26.8406 18.3287 28.1921 17.5787 29.489C16.8287 30.7859 15.9694 32.0125 15.0006 33.1687C14.0631 34.325 13.0319 35.4031 11.9069 36.4031C11.7194 36.5593 11.485 36.739 11.2037 36.9421C10.9225 37.1453 10.6256 37.3562 10.3131 37.575C10.7506 36.7937 11.2662 35.8718 11.86 34.8093C12.4225 33.7468 13.0006 32.5593 13.5944 31.2468C14.1881 29.9343 14.735 28.5125 15.235 26.9812C15.7662 25.45 16.1725 23.825 16.4537 22.1062L16.6881 20.6531L15.3287 21.1687C14.7975 21.325 14.274 21.45 13.7584 21.5437C13.2428 21.6375 12.7194 21.6843 12.1881 21.6843C10.8756 21.6843 9.62561 21.4343 8.43811 20.9343C7.28186 20.4343 6.26624 19.7468 5.39124 18.8718C4.51624 17.9968 3.82874 16.9656 3.32874 15.7781C2.82874 14.6218 2.57874 13.3718 2.57874 12.0281C2.57874 10.7156 2.82874 9.46558 3.32874 8.27808C3.82874 7.12183 4.51624 6.1062 5.39124 5.2312C6.26624 4.3562 7.28186 3.6687 8.43811 3.1687C9.59436 2.6687 10.8444 2.4187 12.1881 2.4187C13.5006 2.4187 14.7506 2.6687 15.9381 3.1687C17.0944 3.6687 18.11 4.3562 18.985 5.2312C19.86 6.1062 20.5475 7.12183 21.0475 8.27808C21.5787 9.43433 21.8444 10.6843 21.8444 12.0281V12.075C21.8444 12.1062 21.8444 12.1218 21.8444 12.1218C21.8444 12.1218 21.8444 12.1375 21.8444 12.1687C21.8756 12.6375 21.8678 13.6765 21.8209 15.2859C21.774 16.8953 21.485 18.7937 20.9537 20.9812ZM48.5631 12.075C48.5631 10.4812 48.2662 8.99683 47.6725 7.62183C47.0787 6.24683 46.2662 5.0437 45.235 4.01245C44.2037 2.9812 43.0006 2.1687 41.6256 1.57495C40.2194 0.981201 38.735 0.684326 37.1725 0.684326C35.61 0.684326 34.1412 0.981201 32.7662 1.57495C31.3912 2.1687 30.1881 2.9812 29.1569 4.01245C28.1256 5.0437 27.3131 6.24683 26.7194 7.62183C26.1256 8.99683 25.8287 10.4656 25.8287 12.0281C25.8287 13.6218 26.1256 15.1062 26.7194 16.4812C27.3131 17.8562 28.1256 19.0593 29.1569 20.0906C30.1881 21.1218 31.3912 21.9343 32.7662 22.5281C34.1412 23.1218 35.61 23.4187 37.1725 23.4187C37.5475 23.4187 37.9303 23.4031 38.3209 23.3718C38.7116 23.3406 39.0944 23.2781 39.4694 23.1843C39.1256 24.6843 38.7194 26.1062 38.2506 27.45C37.7506 28.7937 37.235 30.0437 36.7037 31.2C36.1725 32.3562 35.6412 33.4031 35.11 34.3406C34.61 35.3093 34.1569 36.1375 33.7506 36.825C33.5319 37.1687 33.3444 37.4812 33.1881 37.7625C33.0319 38.0437 32.9069 38.2937 32.8131 38.5125C32.7194 38.7312 32.6178 39.0203 32.5084 39.3796C32.399 39.739 32.5006 40.0437 32.8131 40.2937C32.9069 40.3875 33.0084 40.4578 33.1178 40.5046C33.2272 40.5515 33.3444 40.575 33.4694 40.575C33.7194 40.575 33.9694 40.5046 34.2194 40.364C34.4694 40.2234 34.7194 40.075 34.9694 39.9187C35.2819 39.7312 35.6647 39.4734 36.1178 39.1453C36.5709 38.8171 37.1881 38.3718 37.9694 37.8093L38.0162 37.7625C39.3287 36.575 40.5319 35.2859 41.6256 33.8953C42.7194 32.5046 43.6881 31.0437 44.5319 29.5125C45.2194 28.2625 45.8209 26.9578 46.3366 25.5984C46.8522 24.239 47.2819 22.8406 47.6256 21.4031C48.1881 19.0906 48.4928 17.0828 48.5397 15.3796C48.5866 13.6765 48.5944 12.575 48.5631 12.075ZM45.9381 20.9812C45.5944 22.5437 45.1256 24.0281 44.5319 25.4343C43.9694 26.8406 43.3131 28.1921 42.5631 29.489C41.8131 30.7859 40.9694 32.0125 40.0319 33.1687C39.0631 34.325 38.0162 35.4187 36.8912 36.45C36.7037 36.575 36.4694 36.739 36.1881 36.9421C35.9069 37.1453 35.61 37.3562 35.2975 37.575C35.735 36.825 36.2506 35.9031 36.8444 34.8093C37.4381 33.7468 38.0241 32.5593 38.6022 31.2468C39.1803 29.9343 39.7194 28.5125 40.2194 26.9812C40.7506 25.45 41.1569 23.8406 41.4381 22.1531L41.7194 20.7L40.3131 21.1687C39.8131 21.325 39.2975 21.45 38.7662 21.5437C38.235 21.6375 37.7037 21.6843 37.1725 21.6843C35.86 21.6843 34.6256 21.4343 33.4694 20.9343C32.2819 20.4343 31.2506 19.7468 30.3756 18.8718C29.5006 17.9968 28.8131 16.9656 28.3131 15.7781C27.8131 14.6218 27.5631 13.3718 27.5631 12.0281C27.5631 10.7156 27.8131 9.46558 28.3131 8.27808C28.8131 7.12183 29.5006 6.1062 30.3756 5.2312C31.2506 4.3562 32.2662 3.6687 33.4225 3.1687C34.61 2.6687 35.86 2.4187 37.1725 2.4187C38.5162 2.4187 39.7662 2.6687 40.9225 3.1687C42.11 3.6687 43.1412 4.3562 44.0162 5.2312C44.8912 6.1062 45.5787 7.12183 46.0787 8.27808C46.5787 9.46558 46.8287 10.7156 46.8287 12.0281V12.1218C46.8287 12.1218 46.8287 12.1296 46.8287 12.1453C46.8287 12.1609 46.8287 12.1687 46.8287 12.1687C46.86 12.6375 46.8522 13.6765 46.8053 15.2859C46.7584 16.8953 46.4694 18.7937 45.9381 20.9812Z"
                              fill="#DB0091"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="swiper-dot text-center">
              <div className="dot"></div>
            </div>
          </Swiper>
        </div>

        <img
          src={images.testimonialelement}
          alt="img"
          className="testimonial-dot-shape space-top"
        />
      </section>
    </>
  );
}

export default TestiMonial;
