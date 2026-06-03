import { motion } from "framer-motion";
import { Tractor, HardHat, Pickaxe, Flame, Landmark } from "lucide-react";

const sectors = [
  { name: "Agriculture", icon: <Tractor className="w-5 h-5" /> },
  { name: "Construction", icon: <HardHat className="w-5 h-5" /> },
  { name: "Mining", icon: <Pickaxe className="w-5 h-5" /> },
  { name: "Oil & Gas", icon: <Flame className="w-5 h-5" /> },
  { name: "Government Institutions", icon: <Landmark className="w-5 h-5" /> }
];

export default function Activities() {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section id="sectors" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(100,149,237,0.03),transparent_70%)]" />
      {/* clean bg */}

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
        >
          <motion.div
            variants={itemVariant}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Industries We Serve
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-800"
          >
            Key Activities & Sectors
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-lg text-slate-600 max-w-2xl mx-auto mb-16"
          >
            We supply essential materials and equipment to pivotal industries driving economic growth across the Continent and the UAE.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              variants={itemVariant}
              whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.2 } }}
              className="group flex items-center gap-3 bg-white hover:bg-primary border border-slate-200 hover:border-primary px-6 py-3.5 rounded-full active:scale-95 text-base font-semibold text-slate-700 hover:text-primary-foreground transition-all duration-300 cursor-default shadow-sm hover:shadow-xl hover:shadow-primary/20"
            >
              <span className="text-primary group-hover:text-primary-foreground/90 transition-colors">{sector.icon}</span>
              {sector.name}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-100 max-w-3xl mx-auto"
        >
          <p className="text-slate-600 leading-relaxed text-lg">
            Leveraging our dual-hub operations in the <span className="text-slate-800 font-semibold">UAE</span> and <span className="text-slate-800 font-semibold">Uganda</span>, we deliver high-performance procurement services across the Continent, anchored by a commitment to operational transparency and efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
