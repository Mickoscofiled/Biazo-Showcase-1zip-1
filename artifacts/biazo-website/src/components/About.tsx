import { motion } from "framer-motion";
import { Building2, Globe2, History } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Building2 className="w-7 h-7 text-white" />,
      title: "Dual Hub Operations",
      desc: "Strategically positioned with operations in RAKEZ Business Zone, UAE and Uganda to serve East Africa efficiently.",
      gradient: "from-blue-400 to-indigo-500",
      bg: "from-blue-50 to-indigo-50",
      shadow: "shadow-blue-200",
      blob: "bg-blue-100",
    },
    {
      icon: <History className="w-7 h-7 text-white" />,
      title: "Decade of Excellence",
      desc: "Sister company established in 2008, bringing over 15 years of deep expertise in procurement and supply chain management.",
      gradient: "from-violet-400 to-purple-500",
      bg: "from-violet-50 to-purple-50",
      shadow: "shadow-violet-200",
      blob: "bg-violet-100",
    },
    {
      icon: <Globe2 className="w-7 h-7 text-white" />,
      title: "Global Network",
      desc: "Robust international supply chain connecting top-tier manufacturers to vital sectors across emerging markets.",
      gradient: "from-sky-400 to-cyan-500",
      bg: "from-sky-50 to-cyan-50",
      shadow: "shadow-sky-200",
      blob: "bg-sky-100",
    }
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as any } }
  };

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Bubbly background blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] bg-blue-100 rounded-full blur-[90px] opacity-60" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] bg-violet-100 rounded-full blur-[80px] opacity-50" />
      <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] bg-cyan-100 rounded-full blur-[60px] opacity-40" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariant}
          >
            <motion.div variants={itemVariant} className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              ✦ Our Story
            </motion.div>
            <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-800 leading-tight">
              A Legacy of Trust<br />and Global Reach
            </motion.h2>
            <motion.p variants={itemVariant} className="text-lg text-slate-600 mb-6 leading-relaxed">
              Biazo International General Trading FZ-LLC, incorporated in September 2022 in Ras Al Khaimah (RAKEZ), UAE, stands as a premier trading entity bridging continents.
            </motion.p>
            <motion.p variants={itemVariant} className="text-lg text-slate-600 mb-8 leading-relaxed">
              As the sister company to Biazo International Ltd in Uganda (established 2008), we leverage over a decade of hands-on experience in procurement and supply chain management to deliver exceptional value to our partners in East Africa and beyond.
            </motion.p>

            <motion.div variants={itemVariant} className="grid sm:grid-cols-2 gap-6 mt-10 pt-10 border-t border-slate-100">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-5 shadow-md shadow-blue-100 border border-blue-100/60">
                <h4 className="text-5xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">2008</h4>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">Uganda Roots Established</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-5 shadow-md shadow-violet-100 border border-violet-100/60">
                <h4 className="text-5xl font-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent mb-2">2022</h4>
                <p className="text-xs font-bold text-violet-500 uppercase tracking-wider">UAE Hub Launched</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariant}
            className="flex flex-col gap-5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariant}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`group relative flex gap-5 p-6 bg-gradient-to-br ${feature.bg} rounded-3xl border border-white shadow-xl ${feature.shadow} hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Decorative bubble in corner */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 ${feature.blob} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500`} />
                <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${feature.blob} rounded-full opacity-40 group-hover:scale-110 transition-transform duration-700`} />

                <div className={`shrink-0 mt-1 p-3.5 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg z-10`}>
                  {feature.icon}
                </div>
                <div className="z-10">
                  <h3 className="text-lg font-bold text-slate-800 mb-1.5">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
