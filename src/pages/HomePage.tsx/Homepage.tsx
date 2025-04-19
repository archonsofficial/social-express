import HomeHero from "./HomeHero";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import FaqSection from "./FaqSection";

function Homepage() {
  return (
    <div>
      <HomeHero />
      <FeaturesSection />
      <HowItWorks />
      <FaqSection />
    </div>
  );
}

export default Homepage;
