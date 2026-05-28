import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logoPath from "@assets/WhatsApp_Image_2026-05-28_at_9.07.14_AM_1779994735397.jpeg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Mission", href: "#mission" },
  { name: "Sectors", href: "#sectors" },
  { name: "Products", href: "#products" },
  { name: "Statistics", href: "#statistics" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-slate-900/90" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <img src={logoPath} alt="Biazo International Logo" className="h-12 w-auto object-contain cursor-pointer" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground py-2 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
