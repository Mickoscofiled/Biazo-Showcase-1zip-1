import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoPath from "@assets/biazo-logo-transparent.png";

export default function Hero() {
  const textContainer: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } }
  };
  const textItem: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as any } }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#6495ED] via-[#5a8ae0] to-[#3a6fd4] text-white">
      {/* Subtle animated light orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" as any }}
          className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-white/10 blur-[130px]"
        />
        <motion.div
          animate={{ y: [0, 25, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" as any, delay: 1.5 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-200/20 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" as any, delay: 3 }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-[90px]"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="container relative z-10 px-4 lg:px-8 max-w-6xl mx-auto text-center">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <motion.div variants={textItem} className="relative mb-2">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as any }}
              className="absolute inset-0 rounded-3xl bg-white/20 blur-2xl scale-125"
            />
            <div className="relative inline-block">
              <img
                src={logoPath}
                alt="Biazo International Logo"
                data-testid="img-hero-logo"
                className="h-36 md:h-48 w-auto object-contain drop-shadow-2xl brightness-0 invert"
              />
            </div>
          </motion.div>

          <motion.div
            variants={textItem}
            className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold tracking-widest uppercase text-xs sm:text-sm shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            Bridging UAE & East Africa
          </motion.div>

          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="block text-white">Global Trading,</span>
            <span className="block text-white/90 pb-2">
              Precision Delivered.
            </span>
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Biazo International connects markets with essential products across Agriculture, Construction, Mining, Oil & Gas, and Healthcare — delivering value through our dual hubs in the UAE and Uganda.
          </motion.p>

          <motion.div variants={textItem} className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a
              href="#products"
              data-testid="link-explore-products"
              className="group flex items-center gap-2 bg-white text-[#6495ED] px-8 py-4 rounded-full active:scale-95 font-bold text-lg transition-all shadow-2xl hover:shadow-white/40 hover:scale-105"
            >
              Explore Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              data-testid="link-contact-sales"
              className="flex items-center gap-2 bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white px-8 py-4 rounded-full active:scale-95 font-bold text-lg transition-all hover:scale-105"
            >
              Contact Sales
            </a>
          </motion.div>

          <motion.div variants={textItem} className="mt-12">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as any }}
            >
              <ChevronDown className="text-white/60 w-10 h-10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
