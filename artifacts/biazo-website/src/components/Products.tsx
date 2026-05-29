import { motion } from "framer-motion";
import { Wrench, ShieldAlert, Laptop, Zap, Settings, Pipette, FlaskConical, Construction, Car } from "lucide-react";

const products = [
  {
    title: "Automotive & Heavy Equipment",
    icon: <Car className="w-7 h-7 text-blue-600" />,
    items: ["Heavy mining equipment", "Construction machines", "Grease, lubricants & compounds", "Engines", "Tyres", "Spare parts", "Others"],
  },
  {
    title: "Welding Machines & Consumables",
    icon: <Settings className="w-7 h-7 text-blue-600" />,
    items: ["MIG, TIG, Stick, Flux-cored machines", "PPRC Pipes", "Electrodes", "Filler wire", "Shielding gas", "Cutting torch & Tips", "Gloves, Aperon, Full Coverall", "Others"],
  },
  {
    title: "IT Equipment & Accessories",
    icon: <Laptop className="w-7 h-7 text-blue-600" />,
    items: ["Laptops & Accessories", "Printers & Cartridges", "Ethernet cable", "UPS Systems", "Resin joint kit", "Electric & Mining Cables", "Others"],
  },
  {
    title: "Electrical Products",
    icon: <Zap className="w-7 h-7 text-blue-600" />,
    items: ["Contactors", "Overload relays", "Switches and automation", "Plugs and sockets", "Lighting and accessories", "Cable & Wire", "Conduits", "Others"],
  },
  {
    title: "Safety Solutions",
    icon: <ShieldAlert className="w-7 h-7 text-blue-600" />,
    items: ["Mining Safety Gear", "Geological Equipment & Accessories", "Workwear", "Others"],
  },
  {
    title: "Hand Tools & Power Tools",
    icon: <Wrench className="w-7 h-7 text-blue-600" />,
    items: ["Precision Tools", "Power Tools & Accessories", "Garden Tools", "Others"],
  },
  {
    title: "Pipes & Fittings",
    icon: <Pipette className="w-7 h-7 text-blue-600" />,
    items: ["GI Pipes & PPRC Pipes", "HDPE Pipes", "PVC Pipes", "Black Steel Pipes", "Elbows, Tees, Reducers", "Couplings, Unions, Caps", "Plugs, Nipples, Bushings", "Adapters, Flanges", "Others"],
  },
  {
    title: "Steel & Metal",
    icon: <Construction className="w-7 h-7 text-blue-600" />,
    items: ["Mild Steel Plates (HR & CR)", "Stainless & Galvanized Steel", "Chequered Plates", "RHS, Metal Bar", "Section/Channel/Structural", "Wear Plates", "Scaffolding & Formwork", "Others"],
  },
  {
    title: "Industrial & Lab Chemicals",
    icon: <FlaskConical className="w-7 h-7 text-blue-600" />,
    items: ["Water treatment chemicals", "Scale inhibitors", "Antidote & Buffer solution", "Lab chemicals", "Solvents & Adhesives", "Oxidizers & Reducing agents", "Others"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            What We Supply
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-blue-900 mb-4"
          >
            Products & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-600/70 max-w-2xl mx-auto"
          >
            A comprehensive portfolio of high-quality industrial supplies across 9 major categories and more.
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
              className="group bg-white p-7 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="mb-5 bg-blue-50 border border-blue-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className={`text-sm flex items-start gap-2.5 transition-colors ${
                      item === "Others"
                        ? "text-blue-400/60 italic group-hover:text-blue-500/70"
                        : "text-blue-600/55 group-hover:text-blue-600/80"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${item === "Others" ? "bg-blue-200 group-hover:bg-blue-300" : "bg-blue-400 group-hover:bg-blue-600"}`} />
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
