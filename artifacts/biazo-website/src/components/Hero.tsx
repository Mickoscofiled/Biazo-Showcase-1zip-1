import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoPath from "@assets/WhatsApp_Image_2026-05-28_at_9.07.14_AM_1779994735397.jpeg";

export default function Hero() {
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-[#04101f]">
      {/* Animated deep blue gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 25, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-800/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-700/10 blur-[80px]"
        />
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#04101f_100%)]" />
      </div>

      <div className="container relative z-10 px-4 lg:px-8 max-w-6xl mx-auto text-center">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Large Prominent Logo */}
          <motion.div
            variants={textItem}
            className="relative mb-2"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl bg-blue-400/20 blur-2xl scale-125"
            />
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-2xl shadow-blue-500/30 border border-white/40 inline-block">
              <img
                src={logoPath}
                alt="Biazo International Logo"
                data-testid="img-hero-logo"
                className="h-32 md:h-40 w-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            variants={textItem}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm font-semibold tracking-widest uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Bridging UAE & East Africa
          </motion.div>

          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="block text-white">Global Trading,</span>
            <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
              Precision Delivered.
            </span>
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-lg md:text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed"
          >
            Biazo International connects markets with essential products across Agriculture, Construction, Mining, Oil & Gas, and Healthcare — delivering value through our dual hubs in the UAE and Uganda.
          </motion.p>

          <motion.div
            variants={textItem}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <a
              href="#products"
              data-testid="link-explore-products"
              className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-400/40 hover:scale-105"
            >
              Explore Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              data-testid="link-contact-sales"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            >
              Contact Sales
            </a>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            variants={textItem}
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="text-blue-400/50 w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
