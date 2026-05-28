import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Activities from "@/components/Activities";
import Products from "@/components/Products";
import GeologicalCatalogue from "@/components/GeologicalCatalogue";
import Statistics from "@/components/Statistics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Activities />
        <Products />
        <GeologicalCatalogue />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
