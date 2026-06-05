import { motion } from "framer-motion";
import { Tractor, HardHat, Pickaxe, Flame, FlaskConical, Wrench, PipetteIcon, AirVent, Monitor, Shield, Truck } from "lucide-react";

import agriImg from "@/assets/sectors/agriculture.png";
import constImg from "@/assets/sectors/construction.png";
import miningImg from "@/assets/sectors/mining.png";
import oilImg from "@/assets/sectors/oil-gas.png";
import chemImg from "@/assets/sectors/chemicals.png";
import weldingImg from "@/assets/sectors/cutting-welding.jpg";
import hdpeImg from "@/assets/sectors/hdpe-pipes.jpg";
import steelImg from "@/assets/sectors/steel-pipes.jpg";
import ppeImg from "@/assets/sectors/ppe.jpg";
import ivecoImg from "@/assets/sectors/iveco.png";
import pipeFittingsImg from "@/assets/sectors/pipe-fittings.png";
import acImg from "@/assets/sectors/air-conditioners.png";
import itImg from "@/assets/sectors/it-networking.png";

const sectors = [
  { name: "Agriculture Equipment", icon: <Tractor className="w-5 h-5" /> },
  { name: "Construction Equipment", icon: <HardHat className="w-5 h-5" /> },
  { name: "Mining Equipment", icon: <Pickaxe className="w-5 h-5" /> },
  { name: "Oil & Gas", icon: <Flame className="w-5 h-5" /> },
  { name: "Chemicals (Reagents)", icon: <FlaskConical className="w-5 h-5" /> },
  { name: "Cutting and welding equipment and consumables", icon: <Wrench className="w-5 h-5" /> },
  { name: "PPR & HDPE Pipes", icon: <PipetteIcon className="w-5 h-5" /> },
  { name: "Galvanized & Steel Pipes", icon: <PipetteIcon className="w-5 h-5" /> },
  { name: "PPE (Personal Protective Equipment)", icon: <Shield className="w-5 h-5" /> },
  { name: "Air conditioners, Accessories and spare parts", icon: <AirVent className="w-5 h-5" /> },
  { name: "IT Equipment, Networking & Communication", icon: <Monitor className="w-5 h-5" /> },
  { name: "IVECO Truck/Vehicle Spare Parts", icon: <Truck className="w-5 h-5" /> },
  { name: "Pipe Fittings", icon: <PipetteIcon className="w-5 h-5" /> }
];

const sectorImages = [
  { name: "Agriculture Equipment", image: agriImg },
  { name: "Construction Equipment", image: constImg },
  { name: "Mining Equipment", image: miningImg },
  { name: "Oil & Gas", image: oilImg },
  { name: "Chemicals (Reagents)", image: chemImg },
  { name: "Cutting and welding equipment and consumables", image: weldingImg },
  { name: "PPR & HDPE Pipes", image: hdpeImg },
  { name: "Galvanized & Steel Pipes", image: steelImg },
  { name: "PPE (Personal Protective Equipment)", image: ppeImg },
  { name: "Air conditioners, Accessories and spare parts", image: acImg },
  { name: "IT Equipment, Networking & Communication", image: itImg },
  { name: "IVECO Truck/Vehicle Spare Parts", image: ivecoImg },
  { name: "Pipe Fittings", image: pipeFittingsImg },
];

export default function Activities() {
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
    <section id="sectors" className="py-28 bg-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(100,149,237,0.03),transparent_70%)]" />
      {/* clean bg */}

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
        >
          <motion.div
            variants={itemVariant}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Industries We Serve
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-800"
          >
            Key Activities & Sectors
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-lg text-slate-600 max-w-2xl mx-auto mb-16"
          >
            We supply essential materials and equipment to pivotal industries driving economic growth across the Continent and the UAE.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16"
        >
          {sectorImages.map((sector, i) => (
            <motion.div
              key={sector.name}
              variants={itemVariant}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg cursor-default hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-slate-900">
                <img
                  src={sector.image}
                  alt={sector.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {sector.name}
                </h3>
                <div className="h-1 w-8 bg-primary rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-blue-100 border border-blue-200 max-w-3xl mx-auto"
        >
          <p className="text-slate-600 leading-relaxed text-lg">
            Leveraging our dual-hub operations in the <span className="text-slate-800 font-semibold">UAE</span> and <span className="text-slate-800 font-semibold">Uganda</span>, we deliver high-performance procurement services across the Continent, anchored by a commitment to operational transparency and efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

