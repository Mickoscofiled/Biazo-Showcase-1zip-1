import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Settings, Laptop, Zap, Wrench } from "lucide-react";
import mockupImg from "@/assets/brands-mockup.png";

const brandDomains: Record<string, string> = {
  "MAN": "man.eu",
  "Shell": "shell.com",
  "CAT": "caterpillar.com",
  "Toyota": "toyota.com",
  "Mobil": "mobil.com",
  "Sullair": "sullair.com",
  "Belzona": "belzona.com",
  "Bridgestone": "bridgestone.com",
  "Bestolife": "bestolife.com",
  "Moly Slip": "molyslip.com",
  "TotalEnergies": "totalenergies.com",
  "Storike": "storike.com",
  "XCMG": "xcmg.com",
  "Perkins": "perkins.com",
  "Atlas Copco": "atlascopco.com",
  "IVECO": "iveco.com",
  "Yokohama Tyres": "yokohamatire.com",
  "CIGWELD": "cigweld.com.au",
  "AFROX": "afrox.co.za",
  "Lincoln Electric": "lincolnelectric.com",
  "TWECO": "esab.com",
  "Harris": "harrisproductsgroup.com",
  "Victor": "esab.com",
  "ESAB": "esab.com",
  "Miller": "millerwelds.com",
  "Bossweld": "bossweld.com.au",
  "APC": "apc.com",
  "CyberPower": "cyberpowersystems.com",
  "Dell": "dell.com",
  "D-Link": "dlink.com",
  "Ducab": "ducab.com",
  "Huadong": "huadongcable.com",
  "Nexans": "nexans.com",
  "RR Kabel": "rrkabel.com",
  "OSRAM": "osram.com",
  "Philips": "philips.com",
  "Schneider Electric": "se.com",
  "Gewiss": "gewiss.com",
  "Chint Electric": "chintglobal.com",
  "ABB": "abb.com",
  "Legrand": "legrand.com",
  "Hager": "hager.com",
  "Mitsubishi Electric": "mitsubishielectric.com",
  "Siemens": "siemens.com",
  "Eaton": "eaton.com",
  "3M": "3m.com",
  "HellermannTyton": "hellermanntyton.com",
  "Bosch": "bosch.com",
  "Makita": "makitatools.com",
  "Ronix": "ronixtools.com",
  "Gedore": "gedore.com",
  "Kindrick": "kendrick.com",
  "Kapro": "kapro.com",
  "Total": "totaltools.com.au",
  "Fluke": "fluke.com",
  "Stanley": "stanleytools.com",
  "Tolsen": "tolsentools.com"
};

const BrandCard = ({ name, index }: { name: string, index: number }) => {
  const domain = brandDomains[name] || `${name.toLowerCase().replace(/\s+/g, '')}.com`;
  const [imgSrc, setImgSrc] = useState(`https://logo.clearbit.com/${domain}`);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
      className="flex items-center justify-center w-28 h-12 md:w-32 md:h-14 bg-white rounded-xl shadow-sm border border-slate-200/60 p-2.5 hover:shadow-md hover:border-slate-300 transition-all duration-300"
    >
      {!hasError ? (
        <img 
          src={imgSrc} 
          alt={`${name} logo`} 
          className="w-full h-full object-contain"
          onError={() => {
            if (imgSrc.includes('clearbit')) {
              setImgSrc(`https://icons.duckduckgo.com/ip3/${domain}.ico`);
            } else if (imgSrc.includes('duckduckgo')) {
              setImgSrc(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`);
            } else {
              setHasError(true);
            }
          }}
        />
      ) : (
        <span className="text-[10px] md:text-xs font-bold text-slate-400 text-center line-clamp-1">{name}</span>
      )}
    </motion.div>
  );
};

const WA_URL =
  "https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20inquire%20about%20your%20brand%20products.";

const brands = [
  {
    icon: <Car className="w-7 h-7 text-blue-600" />,
    title: "Automotive",
    subtitle: "Heavy Equipment & Vehicles",
    description: "Automotive vehicles & parts · Heavy mining equipment · Construction machines · Grease, lubricants & compounds · Engines · Tyres · Spare parts",
    brandNames: ["MAN","Shell","CAT","Toyota","Mobil","Sullair","Belzona","Bridgestone","Bestolife","Moly Slip","TotalEnergies","Storike","XCMG","Perkins","Atlas Copco","IVECO","Yokohama Tyres"],
  },
  {
    icon: <Settings className="w-7 h-7 text-blue-600" />,
    title: "Welding Machines & Consumables",
    subtitle: "MIG · TIG · STICK · FLUX-CORED",
    description: "Welding machines · Electrodes · Filler wire · Shielding gas · Cutting torch & Tips · Gloves · Aperon · Full Coverall",
    brandNames: ["CIGWELD","AFROX","Lincoln Electric","TWECO","Harris","Victor","ESAB","Miller","Bossweld"],
  },
  {
    icon: <Laptop className="w-7 h-7 text-blue-600" />,
    title: "IT Equipment, Accessories & Cables",
    subtitle: "Computing · Networking · Cables",
    description: "Laptops & Accessories · Printers & Cartridges · Ethernet cable · UPS Systems · Resin joint kit · Electric & Mining Cables",
    brandNames: ["APC","CyberPower","Dell","D-Link","Ducab","Huadong","Nexans","RR Kabel"],
  },
  {
    icon: <Zap className="w-7 h-7 text-blue-600" />,
    title: "Electrical Products",
    subtitle: "Automation · Lighting · Control",
    description: "Contactors · Overload relays · Switches & automation · Plugs & sockets · Lighting & accessories",
    brandNames: ["OSRAM","Philips","Schneider Electric","Gewiss","Chint Electric","ABB","Legrand","Hager","Mitsubishi Electric","Siemens","Eaton","3M","HellermannTyton"],
  },
  {
    icon: <Wrench className="w-7 h-7 text-blue-600" />,
    title: "Hand & Power Tools",
    subtitle: "Precision · Power · Garden Tools",
    description: "Hand tools · Precision tools · Power tools & accessories · Garden tools",
    brandNames: ["Bosch","Makita","Ronix","Gedore","Kindrick","Kapro","Total","Fluke","Stanley","HellermannTyton","Tolsen"],
  },
];

export default function OurBrands() {
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
    <section id="brands" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(115,145,209,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(115,145,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(115,145,209,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

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
            What We Carry
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
          >
            Our Brands
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We represent and supply world-class brands across five major product categories, bringing trusted global manufacturers to East Africa.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full cursor-pointer rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/60 hover:shadow-[0_40px_100px_rgba(59,130,246,0.25)] transition-shadow duration-500"
          >
            <img 
              src={mockupImg} 
              alt="Our Brands" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-brands-whatsapp"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20c05c] text-white px-8 py-4 rounded-full active:scale-95 font-semibold text-base transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:scale-105"
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
