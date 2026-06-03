import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
  { label: "Office Supplies", value: 8 }
];

function CountUp({ end, decimals = 1 }: { end: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(end * ease);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
  };

  return (
    <section id="statistics" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariant}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Portfolio Breakdown
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Product Distribution
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-lg text-slate-600"
          >
            Breakdown of our key product supply portfolio across sectors.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="space-y-5"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemVariant}
              className="group"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex justify-between items-end mb-2">
                <span className="font-semibold text-slate-700 text-sm group-hover:text-primary transition-colors">{stat.label}</span>
                <span className="text-primary font-bold text-sm tabular-nums">
                  <CountUp end={stat.value} />%
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" as any }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[#87CEEB] shadow-sm"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
