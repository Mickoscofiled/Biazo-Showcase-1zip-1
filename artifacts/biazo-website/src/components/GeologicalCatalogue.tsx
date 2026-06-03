import { motion } from "framer-motion";
import { BookOpen, Tag, Package, Compass, Pickaxe, ChevronRight } from "lucide-react";

const WA_URL =
  "https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20request%20the%20Geological%20Catalogue%20and%20get%20a%20quote.";

const categories = [
  {
    icon: <Tag className="w-6 h-6 text-blue-600" />,
    title: "Stationery & Labelling",
    pages: "Pages 3 – 12",
    items: [
      "PVC Flagging Tapes",
      "Flagging Tape Dispenser",
      "PVC Flags on Wire Stakes",
      "Pin Tags on Wire Stakes",
      "Triangle Markers",
      "Alutags",
      "Aluminium Labels with Wire Ties",
      "Core Tray Tags & Steel Tags",
      "Plastic Tags & Buff Tags",
      "PVC Self-Tie Labels",
      "Field Books",
      "Rite in the Rain Books",
      "Paint Markers & China Markers",
      "Tungsten Tipped Scribe",
      "Protractors & Triangular Scales",
      "Inclinometer",
      "Spray Paint & Barrier Cones",
    ],
  },
  {
    icon: <Package className="w-6 h-6 text-blue-600" />,
    title: "Sample Storage",
    pages: "Pages 14 – 16",
    items: [
      "Core Trays",
      "Sample Bags",
      "Specimen Containers",
      "Chip Trays",
      "Outdoor-rated Storage Solutions",
    ],
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Core & More",
    pages: "Pages 17 – 27",
    items: [
      "Core Cutting & Splitting Equipment",
      "Core Orientation Tools",
      "Geological Hammers & Chisels",
      "Rock Saws & Grinding Accessories",
      "Sample Preparation Equipment",
      "Core Logging Trays & Forms",
      "Magnifying Loupes",
      "UV Lamps",
      "Streak Plates & Hardness Picks",
      "Density Measurement Tools",
    ],
  },
  {
    icon: <Compass className="w-6 h-6 text-blue-600" />,
    title: "Exploration & Navigation",
    pages: "Pages 28 – 32",
    items: [
      "Brunton & Geological Compasses",
      "Clinometers & Dip Meters",
      "GPS Devices & Accessories",
      "Map Boards & Drafting Film",
      "Ranging Poles & Survey Pins",
      "Survey Tapes",
      "Theodolite Accessories",
    ],
  },
  {
    icon: <Pickaxe className="w-6 h-6 text-blue-600" />,
    title: "Gold Mining Accessories",
    pages: "Pages 33 – 45",
    items: [
      "Gold Pans",
      "Sluice Boxes & Accessories",
      "Classifiers & Screens",
      "Snuffer Bottles & Suction Tools",
      "Black Sand & Magnetic Separators",
      "Mercury Retorts",
      "Hand-held Metal Detectors",
      "Mining Safety Gear & PPE",
      "Workwear & Hi-Vis Clothing",
      "Dy-Mark Spray Paint",
    ],
  },
];

export default function GeologicalCatalogue() {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section id="geological" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#87CEEB]/20 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,149,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(100,149,237,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <motion.div
              variants={itemVariant}
              className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
            >
              2026/27 Edition
            </motion.div>
            <motion.h2
              variants={itemVariant}
              className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
            >
              Geological Catalogue
            </motion.h2>
            <motion.p
              variants={itemVariant}
              className="text-lg text-slate-600 max-w-xl"
            >
              Specialist equipment and supplies for geological fieldwork, mining exploration, and sample management — trusted by professionals across the Continent.
            </motion.p>
          </div>

          <motion.a
            variants={itemVariant}
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-geo-catalogue-inquiry"
            className="group shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05c] text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Request Catalogue on WhatsApp
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={itemVariant}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              data-testid={`card-geo-${i}`}
              className="group p-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <div className="text-primary">{cat.icon}</div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-primary transition-colors leading-tight">{cat.title}</h3>
                  <span className="text-xs text-primary/70 font-medium">{cat.pages}</span>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 mb-4" />

              <ul className="space-y-1.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 group-hover:bg-primary transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 p-8 rounded-2xl bg-white border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">Need pricing or availability?</h3>
            <p className="text-slate-500 text-sm">Contact our team directly on WhatsApp for fast quotes on any geological product.</p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-geo-whatsapp-cta"
            className="shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05c] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md shadow-green-200 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
