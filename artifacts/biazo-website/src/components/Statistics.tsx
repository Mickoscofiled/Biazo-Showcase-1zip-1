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

export default function Statistics() {
  return (
    <section id="statistics" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-200/30 blur-[100px] rounded-full" />
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Portfolio Breakdown
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          >
            Product Distribution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-600/70"
          >
            Breakdown of our key product supply portfolio across sectors.
          </motion.p>
        </div>

        <div className="space-y-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex justify-between items-end mb-2">
                <span className="font-semibold text-blue-800 text-sm group-hover:text-blue-900 transition-colors">{stat.label}</span>
                <span className="text-blue-600 font-bold text-sm tabular-nums">
                  <CountUp end={stat.value} />%
                </span>
              </div>
              <div className="h-2.5 w-full bg-blue-100 rounded-full overflow-hidden border border-blue-200">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 shadow-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
