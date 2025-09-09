import HeroSection from "../components/landing/HeroSection";
import StatsSection from "../components/landing/StatsSection";
import ServicesSection from "../components/landing/ServicesSection";
import ExpertiseSection from "../components/landing/ExpertiseSection";
import ProcessSection from "../components/landing/ProcessSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ExpertiseSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Landing;
