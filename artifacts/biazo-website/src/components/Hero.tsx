import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Globe2, Shield, Truck, PackageCheck } from "lucide-react";
import logoPath from "@/assets/biazo-logo-transparent.webp";
import fixedLogoPath from "@/assets/biazo-logo-fixed.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  const textContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  };
  const textItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as any } }
  };

  return (
    <section 
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container relative z-10 px-4 lg:px-8 max-w-6xl mx-auto text-center">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-7"
        >
          {/* Logo with glow */}
          <motion.div variants={textItem} className="relative mb-4 flex flex-col items-center w-full">
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as any }}
              style={{ willChange: "opacity" }}
              className="absolute inset-0 rounded-full bg-white/20 blur-3xl scale-150 pointer-events-none"
            />
            <div className="relative flex justify-center mb-2">
              <div className="w-64 md:w-96 h-24 md:h-32 overflow-hidden flex justify-center items-start">
                <div 
                  className="w-full h-80 md:h-[28rem] drop-shadow-[0_0_30px_rgba(135,206,250,0.5)]"
                  style={{
                    backgroundColor: '#87CEFA',
                    WebkitMaskImage: `url(${logoPath})`,
                    maskImage: `url(${logoPath})`,
                    WebkitMaskSize: '100% auto',
                    maskSize: '100% auto',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'top center',
                    maskPosition: 'top center',
                  }}
                />
              </div>
            </div>
            <h2 className="relative text-3xl md:text-5xl font-extrabold text-[#87CEFA] tracking-wide leading-tight drop-shadow-[0_0_20px_rgba(135,206,250,0.4)] text-center" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              Biazo International
            </h2>
            <p className="relative text-xl md:text-3xl text-[#87CEFA]/80 tracking-[0.12em] font-medium -mt-1 text-center" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              General Trading FZ-LLC
            </p>
          </motion.div>

          {/* Status badge */}
          <motion.div
            variants={textItem}
            className="inline-flex items-center gap-2.5 py-2 px-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold tracking-widest uppercase text-xs sm:text-sm shadow-[0_8px_16px_rgba(0,0,0,0.1)] shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Bridging UAE & East Africa
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05]"
          >
            <span className="block text-white drop-shadow-md">Global Trading,</span>
            <span className="block text-cyan-100 drop-shadow-md pb-2">
              Precision Delivered.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={textItem}
            className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium"
          >
            Supplying mining, oil & gas, infrastructure, and industrial projects across East Africa with reliable sourcing, technical expertise, and efficient logistics from our UAE, Uganda, Zimbabwe Hubs
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={textItem} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="#products"
              data-testid="link-explore-products"
              className="group flex items-center gap-2 bg-gradient-to-b from-white to-blue-50 text-[#1E90FF] px-8 py-4 rounded-full active:scale-95 font-extrabold text-lg transition-all shadow-[0_10px_25px_rgba(0,0,0,0.2),inset_0_-4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3),inset_0_-4px_10px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              Explore Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              data-testid="link-contact-sales"
              className="flex items-center gap-2 bg-white/20 text-white border border-white/40 hover:bg-white/30 px-8 py-4 rounded-full active:scale-95 font-extrabold text-lg transition-all backdrop-blur-md hover:-translate-y-1 shadow-[0_10px_25px_rgba(0,0,0,0.1),inset_0_2px_10px_rgba(255,255,255,0.2)]"
            >
              Contact Sales
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={textItem}
            className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-white/5"
          >
            {[
              { icon: <Globe2 className="w-5 h-5" />, label: "UAE & Uganda Hubs" },
              { icon: <Shield className="w-5 h-5" />, label: "15+ Years Experience" },
              { icon: <Truck className="w-5 h-5" />, label: "Global Supply Chain" },
              { icon: <PackageCheck className="w-5 h-5" />, label: "500+ Successful Shipments" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5 text-slate-400 text-sm font-medium">
                <div className="text-[#7391D1]">{badge.icon}</div>
                {badge.label}
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div variants={textItem} className="mt-8">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as any }}
            >
              <ChevronDown className="text-white/30 w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
