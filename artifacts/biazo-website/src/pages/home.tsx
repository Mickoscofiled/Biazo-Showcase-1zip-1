import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = React.lazy(() => import("@/components/About"));
const Mission = React.lazy(() => import("@/components/Mission"));
const Activities = React.lazy(() => import("@/components/Activities"));
const Products = React.lazy(() => import("@/components/Products"));
const OurBrands = React.lazy(() => import("@/components/OurBrands"));
const GeologicalCatalogue = React.lazy(() => import("@/components/GeologicalCatalogue"));
const PipesSteelCatalogue = React.lazy(() => import("@/components/PipesSteelCatalogue"));
const Statistics = React.lazy(() => import("@/components/Statistics"));
const Contact = React.lazy(() => import("@/components/Contact"));
const Footer = React.lazy(() => import("@/components/Footer"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32 w-full" />}>
          <About />
          <Mission />
          <Activities />
          <Products />
          <OurBrands />
          <GeologicalCatalogue />
          <PipesSteelCatalogue />
          <Statistics />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}
