import SEO from "../Seo/Seo";
import About from "./About";
import Banner from "./Banner";
import Form from "./Form";
import Hero from "./Hero";

import OurService from "./OurService";
import Secondbanner from "./Secondbanner";
import TestiMonial from "./TestiMonial";
import Whychoseus from "./Whychoseus";

function Home() {
  return (
    <>
      <SEO
        title="Top AR VR Development Company in India | Granoopixr"
        description="Explore leading VR companies in India and top AR VR development. Granoopixr is a premier VR development company and augmented reality expert in India"
        keywords="Granoopixr, AR solutions, VR experiences, Mixed Reality, geospatial intelligence, business intelligence, game development, virtual production, immersive technologies, product realization company"
        url="https://granoopixr.com"
        image="https://granoopixr.com/assets/images/og-image.jpg" // Replace with your actual OG image URL
      />
      <Hero />
      <About />
      <Banner />
      <OurService />
      <Secondbanner />
      <Whychoseus />
      <TestiMonial />
      <Form />
    </>
  );
}

export default Home;
