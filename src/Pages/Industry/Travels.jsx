import images from "../../Components/Images";
import SEO from "../Seo/Seo";
import IndustryDetails from "./IndustryDetails";

function Travels() {
  return (
    <div>
      <SEO
        title="Augmented Reality for Travel | Virtual Reality Tourism Solutions"
        description="Upgrade travel experiences with AR VR tourism solutions. We provide virtual reality travel guides, immersive destination previews, and augmented reality navigation for the tourism industry."
        keywords="Granoopixr, AR solutions, VR experiences, Mixed Reality, geospatial intelligence, business intelligence, game development, virtual production, immersive technologies, product realization company"
        url="https://granoopixr.com/industry/travel"
        image="https://granoopixr.com/assets/images/og-image.jpg" // Replace with your actual OG image URL
      />
      <IndustryDetails
        Heading="Travel and Tourism"
        paragraph="Experience limitless possibilities in travel and tourism with VR. Explore destinations, immerse in virtual tours, and plan your next adventure from anywhere"
        heading1="Transforming Tourism with AR/VR: Enhance City Tours, Sightseeing, and Hotel Stays"
        heading2="Discover new destinations with AR/VR, offering interactive, immersive experiences that elevate guest engagement and create unforgettable moments in tourism"
        image={images.travels2}
        thumbimage={images.travels}
        industricontent2={
          "Granoopixr is transforming the tourism and hospitality industry by turning regular travel experiences into extraordinary ones"
        }
        industricontent3={
          "Our AR and VR solutions enhance city tours, sightseeing, and hotel stays through immersive digital layers that offer historical insights, cultural context, and engaging multimedia content."
        }
        industricontent4={
          "Innovative applications like the AR City Guide or Festival App with AR menus boost visitor engagement, allowing travelers to explore attractions with 3D models, animations, and real-time navigation. These customized AR/VR experiences leave a lasting impact, enabling hospitality businesses to attract and retain guests in exciting and innovative ways"
        }
      />
    </div>
  );
}

export default Travels;
