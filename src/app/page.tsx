import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import DoctorProfiles from "@/components/sections/DoctorProfiles";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ClinicExperience from "@/components/sections/ClinicExperience";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import FirstVisit from "@/components/sections/FirstVisit";
import WhyChoose from "@/components/sections/WhyChoose";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import Gallery from "@/components/sections/Gallery";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import MobileBottomBar from "@/components/sections/MobileBottomBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <DoctorProfiles />
        {/* <ServicesGrid /> */}
        <BeforeAfter />
        {/* <ClinicExperience /> */}
        <CredibilityStrip />
        {/* <FirstVisit /> */}
        {/* <WhyChoose /> */}
        <ReviewsCarousel />
        <Gallery />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
