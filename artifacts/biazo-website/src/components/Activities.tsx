import { motion } from "framer-motion";
import { Tractor, HardHat, Pickaxe, Flame, Stethoscope, FlaskConical, Landmark } from "lucide-react";

const sectors = [
  { name: "Agriculture", icon: <Tractor className="w-5 h-5" /> },
  { name: "Construction", icon: <HardHat className="w-5 h-5" /> },
  { name: "Mining", icon: <Pickaxe className="w-5 h-5" /> },
  { name: "Oil & Gas", icon: <Flame className="w-5 h-5" /> },
  { name: "Healthcare", icon: <Stethoscope className="w-5 h-5" /> },
  { name: "Pharmaceuticals", icon: <FlaskConical className="w-5 h-5" /> },
  { name: "Government Institutions", icon: <Landmark className="w-5 h-5" /> }
];

export default function Activities() {
  return (
    <section id="sectors" className="py-24 bg-[#060f20] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6"
        >
          Industries We Serve
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
        >
          Key Activities & Sectors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-blue-200/60 max-w-2xl mx-auto mb-16"
        >
          We supply essential materials and equipment to pivotal industries driving economic growth across East Africa and the UAE.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="group flex items-center gap-3 bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/50 px-6 py-3.5 rounded-2xl text-base font-semibold text-blue-200 hover:text-white transition-all duration-300 cursor-default shadow-lg shadow-blue-950/20 hover:shadow-blue-500/20"
            >
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors">{sector.icon}</span>
              {sector.name}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-white/[0.03] border border-blue-900/30 max-w-3xl mx-auto"
        >
          <p className="text-blue-200/70 leading-relaxed text-lg">
            Leveraging our dual-hub operations in the <span className="text-white font-semibold">UAE</span> and <span className="text-white font-semibold">Uganda</span>, we deliver high-performance procurement services across East Africa, anchored by a commitment to operational transparency and efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
