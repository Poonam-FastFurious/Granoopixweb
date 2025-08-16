import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import images from "../../Components/Images";

const data = [
  {
    icon: `${images.ontime}`,
    heading: "On-Time Delivery",
    content:
      "Our commitment to client satisfaction is unwavering, and we strive to deliver all projects on schedule. We maintain open communication with our clients, providing regular updates on project progress to foster strong and productive relationships.",
  },
  {
    icon: `${images.recard}`,
    heading: "Proven Track Record",
    content:
      "Our track record of success speaks for itself; we have a history of providing advanced services that meet the highest quality standards, delivered on time and within budget. Our past performance gives our clients the assurance that their projects will be executed efficiently and effectively.",
  },
  {
    icon: `${images.constantsuport}`,
    heading: "Constant Support",
    content:
      "We don't just deliver and move on; once the project is complete, we continue to provide support and assistance. We understand that business processes are constantly evolving, and we are committed to being there for our clients every step of the way.",
  },
  {
    icon: `${images.tranceparancy}`,
    heading: "Transparency",
    content:
      "We firmly believe in the importance of open and transparent communication; this is why we operate fully transparently to ensure our clients' success.",
  },
  {
    icon: `${images.extensiveexp}`,
    heading: "Extensive Experience",
    content:
      "With a wealth of experience and expertise garnered from serving clients globally, we are well-equipped to deliver customized solutions that address the unique needs of your business.",
  },
  {
    icon: `${images.aproche}`,
    heading: "Client-Centric Approach",
    content:
      "At our core, we prioritize our clients' success by guiding them toward becoming high-performing businesses. We strive to build solid and lasting relationships through our commitment to being responsive and consistently providing value.",
  },
  {
    icon: `${images.multidomain}`,
    heading: "Multi-Domain Experience",
    content:
      "Having been in the industry for a significant duration now, our team members have credible experience in tackling multiple domains and futuristic technologies which can provide the impact modern businesses need.",
  },
  {
    icon: `${images.Agileaproche}`,
    heading: "Agile Approach",
    content:
      "We offer a flexible and adaptive approach to development and various business models that cater to worldwide businesses of all types and sizes. Our goal is to make digital transformation affordable and efficient for our clients by providing shorter turnaround times at cost-effective rates.",
  },
];
function Crausal() {
  return (
    <section className="team-section fix section-padding position-relative section-bg">
      <div className="container">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".array-next",
            prevEl: ".array-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {/* Slide 1 */}
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="pricing-items fixed-card  border">
                <div className="choose-item text-center">
                  <div className="icon  d-center">
                    <img
                      src={item.icon}
                      style={{
                        filter: "brightness(0) invert(1)",
                        height: "55px",
                        width: "55px",
                      }}
                      alt="Modern Feature Icon"
                    />
                  </div>
                  <h4 className="black">
                    <Link to="#" className="black">
                      {item.heading}
                    </Link>
                  </h4>
                  <span>{item.content}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="banner-controller">
          <div className="swiper-dot text-center">
            <div className="dot"></div>
          </div>
          <div className="line"></div>
          <div className="array-buttons d-flex gap-lg-3 gap-8 container">
            <button className="array-prev">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="array-next active">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crausal;
