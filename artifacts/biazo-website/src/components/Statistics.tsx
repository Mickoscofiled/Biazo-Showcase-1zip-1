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

// Assign a colour per row cycling through a palette
const COLORS = [
  "from-blue-400 to-indigo-500",
  "from-sky-400 to-cyan-500",
  "from-violet-400 to-purple-500",
  "from-indigo-400 to-blue-600",
  "from-cyan-400 to-sky-500",
];

function StatRow({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });
  const color = COLORS[index % COLORS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="py-4 last:border-b-0"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-slate-700">{stat.label}</span>
        <span className={`text-sm font-bold tabular-nums ml-4 shrink-0 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {stat.value.toFixed(1)}%
        </span>
      </div>
      {/* Bubbly pill track */}
      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${(stat.value / MAX) * 100}%` } : {}}
          transition={{ duration: 1.3, delay: index * 0.04 + 0.15, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-md`}
        />
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: false });

  return (
    <section id="statistics" className="py-24 bg-white relative overflow-hidden">
      {/* Bubbly blobs */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-50 rounded-full blur-[90px] opacity-70" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50 rounded-full blur-[80px] opacity-60" />

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        <div ref={headerRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-5 shadow-sm"
          >
            ✦ Portfolio Breakdown
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-3"
          >
            Product Distribution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-500 max-w-xl mx-auto"
          >
            Breakdown of our key product supply portfolio across sectors.
          </motion.p>
        </div>

        {/* Bubbly card wrapping the bars */}
        <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 rounded-3xl border border-blue-100/80 shadow-xl shadow-blue-100 p-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-100 rounded-full blur-2xl opacity-60" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-indigo-100 rounded-full blur-xl opacity-50" />
          <div className="relative z-10">
            {stats.map((stat, i) => (
              <StatRow key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
