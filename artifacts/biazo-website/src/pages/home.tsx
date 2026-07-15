import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = React.lazy(() => import("@/components/About"));
const Activities = React.lazy(() => import("@/components/Activities"));
const Products = React.lazy(() => import("@/components/Products"));
const Contact = React.lazy(() => import("@/components/Contact"));
const Footer = React.lazy(() => import("@/components/Footer"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32 w-full" />}>
          <About />
          <Activities />
          <Products />
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
