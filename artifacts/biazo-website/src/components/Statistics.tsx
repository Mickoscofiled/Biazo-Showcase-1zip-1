import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";
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

function CountUp({ end, decimals = 1, trigger }: { end: number; decimals?: number; trigger: boolean }) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (trigger) {
      const controls = animate(count, end, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [trigger, end, count]);

  useEffect(() => {
    const unsubscribe = count.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toFixed(decimals);
    });
    return unsubscribe;
  }, [count, decimals]);

  return <span ref={ref}>0.0</span>;
}

function StatCard({ stat, index, scrollYProgress }: { stat: typeof stats[0]; index: number; scrollYProgress: any }) {
  const total = stats.length;

  // Each card occupies 1/total of the scroll range, with a little overlap
  const start = index / total;
  const end = (index + 1) / total;
  const midpoint = (start + end) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.02, start + 0.06, midpoint, end - 0.06, end + 0.02],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start - 0.02, start + 0.06, end - 0.06, end + 0.02],
    [60, 0, 0, -60]
  );
  const scale = useTransform(
    scrollYProgress,
    [start - 0.02, start + 0.06, end - 0.06, end + 0.02],
    [0.85, 1, 1, 0.85]
  );

  // Trigger countup when this card is active
  const isActive = useTransform(scrollYProgress, (v) => v >= start && v < end);
  const triggerRef = useRef(false);

  useEffect(() => {
    const unsubscribe = isActive.on("change", (active) => {
      if (active && !triggerRef.current) {
        triggerRef.current = true;
      }
    });
    return unsubscribe;
  }, [isActive]);

  const barWidth = useTransform(
    scrollYProgress,
    [start + 0.02, start + 0.12],
    ["0%", `${stat.value}%`]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div
        data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
        className="relative w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-[0_30px_80px_rgba(115,145,209,0.18)] p-10 md:p-14 overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#87CEFA]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Index counter */}
        <div className="text-xs font-bold tracking-widest uppercase text-primary/50 mb-6">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* Big number */}
        <div className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#7391D1] to-[#87CEFA] tabular-nums leading-none mb-4">
          <CountUp end={stat.value} trigger={true} />
          <span className="text-4xl md:text-5xl">%</span>
        </div>

        {/* Label */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-8 leading-snug">
          {stat.label}
        </h3>

        {/* Animated progress bar */}
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            style={{ width: barWidth }}
            className="h-full rounded-full bg-gradient-to-r from-[#7391D1] to-[#87CEFA] shadow-[0_0_12px_rgba(115,145,209,0.5)]"
          />
        </div>

        {/* Share of portfolio label */}
        <p className="text-xs text-slate-400 font-medium mt-3">Share of product portfolio</p>
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dot progress indicator
  const activeDot = useTransform(scrollYProgress, (v) =>
    Math.min(Math.floor(v * stats.length), stats.length - 1)
  );

  return (
    <section id="statistics" className="relative bg-blue-50">
      {/* Header — scrolls away normally */}
      <div className="py-20 text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
            Portfolio Breakdown
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Product Distribution
          </h2>
          <p className="text-lg text-slate-600">
            Scroll to explore our key product supply portfolio across sectors.
          </p>
        </motion.div>
      </div>

      {/* Sticky scroll container — height = stats.length * 100vh */}
      <div
        ref={containerRef}
        style={{ height: `${stats.length * 100}vh` }}
        className="relative"
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background glow that shifts */}
          <motion.div
            style={{
              background: useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [
                  "radial-gradient(ellipse at 30% 50%, rgba(115,145,209,0.12), transparent 70%)",
                  "radial-gradient(ellipse at 50% 50%, rgba(135,206,250,0.12), transparent 70%)",
                  "radial-gradient(ellipse at 70% 50%, rgba(115,145,209,0.12), transparent 70%)",
                ]
              ),
            }}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Cards stacked absolutely */}
          <div className="relative w-full h-[70vh] max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Dot navigation — right side */}
          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
            {stats.map((_, i) => (
              <DotIndicator key={i} index={i} activeDot={activeDot} total={stats.length} />
            ))}
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DotIndicator({ index, activeDot, total }: { index: number; activeDot: any; total: number }) {
  const isActive = useTransform(activeDot, (v: number) => v === index);
  const scale = useTransform(isActive, (a: boolean) => (a ? 1 : 0.6));
  const opacity = useTransform(isActive, (a: boolean) => (a ? 1 : 0.35));

  return (
    <motion.div
      style={{ scale, opacity }}
      className="w-2 h-2 rounded-full bg-primary cursor-pointer"
      title={`Stat ${index + 1} of ${total}`}
    />
  );
}
