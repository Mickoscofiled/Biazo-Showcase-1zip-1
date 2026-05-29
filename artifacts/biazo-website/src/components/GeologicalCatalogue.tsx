import { motion } from "framer-motion";
import { BookOpen, Tag, Package, Compass, Pickaxe, ChevronRight } from "lucide-react";

const WA_URL =
  "https://wa.me/971524860664?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20request%20the%20Geological%20Catalogue%20and%20get%20a%20quote.";

const categories = [
  {
    icon: <Tag className="w-6 h-6 text-blue-600" />,
    title: "Stationery & Labelling",
    pages: "Pages 3 – 12",
    items: [
      "PVC Flagging Tapes — 11mm & 25mm widths, 50m/75m/100m rolls, 12 colours",
      "Flagging Tape Dispenser — holds 2 × 50m rolls, waterproof Oxford fabric",
      "PVC Flags on Wire Stakes — 500mm, 700mm, 900mm, 12 colours",
      "Pin Tags on Wire Stakes — 500mm, 7 colours",
      "Triangle Markers — 90mm × 120mm, UV-stabilised, 5 colours",
      "Alutags — 25mm × 75mm aluminium tags with wire ties (pack of 1000)",
      "Aluminium Labels with Copper Ties — 20mm × 100mm, 150mic",
      "Pointed Aluminium Labels with Wire Ties — 23mm × 113mm, 150mic",
      "Core Tray Tags",
      "Steel Tags",
      "Plastic Tags with Slots — 250mic",
      "Plastic Tags — 600mic",
      "Buff Tags",
      "Large Plastic T-Markers",
      "PVC Self-Tie Labels",
      "Field Books",
      "Rite in the Rain Fabrikoid Cover Books",
      "Rite in the Rain Field Desk",
      "Rite in the Rain Dirtbag Pen Organizer",
      "Rite in the Rain Lead Holder",
      "Rite in the Rain Plastic Click Pen",
      "Rite in the Rain Loose Leaf Pages",
      "Peel-off China Markers",
      "Edding Paint Markers",
      "Rilbex Paint Markers",
      "Tungsten Tipped Scribe",
      "Magnet Pen",
      "Douglas Protractor",
      "Steel Protractor with Hinged Arm",
      "Map Suspension Tape",
      "SOLA Inclinometer",
      "Triangular Scales",
      "Sample Ticket Book",
      "Dy-Mark Spray Paint",
      "Mining Barrier Cones",
    ],
  },
  {
    icon: <Package className="w-6 h-6 text-blue-600" />,
    title: "Sample Storage",
    pages: "Pages 14 – 16",
    items: [
      "Core trays — rigid and stackable for drill core samples",
      "Sample bags — polyethylene and calico in multiple sizes",
      "Specimen containers — labelled and sealable",
      "Chip trays — for rock chip and cuttings samples",
      "Durable outdoor-rated storage solutions",
    ],
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Core & More",
    pages: "Pages 17 – 27",
    items: [
      "Core cutting & splitting equipment",
      "Core orientation tools",
      "Geological hammers & chisels",
      "Rock saws & grinding accessories",
      "Sample preparation equipment",
      "Core logging trays & forms",
      "Magnifying loupes & hand lenses",
      "UV lamps for mineral identification",
      "Streak plates & hardness picks",
      "Dilatometre & density measurement tools",
    ],
  },
  {
    icon: <Compass className="w-6 h-6 text-blue-600" />,
    title: "Exploration & Navigation",
    pages: "Pages 28 – 32",
    items: [
      "Brunton compasses & geological compasses",
      "Clinometers & dip meters",
      "GPS devices & accessories",
      "Map boards & drafting film",
      "Map suspension tape",
      "Ranging poles & survey pins",
      "Pegs & lathes for grid marking",
      "Survey tapes — fibreglass and steel",
      "Theodolite accessories",
      "Aerial survey support equipment",
    ],
  },
  {
    icon: <Pickaxe className="w-6 h-6 text-blue-600" />,
    title: "Gold Mining Accessories",
    pages: "Pages 33 – 45",
    items: [
      "Gold pans — plastic & steel, various sizes",
      "Sluice boxes & accessories",
      "Classifiers & screens — multiple mesh sizes",
      "Snuffer bottles & suction tools",
      "Black sand separators & magnetic separators",
      "Mercury retorts & amalgamation equipment",
      "Hand-held metal detectors",
      "Mining safety gear & PPE",
      "Mining barrier cones & tape",
      "Workwear & high-visibility clothing",
      "Geological equipment & accessories",
      "Dy-Mark spray paint for site marking",
    ],
  },
];

export default function GeologicalCatalogue() {
  return (
    <section id="geological" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-200/20 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              2026/27 Edition
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold text-blue-900 mb-4"
            >
              Geological Catalogue
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-blue-600/65 max-w-xl"
            >
              Specialist equipment and supplies for geological fieldwork, mining exploration, and sample management — trusted by professionals across East Africa.
            </motion.p>
          </div>

          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            data-testid="link-geo-catalogue-inquiry"
            className="group shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05c] text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Request Catalogue on WhatsApp
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              data-testid={`card-geo-${i}`}
              className="group p-7 rounded-2xl bg-white hover:bg-blue-50 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                  <span className="text-xs text-blue-500/60 font-medium">{cat.pages}</span>
                </div>
              </div>

              <div className="w-full h-px bg-blue-100 my-4" />

              <ul className="space-y-2 columns-1 sm:columns-2 gap-x-6">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-blue-600/55 group-hover:text-blue-600/80 transition-colors break-inside-avoid mb-1">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 group-hover:bg-blue-600 transition-colors" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 p-8 rounded-2xl bg-white border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-1">Need pricing or availability?</h3>
            <p className="text-blue-600/60 text-sm">Contact our team directly on WhatsApp for fast quotes on any geological product.</p>
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
