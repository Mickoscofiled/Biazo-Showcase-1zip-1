import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Tag, Package, Compass, Pickaxe, ChevronRight, ChevronDown } from "lucide-react";

const WA_URL =
  "https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20request%20the%20Geological%20Catalogue%20and%20get%20a%20quote.";

const MAX_VISIBLE = 5;

const categories = [
  {
    icon: <Tag className="w-5 h-5 text-blue-600" />,
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
    icon: <Package className="w-5 h-5 text-blue-600" />,
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
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
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
    icon: <Compass className="w-5 h-5 text-blue-600" />,
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
    icon: <Pickaxe className="w-5 h-5 text-blue-600" />,
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

function CategoryCard({ cat, index }: { cat: typeof categories[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = cat.items.length > MAX_VISIBLE;
  const visibleItems = expanded ? cat.items : cat.items.slice(0, MAX_VISIBLE);
  const remaining = cat.items.length - MAX_VISIBLE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 transition-all duration-200 hover:shadow-md hover:shadow-blue-900/5"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0">
          {cat.icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">{cat.title}</h3>
          <span className="text-[10px] text-blue-500 font-medium">{cat.pages}</span>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100 mb-2.5" />

      {/* Items */}
      <ul className="space-y-1">
        <AnimatePresence initial={false}>
          {visibleItems.map((item, j) => (
            <motion.li
              key={item}
              initial={j >= MAX_VISIBLE ? { opacity: 0, height: 0 } : false}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-1.5 text-xs text-slate-500 leading-snug"
            >
              <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* View All / Collapse */}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-2 text-[11px] font-semibold text-blue-500 hover:text-blue-700 transition-colors"
        >
          {expanded ? "Show less" : `View all ${cat.items.length} items`}
          <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </motion.div>
  );
}

export default function GeologicalCatalogue() {
  return (
    <section id="geological" className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/8 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header — compact row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 py-0.5 px-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold tracking-widest uppercase mb-3">
              2026/27 Edition
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1.5">Geological Catalogue</h2>
            <p className="text-sm text-slate-500 max-w-md">
              Specialist equipment and supplies for geological fieldwork, mining exploration, and sample management — trusted by professionals across the Continent.
            </p>
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05c] text-white px-5 py-2.5 rounded-full active:scale-95 font-semibold text-sm transition-all shadow-md shadow-green-200 hover:shadow-green-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Request Catalogue
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </div>

        {/* Category Grid — compact 3×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>

        {/* Bottom CTA — slimmer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 py-4 px-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-sm font-bold text-slate-800">Need pricing or availability?</h3>
            <p className="text-slate-400 text-xs">Contact our team directly on WhatsApp for fast quotes on any geological product.</p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05c] text-white px-5 py-2 rounded-full active:scale-95 font-semibold text-xs transition-all shadow-sm shadow-green-200 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
