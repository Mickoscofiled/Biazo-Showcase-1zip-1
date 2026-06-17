import { motion } from "framer-motion";
import { Tractor, HardHat, Pickaxe, Flame, FlaskConical, Wrench, PipetteIcon, AirVent, Monitor, Shield, Truck, Hammer, Car, SprayCan } from "lucide-react";

import agriImg from "@/assets/sectors/agriculture.webp";
import constImg from "@/assets/sectors/construction.webp";
import miningImg from "@/assets/sectors/mining.webp";
import oilImg from "@/assets/sectors/oil-gas.webp";
import chemImg from "@/assets/sectors/chemicals.webp";
import weldingImg from "@/assets/sectors/cutting-welding.jpg";
import hdpeImg from "@/assets/sectors/hdpe-pipes.jpg";
import steelImg from "@/assets/sectors/steel-pipes.jpg";
import ppeImg from "@/assets/sectors/ppe.jpg";
import ivecoImg from "@/assets/sectors/iveco.webp";
import pipeFittingsImg from "@/assets/sectors/pipe-fittings.webp";
import handToolsImg from "@/assets/sectors/hand-tools.jpg";
import toyotaImg from "@/assets/sectors/toyota-parts.jpg";
import cleaningImg from "@/assets/sectors/cleaning-supplies.jpg";
import acImg from "@/assets/sectors/air-conditioners.webp";
import itImg from "@/assets/sectors/it-networking.webp";

const sectorImages = [
  { name: "Agricultural Equipment", image: agriImg },
  { name: "Construction Equipment", image: constImg },
  { name: "Mining Equipment", image: miningImg },
  { name: "Oil & Gas", image: oilImg },
  { name: "Chemicals (Reagents)", image: chemImg },
  { name: "Cutting & Welding", image: weldingImg },
  { name: "PPR & HDPE Pipes", image: hdpeImg },
  { name: "Galvanized & Steel Pipes", image: steelImg },
  { name: "PPE Equipment", image: ppeImg },
  { name: "Air Conditioners", image: acImg },
  { name: "IT & Networking", image: itImg },
  { name: "IVECO Spare Parts", image: ivecoImg },
  { name: "Pipe Fittings", image: pipeFittingsImg },
  { name: "Hand Tools", image: handToolsImg },
  { name: "Toyota Genuine Parts", image: toyotaImg },
  { name: "Cleaning Supplies", image: cleaningImg },
];

export default function Activities() {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
  };
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
  };

  return (
    <section id="sectors" className="py-28 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Bubbly background blobs */}
      <div className="absolute top-20 right-[-100px] w-[450px] h-[450px] bg-blue-100 rounded-full blur-[110px] opacity-50" />
      <div className="absolute bottom-20 left-[-80px] w-[380px] h-[380px] bg-indigo-100 rounded-full blur-[100px] opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-100 rounded-full blur-[80px] opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
        >
          <motion.div variants={itemVariant}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            ✦ Industries We Serve
          </motion.div>
          <motion.h2 variants={itemVariant} className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-800">
            Key Activities & Sectors
          </motion.h2>
          <motion.p variants={itemVariant} className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
            We supply essential materials and equipment to pivotal industries driving economic growth across the Continent and the UAE.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16"
        >
          {sectorImages.map((sector, i) => (
            <motion.div
              key={sector.name}
              variants={itemVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-white p-3 rounded-[32px] shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 border-none cursor-pointer flex flex-col"
            >
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] mb-4 bg-slate-100">
                <img src={sector.image} alt={sector.name} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="px-2 pb-2 text-center flex-grow flex items-center justify-center">
                <h3 className="text-[13px] md:text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors leading-tight">
                  {sector.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/80 shadow-xl shadow-blue-100 max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-70" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full blur-xl opacity-60" />
          <p className="text-slate-600 leading-relaxed text-lg relative z-10">
            Leveraging our dual-hub operations in the <span className="text-slate-800 font-semibold">UAE</span> and <span className="text-slate-800 font-semibold">Uganda</span>, we deliver high-performance procurement services across the Continent, anchored by a commitment to operational transparency and efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
