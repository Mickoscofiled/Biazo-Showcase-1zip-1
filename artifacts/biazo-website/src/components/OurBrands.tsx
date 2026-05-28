import { motion } from "framer-motion";
import { Car, Settings, Laptop, Zap, ShieldCheck, Wrench } from "lucide-react";

const brands = [
  {
    icon: <Car className="w-8 h-8 text-blue-400" />,
    title: "Automotive",
    subtitle: "Heavy Equipment & Vehicles",
    items: [
      "Automotive vehicles & parts",
      "Heavy mining equipment",
      "Construction machines",
      "Grease, lubricants & compounds",
      "Engines",
      "Tyres",
      "Spare parts",
    ],
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-400" />,
    title: "Welding Machines",
    subtitle: "Machines & Consumables",
    items: [
      "Welding machines — MIG, TIG, STICK, FLUX-CORED",
      "PPRC Pipes",
      "Electrodes",
      "Filler wire",
      "Shielding gas",
      "Cutting torch & Tips",
      "Gloves, Aperon, Full Coverall",
    ],
  },
  {
    icon: <Laptop className="w-8 h-8 text-blue-400" />,
    title: "IT Equipment",
    subtitle: "Accessories & Cables",
    items: [
      "Laptops & Accessories",
      "Printers & Cartridges",
      "Ethernet cable",
      "UPS Systems",
      "Resin joint kit",
      "Electric & Mining Cables",
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: "Electrical Products",
    subtitle: "Automation & Lighting",
    items: [
      "Contactors",
      "Overload relays",
      "Switches & automation",
      "Plugs & sockets",
      "Lighting & accessories",
    ],
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    title: "Safety Solutions",
    subtitle: "Mining & Field Safety",
    items: [
      "Mining safety gear",
      "Geological equipment & accessories",
      "Workwear & PPE",
    ],
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-400" />,
    title: "Hand & Power Tools",
    subtitle: "Precision & Garden Tools",
    items: [
      "Precision tools",
      "Power tools & accessories",
      "Garden tools",
    ],
  },
];

export default function OurBrands() {
  return (
    <section id="brands" className="py-24 bg-[#060f20] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            What We Carry
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-200/60 max-w-2xl mx-auto"
          >
            Biazo International represents and supplies a wide portfolio of product lines across six major brand categories, sourced from trusted global manufacturers.
          </motion.p>
        </div>

        {/* Brand cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              data-testid={`card-brand-${i}`}
              className="group relative p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/30 overflow-hidden"
            >
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl -mr-6 -mt-6 group-hover:bg-blue-500/12 transition-all duration-500" />

              {/* Icon + header */}
              <div className="flex items-start gap-4 mb-6 relative">
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  {brand.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                    {brand.title}
                  </h3>
                  <p className="text-xs text-blue-400/60 font-medium mt-0.5">{brand.subtitle}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-blue-900/40 mb-5 group-hover:bg-blue-700/40 transition-colors" />

              {/* Items */}
              <ul className="space-y-2">
                {brand.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-blue-200/55 group-hover:text-blue-200/80 transition-colors"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0 group-hover:bg-blue-400 transition-colors" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/971524860664?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20inquire%20about%20your%20brand%20products."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-brands-whatsapp"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20c05c] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-xl shadow-green-600/20 hover:shadow-green-500/30 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Enquire About Our Brands on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
