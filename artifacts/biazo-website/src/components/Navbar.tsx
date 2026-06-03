import { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logoPath from "@assets/biazo-logo-transparent.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Mission", href: "#mission" },
  { name: "Sectors", href: "#sectors" },
  { name: "Products", href: "#products" },
  { name: "Our Brands", href: "#brands" },
  { name: "Geological", href: "#geological" },
  { name: "Pipes & Steel", href: "#pipes-steel" },
  { name: "Get a Quote", href: "#inquiry" },
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
      transition={{ duration: 0.6, ease: "easeOut" as any }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#6495ED]/95 backdrop-blur-lg shadow-xl shadow-[#6495ED]/20 border-b border-[#6495ED]/20"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="relative flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <img
                  src={logoPath}
                  alt="Biazo International Logo"
                  data-testid="img-navbar-logo"
                  className="h-14 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white/80 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20your%20products%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-get-in-touch"
              className="flex items-center gap-2 bg-white hover:bg-slate-50 text-[#6495ED] px-5 py-2.5 rounded-full active:scale-95 active:translate-y-0 text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#6495ED] shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Get in Touch
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
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
          className="lg:hidden bg-white backdrop-blur-xl border-t border-slate-100/60 shadow-xl"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-600 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors"
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
