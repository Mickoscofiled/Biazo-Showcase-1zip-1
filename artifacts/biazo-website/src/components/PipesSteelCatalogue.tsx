import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pipette, Layers, FlaskConical, ChevronRight, ChevronDown } from "lucide-react";

const WA_BASE = "https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20a%20quote%20for%20";

const MAX_VISIBLE = 5;

const categories = [
  {
    id: "pipes",
    icon: <Pipette className="w-5 h-5 text-blue-600" />,
    label: "Pipes & Fittings",
    title: "Pipes & Fittings",
    subtitle: "GI · PPRC · Industrial Fittings",
    description: "Comprehensive range of pipes and fittings for industrial, construction, and mining applications.",
    waText: "Pipes%20and%20Fittings",
    groups: [
      {
        heading: "Pipe Types",
        items: [
          { name: "GI Pipes", detail: "Galvanised iron — various diameters & schedules" },
          { name: "PPRC Pipes", detail: "Polypropylene — hot & cold water" },
        ],
      },
      {
        heading: "Fittings",
        items: [
          { name: "Elbow", detail: "90° and 45° — threaded & socket-weld" },
          { name: "Tee", detail: "Equal & reducing tees — GI and PPRC" },
          { name: "Reducer", detail: "Concentric & eccentric reducers" },
          { name: "Coupling", detail: "Full and half couplings" },
          { name: "Union", detail: "Three-piece unions for easy disconnection" },
          { name: "Cap", detail: "Pipe end caps — threaded & plain" },
          { name: "Plug", detail: "Hex head plugs — multiple sizes" },
          { name: "Nipple", detail: "Close, short & long nipples" },
          { name: "Bushing", detail: "Hex reducing bushings" },
          { name: "Adapter", detail: "Male & female adapters — GI to PPRC" },
          { name: "Flange", detail: "Slip-on, weld-neck, blind & threaded flanges" },
        ],
      },
    ],
  },
  {
    id: "steel",
    icon: <Layers className="w-5 h-5 text-blue-600" />,
    label: "Steel & Metal",
    title: "Steel & Metal",
    subtitle: "Plates · Sections · Structural Steel",
    description: "Structural and wear steel products for mining, construction, and heavy industry.",
    waText: "Steel%20and%20Metal%20Products",
    groups: [
      {
        heading: "Steel Plates",
        items: [
          { name: "Mild Steel Plates — HR", detail: "Hot Rolled plates — wide range of thicknesses" },
          { name: "Mild Steel Plates — CR", detail: "Cold Rolled plates — smooth finish" },
          { name: "Stainless Steel", detail: "304 & 316 grades — sheets, plates & coils" },
          { name: "Galvanized Steel Plates", detail: "Hot-dip galvanized for corrosion resistance" },
          { name: "Chequered (Tread) Plates", detail: "Anti-slip diamond & teardrop patterns" },
          { name: "Wear (AR) Plate", detail: "AR400/AR500 — high-impact mining applications" },
        ],
      },
      {
        heading: "Sections & Structural",
        items: [
          { name: "Rectangular Hollow Section", detail: "Mild steel RHS — standard & heavy wall" },
          { name: "Metal Bar", detail: "Round, square & flat bars — mild & stainless" },
          { name: "Section, Channel & Structural", detail: "I-beams, H-beams, angle & channel" },
          { name: "Scaffolding & Formwork", detail: "Frames, ledgers, cross-braces & panels" },
        ],
      },
    ],
  },
  {
    id: "chemicals",
    icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
    label: "Chemicals",
    title: "Industrial & Lab Chemicals",
    subtitle: "Water Treatment · Lab Reagents · Adhesives",
    description: "Industrial and laboratory chemicals for mining, water treatment, and analytical applications.",
    waText: "Industrial%20and%20Laboratory%20Chemicals",
    groups: [
      {
        heading: "Water Treatment",
        items: [
          { name: "Water Treatment Chemicals", detail: "Coagulants, flocculants, disinfectants" },
          { name: "Scale Inhibitors", detail: "Prevents mineral scaling in pipes" },
          { name: "Antidote", detail: "Emergency antidote chemicals" },
        ],
      },
      {
        heading: "Laboratory & Industrial",
        items: [
          { name: "Buffer Solutions", detail: "pH 4, 7 & 10 — NIST-traceable" },
          { name: "Lab Chemicals", detail: "Analytical and general-purpose reagents" },
          { name: "Solvents & Adhesives", detail: "Industrial solvents, epoxies & adhesives" },
          { name: "Oxidizers & Reducing Agents", detail: "H₂O₂, NaOCl, Na₂S₂O₅ & more" },
        ],
      },
    ],
  },
];

function GroupList({ items }: { items: { name: string; detail: string }[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > MAX_VISIBLE;
  const visible = expanded ? items : items.slice(0, MAX_VISIBLE);
  const remaining = items.length - MAX_VISIBLE;

  return (
    <>
      <ul className="space-y-1">
        <AnimatePresence initial={false}>
          {visible.map((item, ii) => (
            <motion.li
              key={item.name}
              initial={ii >= MAX_VISIBLE ? { opacity: 0, height: 0 } : false}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-start gap-2 py-1 px-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-slate-700">{item.name}</span>
                <span className="text-[10px] text-slate-400 ml-1">— {item.detail}</span>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-1.5 ml-2 text-[11px] font-semibold text-blue-500 hover:text-blue-700 transition-colors"
        >
          {expanded ? "Show less" : `+${remaining} more`}
          <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </>
  );
}

export default function PipesSteelCatalogue() {
  return (
    <section id="pipes-steel" className="py-16 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 py-0.5 px-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold tracking-widest uppercase mb-3">
            Full Product Range
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Pipes, Steel & Chemicals</h2>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Comprehensive catalogues covering pipes & fittings, structural steel, and industrial chemicals — available for rapid procurement across East Africa.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#cat-${cat.id}`}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 hover:bg-primary border border-blue-200 hover:border-primary text-slate-600 hover:text-white text-xs font-semibold transition-all"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Category Cards — compact */}
        <div className="space-y-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              id={`cat-${cat.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-3.5 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">{cat.title}</h3>
                    <p className="text-[10px] text-blue-500 font-semibold tracking-wide uppercase">{cat.subtitle}</p>
                  </div>
                </div>
                <a
                  href={`${WA_BASE}${cat.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20c05c] text-white px-4 py-1.5 rounded-full font-semibold text-xs transition-all hover:scale-105 shadow-sm"
                >
                  Get a Quote
                  <ChevronRight size={12} />
                </a>
              </div>

              <p className="px-5 pt-3 text-xs text-slate-400 leading-relaxed">{cat.description}</p>

              {/* Groups Grid */}
              <div className="px-5 py-3 grid md:grid-cols-2 gap-4">
                {cat.groups.map((group, gi) => (
                  <div key={gi}>
                    <h4 className="text-[10px] font-bold text-primary/70 tracking-widest uppercase mb-2 flex items-center gap-1.5">
                      <span className="w-3 h-px bg-primary/30" />
                      {group.heading}
                    </h4>
                    <GroupList items={group.items} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA — compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 py-4 px-6 rounded-xl bg-primary flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-primary/15"
        >
          <div>
            <h3 className="text-sm font-bold text-white">Need a full material list or bill of quantities?</h3>
            <p className="text-white/70 text-xs">Send us your project requirements on WhatsApp — pricing within 24 hours.</p>
          </div>
          <a
            href="https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20have%20a%20project%20requiring%20pipes%2C%20steel%20or%20chemicals.%20Please%20assist%20with%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-white hover:bg-slate-50 text-primary px-5 py-2 rounded-full font-semibold text-xs transition-all hover:scale-105 shadow-md"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#25D366] shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Send Project Requirements
          </a>
        </motion.div>
      </div>
    </section>
  );
}
