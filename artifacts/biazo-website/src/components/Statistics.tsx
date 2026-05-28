import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Pipes & Fittings", value: 27.3 },
  { label: "Spare Parts", value: 24 },
  { label: "Welding Consumables", value: 20 },
  { label: "Building Materials", value: 20 },
  { label: "Chemicals & Reagents", value: 18.2 },
  { label: "Power/Hand Tools", value: 16 },
  { label: "Construction Machinery", value: 13.6 },
  { label: "Mining Equipment", value: 13.6 },
  { label: "Cables", value: 13.6 },
  { label: "Geo-survey Equipment", value: 13.6 },
  { label: "Machines", value: 12 },
  { label: "Office Supplies", value: 8 }
];

function CountUp({ end, decimals = 1 }: { end: number, decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setCount(start + (end - start) * ease);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export default function Statistics() {
  return (
    <section id="statistics" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Product Distribution
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Breakdown of our key product supply portfolio across sectors.
          </motion.p>
        </div>

        <div className="space-y-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              <div className="flex justify-between items-end mb-2">
                <span className="font-semibold text-foreground">{stat.label}</span>
                <span className="text-primary font-bold"><CountUp end={stat.value} />%</span>
              </div>
              <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
