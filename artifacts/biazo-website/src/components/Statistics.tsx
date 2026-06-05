import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { label: "Pipes & Fittings", value: 27.3 },
  { label: "Spare Parts", value: 24 },
  { label: "Welding Consumables", value: 20 },
  { label: "Building Materials", value: 20 },
  { label: "Electrical Consumables", value: 18.5 },
  { label: "Chemicals & Reagents", value: 18.2 },
  { label: "Power & Hand Tools", value: 16 },
  { label: "Construction Machinery", value: 13.6 },
  { label: "Mining Equipment", value: 13.6 },
  { label: "Cables", value: 13.6 },
  { label: "Geological Supplies", value: 13.6 },
  { label: "Geo-survey Equipment", value: 13.6 },
  { label: "Machines", value: 12 },
  { label: "Office Supplies", value: 8 },
];

function CountUp({ end, decimals = 1 }: { end: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest: number) => latest.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, end, count]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [rounded]);

  return <span ref={ref}>0.0</span>;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const isEven = index % 2 === 0;
  const color = index < 4
    ? "from-[#7391D1] to-[#87CEFA]"
    : index < 8
    ? "from-[#87CEFA] to-[#a3c9f5]"
    : "from-[#a3b8e0] to-[#c5d8f0]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02 }}
      data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(115,145,209,0.2)] transition-shadow duration-300 overflow-hidden flex items-center gap-6 p-6"
    >
      {/* Glow blob */}
      <div className="absolute -top-8 -right-8 w-28 h-28 bg-primary/8 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors duration-500 pointer-events-none" />

      {/* Index badge */}
      <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
        <span className="text-white font-black text-lg">{String(index + 1).padStart(2, "0")}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-end justify-between mb-2">
          <h3 className="font-bold text-slate-700 text-sm leading-tight group-hover:text-primary transition-colors pr-2 truncate">
            {stat.label}
          </h3>
          <div className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br ${color} tabular-nums shrink-0`}>
            <CountUp end={stat.value} />
            <span className="text-base">%</span>
          </div>
        </div>

        {/* Bar */}
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${stat.value}%` } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r ${color} shadow-[0_0_8px_rgba(115,145,209,0.4)]`}
          />
        </div>
        <p className="text-[10px] text-slate-400 mt-1 font-medium">Share of product portfolio</p>
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="statistics" ref={sectionRef} className="py-28 bg-blue-50 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        style={{ x: backgroundX }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]) }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#87CEFA]/8 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Portfolio Breakdown
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
          >
            Product Distribution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-xl mx-auto"
          >
            Breakdown of our key product supply portfolio across sectors.
          </motion.p>
        </div>

        {/* Two-column staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
