import { motion } from "framer-motion";

const sectors = [
  "Agriculture",
  "Construction",
  "Mining",
  "Oil & Gas",
  "Healthcare",
  "Pharmaceuticals",
  "Government Institutions"
];

export default function Activities() {
  return (
    <section id="sectors" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Key Activities & Sectors
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-16"
        >
          We supply essential materials and equipment to pivotal industries driving economic growth.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors"
            >
              {sector}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
