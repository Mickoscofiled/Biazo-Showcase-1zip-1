import { motion } from "framer-motion";
import { Wrench, Laptop, Zap, Settings, Pipette, FlaskConical, Construction, Car } from "lucide-react";

const products = [
  {
    title: "Automotive & Heavy Equipment",
    icon: <Car className="w-7 h-7 text-blue-600" />,
    items: ["Heavy mining equipment", "Construction machines", "Grease, lubricants & compounds", "Engines", "Tyres", "Spare parts", "Others"],
  },
  {
    title: "Welding Machines & Consumables",
    icon: <Settings className="w-7 h-7 text-blue-600" />,
    items: ["MIG, TIG, Stick, Flux-cored machines", "Electrodes", "Filler wire", "Shielding gas", "Cutting torch & Tips", "Gloves, Aperon, Full Coverall", "Others"],
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
    <section id="products" className="py-28 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
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
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            What We Supply
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
          >
            Products & Services
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A comprehensive portfolio of high-quality industrial supplies across 9 major categories and more.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariant}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              data-testid={`card-product-${idx}`}
              className="group bg-blue-50 p-7 rounded-2xl border border-blue-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="mb-5 bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                <div className="text-primary">{category.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className={`text-sm flex items-start gap-2.5 transition-colors ${
                      item === "Others"
                        ? "text-slate-400 italic group-hover:text-slate-500"
                        : "text-slate-600 group-hover:text-slate-800"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${item === "Others" ? "bg-slate-200 group-hover:bg-slate-300" : "bg-primary/60 group-hover:bg-primary"}`} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
