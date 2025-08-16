import IndustryDetails from "./IndustryDetails";
import realstateimage from "../../assets/img/realstate.jpg";
import images from "../../Components/Images";
import SEO from "../Seo/Seo";
function RealState() {
  return (
    <>
    <SEO
        title="Virtual Reality for Real Estate in India | AR VR Property Tours"
        description="Enhance real estate marketing with virtual reality property tours and augmented reality home visualization. Offer immersive 3D walkthroughs and interactive property showcases."
        keywords="Granoopixr, AR solutions, VR experiences, Mixed Reality, geospatial intelligence, business intelligence, game development, virtual production, immersive technologies, product realization company"
        url="https://granoopixr.com/industry/realestate"
        image="https://granoopixr.com/assets/images/og-image.jpg" // Replace with your actual OG image URL
      />
      <IndustryDetails
        image={realstateimage}
        thumbimage={images.realstate}
        Heading="Real-Estate"
        paragraph="Experience limitless possibilities in real estate with VR. Explore, visualize, and interact with properties like never before."
        heading1="Unlock New Opportunities for Property Visualization and Sales with Innovative Solutions"
        heading2="Transforming Property Viewing with AR/VR"
        industricontent2={
          "Rising inflation and physical distance have made it harder for customers to make purchasing decisions. However, the real estate sector is experiencing a significant transformation, driven by tech-enabled virtual proximity through AR and VR."
        }
        industricontent3={
          "These technologies are revolutionizing the industry by providing interactive, intuitive experiences and opening up new opportunities for real estate businesses. Granoopixr leads the way with tailored, real estate-specific solutions, specializing in augmented reality (AR), geospatial mapping, and real-time data integration."
        }
        industricontent4={
          "Our AR/VR solutions help real estate companies enhance property visualization, drive sales, and engage buyers more effectively. From immersive virtual tours and property visualizations to demographic insights and advanced market analysis, we’re transforming the real estate experience. Connect with Granoopixr to unlock a world of endless possibilities in the real estate market."
        }
      />
    </>
  );
}

export default RealState;
