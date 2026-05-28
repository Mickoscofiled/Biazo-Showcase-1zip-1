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
  { name: "Geological", href: "#geological" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#06122a]/95 backdrop-blur-md shadow-lg shadow-blue-950/50 border-b border-blue-900/40"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="relative flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-white/20 blur-md group-hover:bg-white/30 transition-all duration-300 scale-110" />
                <div className="relative bg-white rounded-xl p-1.5 shadow-xl shadow-blue-900/50 border border-white/30">
                  <img
                    src={logoPath}
                    alt="Biazo International Logo"
                    data-testid="img-navbar-logo"
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-blue-100 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              data-testid="link-get-in-touch"
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 hover:scale-105"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-blue-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
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
          className="md:hidden bg-[#06122a]/98 border-t border-blue-900/40"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-blue-100 py-2 border-b border-blue-900/30 hover:text-white transition-colors"
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
