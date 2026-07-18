import Background from "@/components/Background";
import DesignDecisions from "@/components/DesignDecisions";
import FeatureOverview from "@/components/FeatureOverview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Persona from "@/components/Persona";
import Problem from "@/components/Problem";
import RootCauses from "@/components/RootCauses";
import Showcase from "@/components/Showcase";
import Solution from "@/components/Solution";
import StatCallout from "@/components/StatCallout";
import {
  badgeDecisions,
  formDecisions,
  reportViewDecisions,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Background />
        <Problem />
        <Solution />
        <StatCallout />
        <RootCauses />
        <Persona />
        <FeatureOverview />
        <Showcase
          id="design-badge"
          kicker={badgeDecisions.kicker}
          heading={badgeDecisions.heading}
          intro={badgeDecisions.intro}
          images={badgeDecisions.images}
          points={badgeDecisions.points}
          alt
          mediaFirst
        />
        <Showcase
          id="design-form"
          kicker={formDecisions.kicker}
          heading={formDecisions.heading}
          intro={formDecisions.intro}
          images={formDecisions.images}
          points={formDecisions.points}
          mediaFirst={false}
        />
        <DesignDecisions
          id="design-report-view"
          kicker={reportViewDecisions.kicker}
          heading={reportViewDecisions.heading}
          intro={reportViewDecisions.intro}
          comparisons={reportViewDecisions.comparisons}
          futureNote={reportViewDecisions.futureNote}
          alt
        />
      </main>
      <Footer />
    </>
  );
}
