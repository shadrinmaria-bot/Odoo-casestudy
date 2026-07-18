import Background from "@/components/Background";
import BadgeIterations from "@/components/BadgeIterations";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import FormDecisions from "@/components/FormDecisions";
import FutureImprovements from "@/components/FutureImprovements";
import Hero from "@/components/Hero";
import Persona from "@/components/Persona";
import Problem from "@/components/Problem";
import Reveal from "@/components/Reveal";
import ReportView from "@/components/ReportView";
import Section from "@/components/Section";
import Solution from "@/components/Solution";
import { designDecisions, featureSections } from "@/lib/content";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Background />
        <Problem />
        <Solution />
        <Persona />

        {featureSections.map((feature) => (
          <FeatureSection key={feature.id} data={feature} />
        ))}

        <Section id="design-decisions" className="bg-black py-28">
          <Reveal className="flex justify-center">
            <h2 className="font-display text-4xl font-bold leading-[1] tracking-[-1.5px] md:text-[60px]">
              {designDecisions.heading}
            </h2>
          </Reveal>
        </Section>

        <BadgeIterations />
        <FormDecisions />
        <ReportView />
        <FutureImprovements />
      </main>
      <Footer />
    </>
  );
}
