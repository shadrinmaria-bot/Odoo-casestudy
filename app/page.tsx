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

        <Section id="design-decisions" className="bg-black py-20 md:py-24">
          <Reveal className="flex justify-center">
            <h2 className="text-left font-display text-3xl font-bold tracking-tight md:text-5xl">
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
