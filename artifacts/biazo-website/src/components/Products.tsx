import { motion } from "framer-motion";
import { Wrench, ShieldAlert, Laptop, Zap, Settings, Pipette, FlaskConical, Map, Construction, Car } from "lucide-react";

const products = [
  {
    title: "Automotive & Heavy Equipment",
    icon: <Car className="w-7 h-7 text-blue-400" />,
    items: ["Heavy mining equipment", "Construction machines", "Grease, lubricants & compounds", "Engines", "Tyres", "Spare parts"],
    accent: "from-blue-600/15 to-blue-900/5"
  },
  {
    title: "Welding Machines & Consumables",
    icon: <Settings className="w-7 h-7 text-blue-400" />,
    items: ["MIG, TIG, Stick, Flux-cored machines", "PPRC Pipes", "Electrodes", "Filler wire", "Shielding gas", "Cutting torch & Tips", "Gloves, Aperon, Full Coverall"],
    accent: "from-indigo-600/15 to-indigo-900/5"
  },
  {
    title: "IT Equipment & Accessories",
    icon: <Laptop className="w-7 h-7 text-blue-400" />,
    items: ["Laptops & Accessories", "Printers & Cartridges", "Ethernet cable", "UPS Systems", "Resin joint kit", "Electric & Mining Cables"],
    accent: "from-cyan-600/15 to-cyan-900/5"
  },
  {
    title: "Electrical Products",
    icon: <Zap className="w-7 h-7 text-blue-400" />,
    items: ["Contactors", "Overload relays", "Switches and automation", "Plugs and sockets", "Lighting and accessories"],
    accent: "from-blue-600/15 to-blue-900/5"
  },
  {
    title: "Safety Solutions",
    icon: <ShieldAlert className="w-7 h-7 text-blue-400" />,
    items: ["Mining Safety Gear", "Geological Equipment & Accessories", "Workwear"],
    accent: "from-indigo-600/15 to-indigo-900/5"
  },
  {
    title: "Hand Tools & Power Tools",
    icon: <Wrench className="w-7 h-7 text-blue-400" />,
    items: ["Precision Tools", "Power Tools & Accessories", "Garden Tools"],
    accent: "from-cyan-600/15 to-cyan-900/5"
  },
  {
    title: "Pipes & Fittings",
    icon: <Pipette className="w-7 h-7 text-blue-400" />,
    items: ["GI Pipes & PPRC Pipes", "Elbows, Tees, Reducers", "Couplings, Unions, Caps", "Plugs, Nipples, Bushings", "Adapters, Flanges"],
    accent: "from-blue-600/15 to-blue-900/5"
  },
  {
    title: "Steel & Metal",
    icon: <Construction className="w-7 h-7 text-blue-400" />,
    items: ["Mild Steel Plates (HR & CR)", "Stainless & Galvanized Steel", "Chequered Plates", "RHS, Metal Bar", "Section/Channel/Structural", "Wear Plates", "Scaffolding & Formwork"],
    accent: "from-indigo-600/15 to-indigo-900/5"
  },
  {
    title: "Industrial & Lab Chemicals",
    icon: <FlaskConical className="w-7 h-7 text-blue-400" />,
    items: ["Water treatment chemicals", "Scale inhibitors", "Antidote & Buffer solution", "Lab chemicals", "Solvents & Adhesives", "Oxidizers & Reducing agents"],
    accent: "from-cyan-600/15 to-cyan-900/5"
  },
  {
    title: "Geological Catalogue",
    icon: <Map className="w-7 h-7 text-blue-400" />,
    items: ["PVC Flagging Tapes, Flags, Pin Tags", "Triangle Markers, Alutags", "Aluminium Labels, Core Tray Tags", "Field Books, Rite in the Rain products", "Paint Markers, Tungsten Tipped Scribe", "Protractors, Inclinometer, Scales", "Sample Storage, Core & More", "Exploration & Navigation tools", "Gold Mining Accessories"],
    accent: "from-blue-600/15 to-blue-900/5"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#04101f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            What We Supply
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Products & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-200/60 max-w-2xl mx-auto"
          >
            A comprehensive portfolio of high-quality industrial supplies across 10 major categories.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              data-testid={`card-product-${idx}`}
              className={`group bg-gradient-to-br ${category.accent} bg-white/[0.02] p-7 rounded-2xl border border-blue-900/30 hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300`}
            >
              <div className="mb-5 bg-blue-500/10 border border-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-blue-200/50 flex items-start gap-2.5 group-hover:text-blue-200/70 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 mt-1.5 shrink-0 group-hover:bg-blue-400 transition-colors" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
