import { useEffect } from "react";

import SEO from "../Seo/Seo";

import { useParams } from "react-router-dom";
import useBlogStore from "../../Store/useBlogStore";

const BlogDetail = () => {
  const { link } = useParams();
  const { blogDetails, fetchBlogDetail } = useBlogStore();
  console.log(link, "url");

  useEffect(() => {
    const load = async () => {
      await fetchBlogDetail(link);
    };
    load();
  }, [link, fetchBlogDetail]);

  const blog = blogDetails[link];

  return (
    <>
      <SEO
        url={`https://granoopixr.com/${link}`}
        title={blog?.metaTitle}
        keywords={blog?.metakeywords}
        description={blog?.metaDescription}
      />
      <section className="banner-breadcrumbs breadcrumb-blog-details position-relative space-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs-content text-center"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details-section fix space-bottom">
        <div className="container">
          <div className="row g-4">
            {/* Tags on left */}
            {/* Blog Content Right of Tags */}
            <div className="col-lg-8">
              <div className="blog-details-left">
                {blog?.sections.map((section, index) => {
                  const delay = 0.2 + index * 0.1;

                  if (section.type === "title") {
                    return (
                      <div
                        key={section._id}
                        className="mb-60 wow fadeInUp"
                        data-wow-delay={`${delay}s`}
                      >
                        <h1 className="pra fs-four mb-xl-4 mb-3 black mb-4 fw_700">
                          {section.content}
                        </h1>
                      </div>
                    );
                  }

                  if (section.type === "paragraph") {
                    return (
                      <div
                        key={section._id}
                        className="mb-60 wow fadeInUp"
                        data-wow-delay={`${delay}s`}
                      >
                        <p
                          className="pra fs-seven blog-content"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        ></p>
                      </div>
                    );
                  }

                  if (section.type === "list") {
                    return (
                      <div
                        key={section._id}
                        className="mb-60 wow fadeInUp"
                        data-wow-delay={`${delay}s`}
                      >
                        <h3 className="black fw_700">{section.title}</h3>
                        {section.paragraph && (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: section.paragraph,
                            }}
                          ></p>
                        )}
                        <ul>
                          {section.content.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  if (section.type === "image") {
                    const images = Array.isArray(section.content)
                      ? section.content
                      : [section.content];

                    return (
                      <div
                        key={section._id}
                        className="mb-60 wow fadeInUp"
                        data-wow-delay={`${delay}s`}
                      >
                        <div className="d-flex gap-lg-4 gap-md-3 gap-2 mt-4">
                          {images.map((img, i) => (
                            <div className="blog-straght-thumb w-100" key={i}>
                              <img
                                src={img}
                                alt={`image-${i}`}
                                className="rounded-3 w-100"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}

                {blog?.ending && (
                  <p
                    className="fs-seven pra mb-60 wow fadeInUp"
                    data-wow-delay="0.4s"
                    dangerouslySetInnerHTML={{ __html: blog.ending }}
                  ></p>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-right-area">
                <div
                  className="blog-details-space section-bg rounded-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h4 className="black mb-4 fw_700">Categories</h4>
                  <ul className="blog-category">
                    <li>
                      <a href="javascript:void(0)">Technology</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Business</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Innovation</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Education</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Healthcare</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="blog-details-space section-bg rounded-3 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <h4 className="black mb-4 fw_700">Tags</h4>
                  <ul className="blog-tags">
                    <li>
                      <a href="javascript:void(0)">AR</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Immersive Tech</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Smart Glasses</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Tech Tools</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
