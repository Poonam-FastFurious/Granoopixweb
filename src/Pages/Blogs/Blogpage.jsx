import { Link } from "react-router-dom";
import contactbanner from "../../assets/newimage/contactbanner.jpeg";
import contactbanner1 from "../../assets/img/blog/Blog4list.jpg";
import contactbanner5 from "../../assets/img/blog/Blog5-2.jpg";
import contactbanner6 from "../../assets/img/blog/blog6514.jpg";
import contactbanner7 from "../../assets/img/blog/blog7.jpg";
import contactbanner8 from "../../assets/img/blog/blog8.avif";
import images from "../../Components/Images";
import SEO from "../Seo/Seo";

import { useEffect } from "react";
import useBlogStore from "../../Store/useBlogStore";
function Blogpage() {
  const { blogList, fetchBlogList } = useBlogStore();

  useEffect(() => {
    fetchBlogList();
  }, [fetchBlogList]);

  if (!blogList)
    return <div className="text-center py-10">Blog not found.</div>;

  return (
    <>
      <SEO
        url={"https://granoopixr.com/blogs"}
        title={
          " Latest AR VR Trends in India | Virtual & Augmented Reality Insights"
        }
        keywords={
          "Mixed Reality solutions, Mixed Reality technology, Mixed Reality for business, Industrial Mixed Reality, Mixed Reality in healthcare, Mixed Reality applications, Cost-effective Mixed Reality, Mixed Reality companies, Mixed Reality development, MR for training and simulation, Mixed Reality gaming, Immersive Mixed Reality, MR in education, Mixed Reality innovations, Mixed Reality experiences, MR in manufacturing, Mixed Reality tools, MR for remote collaboration, Next-gen Mixed Reality, Mixed Reality in entertainment"
        }
        description={
          " Stay updated with the latest in augmented reality marketing, VR training, and AR development. Explore industry trends and innovations from the top AR VR development company in India"
        }
      />
      <section className="banner-breadcrumbs position-relative space-top">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2
                  className="fw-bold black mb-lg-3 mb-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  News & Blog
                </h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Enjoy the limitless entertainment possibilities with VR.
                  Witness, play, and explore new worlds
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb">
            <img src={contactbanner} alt="img" className="w-100 rounded-3" />
          </div>
        </div>
      </section>
      <section className="inside-blog-main fix space-bottom pt-lg-0 ">
        <div className="container space-top">
          <div className="row g-4 mb-lg-5 mb-4">
            <div className="blog-grid">
              {blogList.map((blog) => {
                const title =
                  blog.sections.find((sec) => sec.type === "title")?.content ||
                  "Untitled";

                const images = blog.sections
                  .filter((sec) => sec.type === "image")
                  .flatMap((sec) => sec.content);
                const firstImage =
                  images.length > 0
                    ? images[0]
                    : "https://via.placeholder.com/300x200";

                return (
                  <div key={blog._id} className="blog-grid-item">
                    <div className="blog-card">
                      <Link to={`/${blog?.link}`}>
                        <img
                          src={firstImage}
                          alt={title}
                          className="blog-card-image"
                        />
                      </Link>
                      <div className="blog-card-content">
                        <p className="blog-card-meta">
                          Granoopixr /
                          {new Date(blog.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                        <h3 className="blog-card-title">
                          <Link to={`/${blog?.link}`}>{title}</Link>
                        </h3>
                        <Link to={`/${blog?.link}`} className="blog-card-arrow">
                          →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link
                  to="/blogs/how-augmented-reality-is-revolutionizing-customer-experience"
                  className="news-image image-box-effect position-relative overflow-hidden"
                >
                  <img src={contactbanner7} alt="img" className="w-100 img" />
                  <img src={contactbanner7} alt="img" className="w-100 img" />
                  <img src={contactbanner7} alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">
                    Granoopixr / 23 April 2025
                  </span>
                  <h4 className="black">
                    <Link
                      to="/blogs/how-augmented-reality-is-revolutionizing-customer-experience"
                      className="text-white visible-slowly-right"
                    >
                      How Augmented Reality Is Revolutionizing Customer
                      Experience
                    </Link>
                  </h4>
                  <Link to="#" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link
                  to="/blogs/what-equipment-do-you-need-for-ar"
                  className="news-image image-box-effect position-relative overflow-hidden"
                >
                  <img src={contactbanner8} alt="img" className="w-100 img" />
                  <img src={contactbanner8} alt="img" className="w-100 img" />
                  <img src={contactbanner8} alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">
                    Granoopixr / 23 April 2025
                  </span>
                  <h4 className="black">
                    <Link
                      to="/blogs/what-equipment-do-you-need-for-ar"
                      className="text-white visible-slowly-right"
                    >
                      What Equipment Do You Need for AR?
                    </Link>
                  </h4>
                  <Link to="#" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link
                  to="/blogs/Understanding-Augmented-Reality"
                  className="news-image image-box-effect position-relative overflow-hidden"
                >
                  <img src={contactbanner5} alt="img" className="w-100 img" />
                  <img src={contactbanner5} alt="img" className="w-100 img" />
                  <img src={contactbanner5} alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">
                    Granoopixr / Mar 2025
                  </span>
                  <h4 className="black">
                    <Link
                      to="/blogs/Understanding-Augmented-Reality"
                      className="text-white visible-slowly-right"
                    >
                      Understanding Augmented Reality (AR)
                    </Link>
                  </h4>
                  <Link to="#" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link
                  to="/blogs/The-Rise-of-AR/VR-Services-in-India"
                  className="news-image image-box-effect position-relative overflow-hidden"
                >
                  <img src={contactbanner6} alt="img" className="w-100 img" />
                  <img src={contactbanner6} alt="img" className="w-100 img" />
                  <img src={contactbanner6} alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">
                    Granoopixr / 17 Mar 2025
                  </span>
                  <h4 className="black">
                    <Link
                      to="/blogs/The-Rise-of-AR/VR-Services-in-India"
                      className="text-white visible-slowly-right"
                    >
                      The Rise of AR/VR Services in India: A Game-Changer for
                      Businesses
                    </Link>
                  </h4>
                  <Link to="#" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link
                  to="/blogs/What-Is-A-VR-Solutions-Company"
                  className="news-image image-box-effect position-relative overflow-hidden"
                >
                  <img src={images.blog2} alt="img" className="w-100 img" />
                  <img src={images.blog2} alt="img" className="w-100 img" />
                  <img src={images.blog2} alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">
                    Granoopixr / feb 19, 2025
                  </span>
                  <h4 className="black">
                    <Link
                      to="/blogs/What-Is-A-VR-Solutions-Company"
                      className="text-white visible-slowly-right"
                    >
                      What is a VR Solutions Company, and how does it work?
                    </Link>
                  </h4>
                  <Link to="#" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link
                  to="/blogs/Future-Of-Augmented-Reality-In-Healthcare"
                  className="news-image image-box-effect position-relative overflow-hidden"
                >
                  <img src={images.blog3} alt="img" className="w-100 img" />
                  <img src={images.blog3} alt="img" className="w-100 img" />
                  <img src={images.blog3} alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">
                    Granoopixr / Feb 19, 2025
                  </span>
                  <h4 className="black">
                    <Link
                      to="/blogs/Future-Of-Augmented-Reality-In-Healthcare"
                      className="text-white visible-slowly-right"
                    >
                      The Future of Augmented Reality in Healthcare: New
                      Potentials for Innovation
                    </Link>
                  </h4>
                  <Link to="#" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link
                  to="/blogs/How-AR-And-VR-Are-Shaping-The-Future-of-Learning"
                  className="news-image image-box-effect position-relative overflow-hidden"
                >
                  <img src={contactbanner1} alt="img" className="w-100 img" />
                  <img src={contactbanner1} alt="img" className="w-100 img" />
                  <img src={contactbanner1} alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">
                    Granoopixr / Feb 2025
                  </span>
                  <h4 className="black">
                    <Link
                      to="/blogs/How-AR-And-VR-Are-Shaping-The-Future-of-Learning"
                      className="text-white visible-slowly-right"
                    >
                      How AR & VR Are Shaping the Future of Learning (Not Just
                      Education)
                    </Link>
                  </h4>
                  <Link to="#" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link
                  to="/blogs/AR-Rewriting-the-Rules-of-Marketing"
                  className="news-image image-box-effect position-relative overflow-hidden"
                >
                  <img src={images.blog1} alt="img" className="w-100 img" />
                  <img src={images.blog1} alt="img" className="w-100 img" />
                  <img src={images.blog1} alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">
                    Granoopixr - Feb 5, 2025
                  </span>
                  <h4 className="black">
                    <Link
                      to="/blogs/AR-Rewriting-the-Rules-of-Marketing"
                      className=" text-white visible-slowly-right"
                    >
                      Augmented Reality in 2025: How AR is Rewriting the Rules
                      of Marketing
                    </Link>
                  </h4>
                  <Link to="#" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogpage;
