import images from "../../Components/Images";
import SEO from "../Seo/Seo";
import IndustryDetails from "./IndustryDetails";

function Education() {
  return (
    <>
     <SEO
        title="Augmented Reality in Education India | VR Training Solutions"
        description="Transform learning with AR VR education solutions in India. We provide virtual reality training modules, augmented reality classrooms, and immersive learning experiences for schools and universities"
        keywords="Granoopixr, AR solutions, VR experiences, Mixed Reality, geospatial intelligence, business intelligence, game development, virtual production, immersive technologies, product realization company"
        url="https://granoopixr.com/industry/education"
        image="https://granoopixr.com/assets/images/og-image.jpg" // Replace with your actual OG image URL
      />
      <IndustryDetails
        paragraph="Enjoy the limitless learning possibilities with VR.
Discover, engage, and explore new concepts in immersive virtual environments"
        Heading="Education"
        heading1="Revolutionizing Education Through Virtual Reality"
        heading2="Revolutionizing Classrooms with Interactive and Engaging Technologies"
        image={images.Education}
        thumbimage={images.Education2}
        industricontent2={
          "AR (Augmented Reality), VR (Virtual Reality), and MR (Mixed Reality) are transforming education by offering immersive and interactive learning experiences. These technologies allow students to explore complex concepts in ways that traditional methods can't match. For example, AR can overlay digital information onto physical objects, making learning more engaging by providing additional context and visualization. VR, on the other hand, can fully immerse students in virtual environments, allowing them to explore historical sites, conduct virtual science experiments, or visit far-off places, all within the classroom. MR blends both physical and virtual elements, offering an even more dynamic learning experience"
        }
      />
    </>
  );
}

export default Education;
