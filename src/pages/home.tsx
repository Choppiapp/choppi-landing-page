import React from "react";
import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { HowItWorks } from "../components/how-it-works";
import { AppShowcase } from "../components/app-showcase";
// import { Testimonials } from "../components/testimonials";
// import { Partners } from "../components/partners";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <AppShowcase />
      {/* <Testimonials /> */}
      {/* <Partners /> */}
    </>
  );
};