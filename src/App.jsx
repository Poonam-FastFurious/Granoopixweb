import vrbanner from "./assets/newimage/vrbanner.gif";
import mixbanner from "./assets/newimage/mixbanner.jpeg";
import vrbigimage from "./assets/newimage/vrbigimage.jpeg";
import mixbigimage from "./assets/newimage/mixbigimage.jpeg";
import arbigimage from "./assets/newimage/arbigimage.jpeg";
import "./App.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/all.min.css";
import "../src/assets/css/animate.css";
import "../src/assets/css/magnific-popup.css";
import "../src/assets/css/meanmenu.css";
import "../src/assets/css/swiper-bundle.min.css";
import "../src/assets/css/nice-select.css";
import "../src/assets/css/main.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import TopHeader from "./Components/TopHeader";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurServices from "./Pages/Services/OurServices";
import ContactUs from "./Pages/Contactus/ContactUs";
import Details from "./Pages/ServiceDetail/Details";
import Blogpage from "./Pages/Blogs/Blogpage";
import Faqpage from "./Pages/Faqpage/Faqpage";
import Privacy from "./Components/Privacy";
import TermasAndCondition from "./Components/TermasAndCondition";
import images from "./Components/Images";

import Entertainment from "./Pages/Industry/Entertainment";
import RealState from "./Pages/Industry/RealState";
import Education from "./Pages/Industry/Education";
import Medical from "./Pages/Industry/Medical";
import Automobile from "./Pages/Industry/Automobile";
import Travels from "./Pages/Industry/Travels";
import Banking from "./Pages/Industry/Banking";
import faqs from "./Data/Faq.json";
import Error404 from "./Pages/Errorpage/Error404";
import Blogsdetail from "./Pages/Blogs/Blogsdetail";
import BlogDetails2 from "./Pages/Blogs/BlogDetails2";
import BlogDetails3 from "./Pages/Blogs/BlogDetails3";
import BlogDetails4 from "./Pages/Blogs/BlogDetails4";
import Blogdetail5 from "./Pages/Blogs/Blogdetail5";
import BlogDetails6 from "./Pages/Blogs/BlogDetails6";
import Usa from "./Pages/Seo/Usa";
import Dubai from "./Pages/Seo/Dubai";
import BlogDetails7 from "./Pages/Blogs/Blogdetails7";
import BlogDetails8 from "./Pages/Blogs/Blogdetail8";
import BlogDetail from "./Pages/Blogs/BlogDetail";
import useBlogStore from "./Store/useBlogStore";
import { useEffect } from "react";
import Noida from "./Pages/Seo/Noida";
import Delhi from "./Pages/Seo/Delhi";
import Mumbai from "./Pages/Seo/Mumbai";
import Hyderabad from "./Pages/Seo/Hyderabad";
import Gurugram from "./Pages/Seo/Gurugram";
import Chennai from "./Pages/Seo/Chennai";
import Bangalore from "./Pages/Seo/Bangalore";

function App() {
  const fetchBlogList = useBlogStore((state) => state.fetchBlogList);

  useEffect(() => {
    fetchBlogList();
  }, [fetchBlogList]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopHeader />
                <Header />
                <div className="main-content">
                  <Outlet />
                </div>

                <Footer />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/service" element={<OurServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/Faq" element={<Faqpage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route
              path="/term-and-conditions"
              element={<TermasAndCondition />}
            />
            <Route path="/industry/entertainment" element={<Entertainment />} />
            <Route path="/industry/realestate" element={<RealState />} />
            <Route path="/industry/education" element={<Education />} />
            <Route path="/industry/medical" element={<Medical />} />
            <Route path="/industry/automobile" element={<Automobile />} />
            <Route path="/industry/travel" element={<Travels />} />
            <Route path="/industry/ecomerce" element={<Banking />} />
            <Route path="/blogs" element={<Blogpage />} />
            <Route path="/:link" element={<BlogDetail />} />
            <Route
              path="/blogs/AR-Rewriting-the-Rules-of-Marketing"
              element={<Blogsdetail />}
            />
            <Route
              path="/blogs/What-Is-A-VR-Solutions-Company"
              element={<BlogDetails2 />}
            />
            <Route
              path="/blogs/Future-Of-Augmented-Reality-In-Healthcare"
              element={<BlogDetails3 />}
            />
            <Route
              path="/blogs/How-AR-And-VR-Are-Shaping-The-Future-of-Learning"
              element={<BlogDetails4 />}
            />
            <Route
              path="/blogs/Understanding-Augmented-Reality"
              element={<Blogdetail5 />}
            />
            <Route
              path="/blogs/The-Rise-of-AR/VR-Services-in-India"
              element={<BlogDetails6 />}
            />{" "}
            <Route
              path="/blogs/how-augmented-reality-is-revolutionizing-customer-experience"
              element={<BlogDetails7 />}
            />
            <Route
              path="/blogs/what-equipment-do-you-need-for-ar"
              element={<BlogDetails8 />}
            />
            <Route
              path="/virtual-reality"
              element={
                <Details
                  metatitle={
                    "Granoopixr-Virtual Reality Development Company In India"
                  }
                  canonical={"https://granoopixr.com/virtual-reality"}
                  metakeywords={
                    "virtual reality fashion, virtual reality business, virtual reality technology, virtual reality in healthcare, virtual reality production companies, virtual reality companies, virtual reality games, virtual reality website, virtual reality world, virtual and augmented reality, virtual reality and augmented reality, vr, and augmented reality"
                  }
                  metadescription={
                    "Granoopixr – Virtual Reality Development Company in India offering top-tier VR production and custom immersive experiences for modern businesses"
                  }
                  faqs={faqs.slice(10, 15)}
                  paragraph2={
                    "Enjoy the limitless entertainment possibilities with VR"
                  }
                  formimages={images.vrimages}
                  img2={vrbigimage}
                  p2={
                    "VR offers immersive experiences that address challenges across education, healthcare, training, architecture, design, entertainment, accessibility, and collaboration. It opens new ways of engaging with the world and unlocks previously unimaginable possibilities.The future of VR is bright, with rapid advancements and broader adoption. Key developments to expect include:Wider adoption Enhanced hardware Expansion into new markets Integration with emerging technologiesVR has the potential to revolutionize industries and transform how we interact with technology"
                  }
                  p1={
                    "Virtual Reality (VR) is a computer-generated simulation that offers users an immersive, interactive experience within a three-dimensional environment. It typically involves the use of specialized devices like headsets and handheld controllers, creating a sense of presence and interactivity. The virtual environment can be designed to replicate a range of experiences, such as gaming, training simulations, or virtual tours. Users can navigate and interact with the environment as if it were real, with the system responding dynamically to their actions."
                  }
                  t2={
                    "Enjoy the limitless entertainment possibilities with VR. Witness, play, and explore new words"
                  }
                  extraParagraphs={
                    "We bring your ideas to life with our complete, custom solutions. Our expert team of developers specializes in creating immersive, interactive VR experiences that not only engage but also captivate users. From transforming construction projects to enhancing education and training programs, we are dedicated to helping you build a VR app that is perfectly aligned with your specific needs and goals, ensuring impactful results every step of the way."
                  }
                  description={
                    "From Your imagination to an entire universe, experience the magic of VR"
                  }
                  title={"Virtual Reality"}
                  imageSrc={vrbanner}
                />
              }
            />
            <Route
              path="/augumented-reality"
              element={
                <Details
                  canonical={"https://granoopixr.com/augumented-reality"}
                  metatitle={
                    " Granoopixr | India’s Best Augmented Reality Agency for Smart AR Solutions"
                  }
                  metadescription={
                    "Looking for the best augmented reality agency in India? Granoopixr offers expert AR development services and immersive AR solutions for businesses across India."
                  }
                  metakeywords={
                    "augmented reality agency, augmented reality developer, augmented reality technology, augmented reality marketing, augmented reality website, augmented reality in education, augmented reality builder, augmented reality in healthcare, augmented reality experience, virtual and augmented reality, virtual augmented reality, augmented reality studio, virtual reality world, augmented reality solutions, augmented reality mobile app"
                  }
                  faqs={faqs.slice(0, 5)}
                  paragraph2={`Enjoy the limitless entertainment possibilities with AR 
                `}
                  img2={arbigimage}
                  title={"Augmented Reality"}
                  imageSrc={vrbanner}
                  description={
                    "Transform how you work, learn, and play with our immersive AR solutions tailored for every need."
                  }
                  extraParagraphs={
                    "Whether you're looking to boost customer engagement, streamline operations, or create immersive learning experiences, our team of expert AR developers is equipped with the latest tools and technologies to bring your vision to life. We specialize in crafting innovative AR solutions tailored to your needs, enhancing user experiences and driving business success."
                  }
                  t2={
                    "Use augmented reality for an interactive brand experience in your marketing campaign, product launch or during events."
                  }
                  p1={
                    "Incorporate AR into your campaigns to elevate your communication and add a new dimension to your messaging. Enhance traditional media with dynamic digital content during loyalty programs, product promotions, or print campaigns.Leverage interactive features like filters, games, and personalized content to create a unique brand experience with high engagement and share ability. Broaden your reach by using AR across web platforms, social media, or through your own app."
                  }
                  p2={
                    "Augmented Reality is a technology that overlays digital content onto the real world, creating a mixed reality experience.It can be experienced through AR apps on mobile devices or through specialized AR headsets.Augmented Reality can transform brand experiences by offering interactive features, allowing customers to visualize products in 3D, and enhancing traditional media with digital elements.This approach can reduce sales barriers, increase conversion rates, and minimize product returns."
                  }
                  formimages={images.arimages}
                />
              }
            />
            <Route
              path="/mixed-reality"
              element={
                <Details
                  metatitle={
                    "Best Mixed Reality Solutions in India | AR VR Development"
                  }
                  metadescription={
                    "Experience the future with mixed reality solutions by Granoopixr. We blend augmented reality and virtual reality technologies to create immersive applications for education, healthcare, and business.."
                  }
                  metakeywords={
                    "Mixed Reality solutions, Mixed Reality technology, Mixed Reality for business, Industrial Mixed Reality, Mixed Reality in healthcare, Mixed Reality applications, Cost-effective Mixed Reality, Mixed Reality companies, Mixed Reality development, MR for training and simulation, Mixed Reality gaming, Immersive Mixed Reality, MR in education, Mixed Reality innovations, Mixed Reality experiences, MR in manufacturing, Mixed Reality tools, MR for remote collaboration, Next-gen Mixed Reality, Mixed Reality in entertainment"
                  }
                  canonical={"https://granoopixr.com/mixed-reality"}
                  faqs={faqs.slice(5, 10)}
                  paragraph2={
                    "Enjoy the limitless entertainment possibilities with MR"
                  }
                  formimages={images.miximages}
                  extraParagraphs={
                    "Mixed Reality (MR) is a unique blend of the digital and physical worlds, creating an interactive and immersive environment around you. It can be seen as an advanced version of AR, offering a deeper sense of immersion by seamlessly integrating digital elements into the real world."
                  }
                  title={"Mixed Reality"}
                  imageSrc={mixbanner}
                  description={
                    "From your imagination to reality, experience the magic of MR as the digital world comes to life around you."
                  }
                  p1={
                    "Mixed Reality (MR) allows users to visualize virtual elements within their physical environment, creating an immersive, interactive, and intelligent hybrid space. This seamless integration provides context-sensitive information in real-time, enhancing the user's experience while keeping them connected to the real world.For instance, in an MR environment, a virtual 3D ball thrown in front of the user could realistically collide with a physical wall, bounce back, fall with gravity, and roll along the floor toward the user."
                  }
                  p2={
                    "Mixed Reality (MR) is a cutting-edge technology that blends the physical and virtual worlds, creating a hybrid environment where real and digital elements interact in real-time.Unlike Augmented Reality (AR), which overlays digital content on the real world, and Virtual Reality (VR), which immerses users in a fully virtual environment, MR combines both, allowing users to engage with both physical and virtual elements simultaneously.MR offers a more immersive experience than AR and a more interactive one than VR. It is ideal for various applications, including education, entertainment, business, healthcare, and industrial training, providing a unique way to interact with the world."
                  }
                  img2={mixbigimage}
                />
              }
            />
            {/* seo pages  */}
            <Route path="/ar-vr-servises-in-usa" element={<Usa />} />
            <Route path="/ar-vr-solutions-in-dubai" element={<Dubai />} />
            <Route path="/noida" element={<Noida />} />
            <Route path="/gurugram" element={<Gurugram />} />
            <Route path="/chennai" element={<Chennai />} />
            <Route path="/bangalore" element={<Bangalore />} />
            <Route path="/delhi" element={<Delhi />} />
            <Route path="/mumbai" element={<Mumbai />} />
            <Route path="/hyderabad" element={<Hyderabad />} />
          </Route>
          <Route path="/*" element={<Error404 />} status={404} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
