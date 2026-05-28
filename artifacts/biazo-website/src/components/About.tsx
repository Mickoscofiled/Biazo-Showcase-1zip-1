import { motion } from "framer-motion";
import { Building2, Globe2, History } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Building2 className="w-6 h-6 text-blue-400" />,
      title: "Dual Hub Operations",
      desc: "Strategically positioned with operations in RAKEZ Business Zone, UAE and Uganda to serve East Africa efficiently."
    },
    {
      icon: <History className="w-6 h-6 text-blue-400" />,
      title: "Decade of Excellence",
      desc: "Sister company established in 2008, bringing over 15 years of deep expertise in procurement and supply chain management."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-blue-400" />,
      title: "Global Network",
      desc: "Robust international supply chain connecting top-tier manufacturers to vital sectors across emerging markets."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#060f20] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">A Legacy of Trust<br />and Global Reach</h2>
            <p className="text-lg text-blue-200/60 mb-6 leading-relaxed">
              Biazo International General Trading FZ-LLC, incorporated in September 2022 in Ras Al Khaimah (RAKEZ), UAE, stands as a premier trading entity bridging continents.
            </p>
            <p className="text-lg text-blue-200/60 mb-8 leading-relaxed">
              As the sister company to Biazo International Ltd in Uganda (established 2008), we leverage over a decade of hands-on experience in procurement and supply chain management to deliver exceptional value to our partners in East Africa and beyond.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-10 pt-10 border-t border-blue-900/40">
              <div>
                <h4 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent mb-2">2008</h4>
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Uganda Roots Established</p>
              </div>
              <div>
                <h4 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent mb-2">2022</h4>
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">UAE Hub Launched</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                className="group flex gap-4 p-6 bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="shrink-0 mt-1 p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                  <p className="text-blue-200/55 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
