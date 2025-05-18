
import Hero from "../components/Hero";

import AboutUs from "../components/Aboutus";
import Mah from "../components/Mah";
import Logos from "../components/Logos";
import EcoOverview from "../components/EcoOverview";


 function LandingPage() {
  return (
    <div>
    <Hero/>
    <AboutUs />
    <EcoOverview />
    <Mah />
    <Logos />
    </div>
  )
}

export default LandingPage;