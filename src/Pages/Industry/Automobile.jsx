import images from "../../Components/Images";
import SEO from "../Seo/Seo";
import IndustryDetails from "./IndustryDetails";

function Automobile() {
  return (
    <div>
      <SEO
        title="AR VR Solutions for Automobile Industry in India | VR Training"
        description="Revolutionize automotive experiences with virtual reality training and AR solutions for the automobile industry. From VR driving simulations to AR car customization, we help brands innovate."
        keywords="Granoopixr, AR solutions, VR experiences, Mixed Reality, geospatial intelligence, business intelligence, game development, virtual production, immersive technologies, product realization company"
        url="https://granoopixr.com/industry/automobile"
        image="https://granoopixr.com/assets/images/og-image.jpg" // Replace with your actual OG image URL
      />
      <IndustryDetails
        Heading="Automobile"
        paragraph="Experience limitless possibilities in automotive training with VR
 Simulate, repair, and explore real-world scenarios safely and effectively"
        heading1="Transform Your Automotive Workforce with Virtual reality"
        heading2="Enhancing Workforce Skills in the Automotive Industry with Virtual Reality"
        image={images.automobile}
        thumbimage={images.automobile2}
        industricontent2={
          "Human error causes 80-90% of accidents in the automobile industry, leading to loss of life, property damage, and significant financial losses. Unplanned downtime, often due to improper maintenance, costs billions annually."
        }
        industricontent3={
          "To stay competitive, automobile companies need a skilled workforce. Since 70% of skills are learned through hands-on experience, AR (Augmented Reality) and VR (Virtual Reality) offer an innovative solution. These immersive technologies provide safe, interactive training, helping workers gain critical skills without the risks of traditional methods."
        }
        industricontent4={
          "At Granoopixr, we offer AR/VR training solutions designed for the automotive industry. By simulating real-world scenarios, we help reduce errors, downtime, and maintenance costs while enhancing workforce efficiency. Explore how our AR/VR solutions can transform your training processes and drive success!"
        }
      />
    </div>
  );
}

export default Automobile;
