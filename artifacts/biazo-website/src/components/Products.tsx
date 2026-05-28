import { motion } from "framer-motion";
import { Wrench, ShieldAlert, Laptop, Zap, Settings, Pipette, FlaskConical, Map, Construction, Car } from "lucide-react";

const products = [
  {
    title: "Automotive & Heavy Equipment",
    icon: <Car className="w-8 h-8 text-primary" />,
    items: ["Heavy mining equipment", "Construction machines", "Grease/lubricants/compounds", "Engines", "Tyres", "Spare parts"]
  },
  {
    title: "Welding Machines & Consumables",
    icon: <Settings className="w-8 h-8 text-primary" />,
    items: ["MIG, TIG, Stick, Flux-cored machines", "PPRC Pipes", "Electrodes", "Filler wire", "Shielding gas", "Cutting torch, Tips", "Gloves, Aperon, Full Coverall"]
  },
  {
    title: "IT Equipment & Accessories",
    icon: <Laptop className="w-8 h-8 text-primary" />,
    items: ["Laptops & Accessories", "Printers & Cartridges", "Ethernet cable", "UPS Systems", "Resin joint kit", "Electric & Mining Cables"]
  },
  {
    title: "Electrical Products",
    icon: <Zap className="w-8 h-8 text-primary" />,
    items: ["Contactors", "Overload relays", "Switches and automation", "Plugs and sockets", "Lighting and accessories"]
  },
  {
    title: "Safety Solutions",
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    items: ["Mining Safety Gear", "Geological Equipment & Accessories", "Workwear"]
  },
  {
    title: "Hand Tools & Power Tools",
    icon: <Wrench className="w-8 h-8 text-primary" />,
    items: ["Precision Tools", "Power Tools & Accessories", "Garden Tools"]
  },
  {
    title: "Pipes & Fittings",
    icon: <Pipette className="w-8 h-8 text-primary" />,
    items: ["GI Pipes", "PPRC Pipes", "Elbows, Tees, Reducers", "Couplings, Unions, Caps", "Plugs, Nipples, Bushings", "Adapters, Flanges"]
  },
  {
    title: "Steel & Metal",
    icon: <Construction className="w-8 h-8 text-primary" />,
    items: ["Mild Steel Plates (HR & CR)", "Stainless Steel", "Galvanized Steel Plates", "Chequered Plates", "RHS, Metal Bar", "Section/Channel/Structural", "Wear Plates", "Scaffolding & Formwork"]
  },
  {
    title: "Industrial & Laboratory Chemicals",
    icon: <FlaskConical className="w-8 h-8 text-primary" />,
    items: ["Water treatment chemicals", "Scale inhibitors", "Antidote", "Buffer solution", "Lab chemicals", "Solvents & Adhesives", "Oxidizers & Reducing agents"]
  },
  {
    title: "Geological Catalogue Products",
    icon: <Map className="w-8 h-8 text-primary" />,
    items: ["PVC Flagging Tapes, Flags, Pin Tags", "Triangle Markers, Alutags", "Aluminium Labels, Core Tray Tags", "Steel/Plastic Tags, Field Books", "Rite in the Rain products", "Paint Markers, Tungsten Tipped Scribe", "Protractors, Inclinometer", "Triangular Scales, Sample Storage", "Core & More, Exploration & Navigation", "Gold Mining Accessories"]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Products & Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive portfolio of high-quality industrial supplies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 bg-white dark:bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm border border-border group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
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
