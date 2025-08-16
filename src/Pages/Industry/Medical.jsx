import images from "../../Components/Images";
import SEO from "../Seo/Seo";
import IndustryDetails from "./IndustryDetails";

function Medical() {
  return (
    <>
    <SEO
        title="Virtual Reality for Medical Training | Augmented Reality Healthcare"
        description="Granoopixr offers virtual reality medical training and augmented reality healthcare solutions in India. Experience VR surgery simulations and AR-assisted diagnostics for hospitals and clinics."
        keywords="Granoopixr, AR solutions, VR experiences, Mixed Reality, geospatial intelligence, business intelligence, game development, virtual production, immersive technologies, product realization company"
        url="https://granoopixr.com/industry/medical"
        image="https://granoopixr.com/assets/images/og-image.jpg" // Replace with your actual OG image URL
      />
      <IndustryDetails
        Heading="Medical"
        paragraph="Improving Healthcare Training and Patient Safety with AR/VR Solutions to Reduce Medical Errors and Enhance Skills"
        heading1="Transforming Healthcare Training with AR/VR Technology"
        heading2="Enjoy the limitless possibilities of medical training with VR.Practice, learn, and explore advanced procedures in immersive virtual environments"
        image={images.medical1}
        thumbimage={images.medical2}
        industricontent2={
          "Medical errors are the third-leading cause of death, with over 250,000 globally. deaths annually. This highlights the critical need for improved training and patient safety. Traditional On-the-Job Training (OJT), which accounts for 70% of skill development, can be expensive and risky. AR (Augmented Reality) and VR (Virtual Reality) technologies offer a solution by providing immersive, hands-on training in a safe environment."
        }
        industricontent3={
          "At Granoopixr, we specialize in AR/VR training solutions for healthcare. Our programs enable medical professionals to practice procedures, diagnose conditions, and respond to emergencies effectively, reducing errors and improving patient safety."
        }
      />
    </>
  );
}

export default Medical;
