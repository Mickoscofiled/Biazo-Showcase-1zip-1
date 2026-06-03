import { motion } from "framer-motion";
import { Pipette, Layers, FlaskConical, ChevronRight } from "lucide-react";

const WA_BASE = "https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20a%20quote%20for%20";

const categories = [
  {
    id: "pipes",
    icon: <Pipette className="w-7 h-7 text-blue-600" />,
    label: "Pipes & Fittings",
    title: "Pipes & Fittings",
    subtitle: "GI · PPRC · Industrial Fittings",
    description: "We supply a comprehensive range of pipes and fittings for industrial, construction, and mining applications — sourced from top global manufacturers.",
    waText: "Pipes%20and%20Fittings",
    groups: [
      {
        heading: "Pipe Types",
        items: [
          { name: "GI Pipes", detail: "Galvanised iron pipes — various diameters & schedules" },
          { name: "PPRC Pipes", detail: "Polypropylene random copolymer — hot & cold water" },
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
    icon: <Layers className="w-7 h-7 text-blue-600" />,
    label: "Steel & Metal",
    title: "Steel & Metal",
    subtitle: "Plates · Sections · Structural Steel",
    description: "Full-range structural and wear steel products for mining, construction, and heavy industry — available in standard and custom cut-to-size.",
    waText: "Steel%20and%20Metal%20Products",
    groups: [
      {
        heading: "Steel Plates",
        items: [
          { name: "Mild Steel Plates — HR", detail: "Hot Rolled (HR) plates — wide range of thicknesses" },
          { name: "Mild Steel Plates — CR", detail: "Cold Rolled (CR) plates — smooth finish for precision work" },
          { name: "Stainless Steel", detail: "304 & 316 grades — sheets, plates & coils" },
          { name: "Galvanized Steel Plates", detail: "Hot-dip galvanized for corrosion resistance" },
          { name: "Chequered (Tread) Plates", detail: "Anti-slip diamond & teardrop patterns" },
          { name: "Wear (Abrasion Resistant) Plate", detail: "AR400 / AR500 — for high-impact mining applications" },
        ],
      },
      {
        heading: "Sections & Structural",
        items: [
          { name: "Rectangular Hollow Section (RHS)", detail: "Mild steel RHS — standard & heavy wall" },
          { name: "Metal Bar", detail: "Round, square & flat bars — mild & stainless" },
          { name: "Section, Channel & Structural", detail: "I-beams, H-beams, angle & channel sections" },
          { name: "Scaffolding & Formwork Material", detail: "Frames, ledgers, cross-braces, base jacks & panels" },
        ],
      },
    ],
  },
  {
    id: "chemicals",
    icon: <FlaskConical className="w-7 h-7 text-blue-600" />,
    label: "Chemicals",
    title: "Industrial & Lab Chemicals",
    subtitle: "Water Treatment · Lab Reagents · Adhesives",
    description: "Industrial and laboratory chemicals for mining operations, water treatment, and analytical applications — supplied with full safety data sheets.",
    waText: "Industrial%20and%20Laboratory%20Chemicals",
    groups: [
      {
        heading: "Water Treatment",
        items: [
          { name: "Water Treatment Chemicals", detail: "Coagulants, flocculants, disinfectants & pH adjusters" },
          { name: "Scale Inhibitors", detail: "Prevents mineral scaling in pipes & equipment" },
          { name: "Antidote", detail: "Emergency antidote chemicals for mining site safety" },
        ],
      },
      {
        heading: "Laboratory & Industrial",
        items: [
          { name: "Buffer Solutions", detail: "pH 4, 7 & 10 — NIST-traceable standard buffers" },
          { name: "Lab Chemicals", detail: "Analytical and general-purpose reagents" },
          { name: "Solvents & Adhesives", detail: "Industrial solvents, epoxies & structural adhesives" },
          { name: "Oxidizers & Reducing Agents", detail: "Hydrogen peroxide, sodium hypochlorite, sodium metabisulfite & more" },
        ],
      },
    ],
  },
];

export default function PipesSteelCatalogue() {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section id="pipes-steel" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#87CEEB]/10 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,149,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,149,237,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariant}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Full Product Range
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
          >
            Pipes, Steel & Chemicals
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Comprehensive catalogues covering pipes & fittings, structural steel, and industrial chemicals — all available for rapid procurement across East Africa.
          </motion.p>

          <motion.div
            variants={itemVariant}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#cat-${cat.id}`}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 hover:bg-primary border border-slate-200 hover:border-primary text-slate-700 hover:text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md"
              >
                {cat.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="space-y-10"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              id={`cat-${cat.id}`}
              variants={itemVariant}
              className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-7 lg:p-8 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shrink-0 text-primary">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{cat.title}</h3>
                    <p className="text-xs text-primary font-semibold tracking-wide uppercase mt-0.5">{cat.subtitle}</p>
                  </div>
                </div>
                <a
                  href={`${WA_BASE}${cat.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-${cat.id}-whatsapp`}
                  className="shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05c] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md shadow-green-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                  </svg>
                  Get a Quote
                  <ChevronRight size={14} className="opacity-70" />
                </a>
              </div>

              <p className="px-7 lg:px-8 pt-5 pb-0 text-sm text-slate-500 leading-relaxed max-w-3xl">
                {cat.description}
              </p>

              <div className="p-7 lg:p-8 grid md:grid-cols-2 gap-8">
                {cat.groups.map((group, gi) => (
                  <div key={gi}>
                    <h4 className="text-xs font-bold text-primary/80 tracking-widest uppercase mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-primary/40" />
                      {group.heading}
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item, ii) => (
                        <motion.li
                          key={ii}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: ii * 0.04 }}
                          className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <span className="mt-1 w-2 h-2 rounded-full bg-slate-300 group-hover/item:bg-primary shrink-0 transition-colors" />
                          <div>
                            <p className="text-sm font-semibold text-slate-700 group-hover/item:text-primary transition-colors leading-snug">
                              {item.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 p-8 rounded-2xl bg-primary flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-primary/20"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Need a full material list or bill of quantities?</h3>
            <p className="text-primary-foreground/80 text-sm">Send us your project requirements on WhatsApp and we'll respond with pricing within 24 hours.</p>
          </div>
          <a
            href="https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20have%20a%20project%20requiring%20pipes%2C%20steel%20or%20chemicals.%20Please%20assist%20with%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-pipes-steel-cta"
            className="shrink-0 flex items-center gap-2 bg-white hover:bg-slate-50 text-primary px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Send Project Requirements
          </a>
        </motion.div>
      </div>
    </section>
  );
}
