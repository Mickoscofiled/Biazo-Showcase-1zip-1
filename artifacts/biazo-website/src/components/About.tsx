import { motion } from "framer-motion";
import { Building2, Globe2, History } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Dual Hub Operations",
      desc: "Strategically positioned with operations in RAKEZ Business Zone, UAE and Uganda to serve East Africa efficiently."
    },
    {
      icon: <History className="w-6 h-6 text-blue-600" />,
      title: "Decade of Excellence",
      desc: "Sister company established in 2008, bringing over 15 years of deep expertise in procurement and supply chain management."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-blue-600" />,
      title: "Global Network",
      desc: "Robust international supply chain connecting top-tier manufacturers to vital sectors across emerging markets."
    }
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as any } }
  };

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariant}
          >
            <motion.div variants={itemVariant} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Our Story
            </motion.div>
            <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 leading-tight">
              A Legacy of Trust<br />and Global Reach
            </motion.h2>
            <motion.p variants={itemVariant} className="text-lg text-slate-600 mb-6 leading-relaxed">
              Biazo International General Trading FZ-LLC, incorporated in September 2022 in Ras Al Khaimah (RAKEZ), UAE, stands as a premier trading entity bridging continents.
            </motion.p>
            <motion.p variants={itemVariant} className="text-lg text-slate-600 mb-8 leading-relaxed">
              As the sister company to Biazo International Ltd in Uganda (established 2008), we leverage over a decade of hands-on experience in procurement and supply chain management to deliver exceptional value to our partners in East Africa and beyond.
            </motion.p>

            <motion.div variants={itemVariant} className="grid sm:grid-cols-2 gap-8 mt-10 pt-10 border-t border-slate-200">
              <div>
                <h4 className="text-5xl font-bold bg-gradient-to-r from-primary to-[#87CEEB] bg-clip-text text-transparent mb-2">2008</h4>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Uganda Roots Established</p>
              </div>
              <div>
                <h4 className="text-5xl font-bold bg-gradient-to-r from-primary to-[#87CEEB] bg-clip-text text-transparent mb-2">2022</h4>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">UAE Hub Launched</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariant}
            className="flex flex-col gap-5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariant}
                className="group flex gap-4 p-6 bg-slate-50 hover:bg-white rounded-2xl border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="shrink-0 mt-1 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-primary transition-colors">{feature.title}</h3>
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
