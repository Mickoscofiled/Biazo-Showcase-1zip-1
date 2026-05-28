import { motion } from "framer-motion";
import { BookOpen, Tag, Package, Compass, Pickaxe, ChevronRight } from "lucide-react";

const categories = [
  {
    icon: <Tag className="w-6 h-6 text-blue-400" />,
    title: "Stationery & Labelling",
    items: ["PVC Flagging Tapes & Flags", "Pin Tags & Triangle Markers", "Aluminium & Plastic Labels", "Core Tray Tags & Steel Tags", "Field Books & Buff Tags"]
  },
  {
    icon: <Package className="w-6 h-6 text-blue-400" />,
    title: "Sample Storage",
    items: ["Core trays & sample bags", "Specimen containers", "Durable storage solutions"]
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    title: "Core & More",
    items: ["Rite in the Rain notebooks", "Paint & China Markers", "Tungsten Tipped Scribes", "Protractors & Inclinometers", "Triangular Scales"]
  },
  {
    icon: <Compass className="w-6 h-6 text-blue-400" />,
    title: "Exploration & Navigation",
    items: ["Map suspension tape", "SOLA Inclinometer", "Survey & grid markers", "Douglas & Steel Protractors"]
  },
  {
    icon: <Pickaxe className="w-6 h-6 text-blue-400" />,
    title: "Gold Mining Accessories",
    items: ["Mining safety gear", "Geological accessories", "Workwear & PPE", "Mining barrier cones", "Spray paint & markers"]
  }
];

export default function GeologicalCatalogue() {
  return (
    <section id="geological" className="py-24 bg-[#04101f] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-700/10 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              2026/27 Edition
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Geological Catalogue
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-blue-200/60 max-w-xl"
            >
              Specialist equipment and supplies for geological fieldwork, mining exploration, and sample management — trusted by professionals across East Africa.
            </motion.p>
          </div>

          <motion.a
            href="mailto:sales@biazointernational.com?subject=Geological Catalogue Inquiry"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            data-testid="link-geo-catalogue-inquiry"
            className="group shrink-0 flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-400/30 hover:scale-105"
          >
            Request Catalogue
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </motion.a>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              data-testid={`card-geo-${i}`}
              className="group p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-blue-900/30 hover:border-blue-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-blue-200/50 group-hover:text-blue-200/70 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0 group-hover:bg-blue-400 transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: categories.length * 0.08 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-900/10 border border-blue-600/30 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Need the Full Catalogue?</h3>
              <p className="text-blue-200/60 text-sm leading-relaxed mb-6">
                Our full 2026/27 geological catalogue covers hundreds of specialist products. Contact our team for pricing and availability.
              </p>
            </div>
            <a
              href="mailto:sales@biazointernational.com?subject=Geological Catalogue Inquiry"
              data-testid="link-geo-full-catalogue"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 py-3 rounded-xl font-semibold text-sm transition-all hover:border-blue-400/50"
            >
              Contact Us
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
