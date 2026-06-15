import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Pipes & Fittings", value: 27.3 },
  { label: "Spare Parts", value: 24.6 },
  { label: "Welding Consumables", value: 20.0 },
  { label: "Building Materials", value: 20.0 },
  { label: "Electrical Consumables", value: 18.5 },
  { label: "Chemicals & Reagents", value: 18.2 },
  { label: "Power & Hand Tools", value: 16.0 },
  { label: "Construction Machinery", value: 13.6 },
  { label: "Mining Equipment", value: 13.6 },
  { label: "Cables", value: 13.6 },
  { label: "Geological Supplies", value: 13.6 },
  { label: "Geo-survey Equipment", value: 13.6 },
  { label: "Machines", value: 12.0 },
  { label: "Office Supplies", value: 8.0 },
];

const MAX = 27.3;

function StatRow({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="border-b border-slate-100 dark:border-slate-800 py-4 last:border-b-0"
    >
      {/* Label + value row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{stat.label}</span>
        <span className="text-sm font-semibold text-blue-500 tabular-nums ml-4 shrink-0">
          {stat.value.toFixed(1)}%
        </span>
      </div>

      {/* Bar track */}
      <div className="h-[5px] w-full bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${(stat.value / MAX) * 100}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.04 + 0.15, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
        />
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: false });

  return (
    <section id="statistics" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 dark:bg-slate-950 text-blue-500 text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Portfolio Breakdown
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-3"
          >
            Product Distribution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
          >
            Breakdown of our key product supply portfolio across sectors.
          </motion.p>
        </div>

        {/* Rows */}
        <div>
          {stats.map((stat, i) => (
            <StatRow key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

