import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Globe2, Shield, Truck } from "lucide-react";
import logoPath from "@assets/biazo-logo-transparent.png";

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
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-[#1E90FF] text-white">
      {/* Animated gradient mesh over the vibrant blue */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF] via-[#1873cc] to-[#0f4d8a]" />
        
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as any }}
          className="absolute top-[-20%] right-[-15%] w-[800px] h-[800px] rounded-full bg-white/15 blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" as any, delay: 2 }}
          className="absolute bottom-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full bg-[#87CEEB]/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" as any, delay: 4 }}
          className="absolute top-[20%] left-[40%] w-[500px] h-[500px] rounded-full bg-indigo-300/10 blur-[90px]"
        />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <div className="container relative z-10 px-4 lg:px-8 max-w-6xl mx-auto text-center">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-7"
        >
          {/* Logo with glow */}
          <motion.div variants={textItem} className="relative mb-4">
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as any }}
              className="absolute inset-0 rounded-full bg-white/30 blur-3xl scale-150"
            />
            <div className="relative inline-block">
              <img
                src={logoPath}
                alt="Biazo International Logo"
                data-testid="img-hero-logo"
                className="h-28 md:h-40 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] brightness-0 invert"
              />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            variants={textItem}
            className="inline-flex items-center gap-2.5 py-2 px-6 rounded-full bg-black/10 backdrop-blur-md border border-white/20 text-white font-semibold tracking-widest uppercase text-xs sm:text-sm shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Bridging UAE & East Africa
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] drop-shadow-lg"
          >
            <span className="block text-white">Global Trading,</span>
            <span className="block text-white pb-2">
              Precision Delivered.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={textItem}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Biazo International connects markets with essential products across Agriculture, Construction, Mining, Oil & Gas, and Healthcare — delivering value through our dual hubs in the UAE and Uganda.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={textItem} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="#products"
              data-testid="link-explore-products"
              className="group flex items-center gap-2 bg-white text-[#1E90FF] px-8 py-4 rounded-full active:scale-95 font-extrabold text-lg transition-all shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-slate-50"
            >
              Explore Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              data-testid="link-contact-sales"
              className="flex items-center gap-2 bg-black/15 text-white border border-white/30 hover:bg-black/25 hover:border-white/50 px-8 py-4 rounded-full active:scale-95 font-bold text-lg transition-all backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Sales
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={textItem}
            className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-white/20"
          >
            {[
              { icon: <Globe2 className="w-5 h-5" />, label: "UAE & Uganda Hubs" },
              { icon: <Shield className="w-5 h-5" />, label: "15+ Years Experience" },
              { icon: <Truck className="w-5 h-5" />, label: "Global Supply Chain" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5 text-white/90 text-sm font-semibold tracking-wide drop-shadow-md">
                <div className="text-white bg-white/10 p-1.5 rounded-full">{badge.icon}</div>
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
              <ChevronDown className="text-white/60 w-8 h-8 drop-shadow-sm" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
