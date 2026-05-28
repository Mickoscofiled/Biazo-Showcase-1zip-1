import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl"
        />
      </div>

      <div className="container relative z-10 px-4 lg:px-8 max-w-6xl mx-auto text-center">
        <motion.div 
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-8"
        >
          <motion.div variants={textItem} className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Bridging UAE & East Africa
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            <motion.span variants={textItem} className="block">Global Trading,</motion.span>
            <motion.span variants={textItem} className="block text-primary">Precision Delivered.</motion.span>
          </motion.h1>

          <motion.p variants={textItem} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Biazo International connects markets with essential products across Agriculture, Construction, Mining, Oil & Gas, and Healthcare. Delivering value through our dual hubs in the UAE and Uganda.
          </motion.p>

          <motion.div variants={textItem} className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a 
              href="#products"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              Explore Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="flex items-center gap-2 bg-white dark:bg-slate-900 text-foreground border border-border px-8 py-4 rounded-md font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Sales
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
