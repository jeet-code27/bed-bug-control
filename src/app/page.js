import Hero from "@/components/Hero";
import UrgentProblem from "@/components/UrgentProblem";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import QuoteSection from "@/components/QuoteSection";
import ReviewsSlider from "@/components/ReviewsSlider";
import PeaceOfMind from "@/components/PeaceOfMind";
import TreatmentTypes from "@/components/TreatmentTypes";
import InfestationReasons from "@/components/InfestationReasons";
import IndustriesReached from "@/components/IndustriesReached";
import FAQSection from "@/components/FAQSection";
import TopCities from "@/components/TopCities";
import AreasServed from "@/components/AreasServed";


export default function Home() {
  return (
    <>
      <Hero />
      <UrgentProblem />
      <ThreeStepProcess />
      <TreatmentTypes />
      <InfestationReasons />
      <QuoteSection />
      <IndustriesReached />
      <TopCities />
      <AreasServed />
      <FAQSection />
      <ReviewsSlider />
      <PeaceOfMind />
    </>
  );
}
