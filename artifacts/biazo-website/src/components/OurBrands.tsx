import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Settings, Laptop, Zap, Wrench } from "lucide-react";
import twecoLogo from "@/assets/brands/tweco.png";
import ducabLogo from "@/assets/brands/ducab.png";

const WA_URL =
  "https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20inquire%20about%20your%20brand%20products.";

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
  "Storike": "cnstorike.com",
  "XCMG": "xcmg.com",
  "Perkins": "https://upload.wikimedia.org/wikipedia/commons/1/14/Perkins-Logo.svg",
  "Atlas Copco": "atlascopco.com",
  "IVECO": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Iveco_Logo_2023.svg",
  "Yokohama Tyres": "yokohamatire.com",
  "CIGWELD": "cigweld.com.au",
  "AFROX": "afrox.co.za",
  "Lincoln Electric": "lincolnelectric.com",
  "TWECO": twecoLogo,
  "Harris": "harrisproductsgroup.com",
  "Victor": "victortechnologies.com",
  "ESAB": "https://upload.wikimedia.org/wikipedia/commons/4/42/ESAB.svg",
  "Miller": "millerwelds.com",
  "Bossweld": "bossweld.com.au",
  "APC": "apc.com",
  "CyberPower": "cyberpowersystems.com",
  "Dell": "dell.com",
  "D-Link": "dlink.com",
  "Ducab": ducabLogo,
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
  "Mitsubishi Electric": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Mitsubishi_Motors_SVG_logo.svg",
  "Siemens": "siemens.com",
  "Eaton": "eaton.com",
  "3M": "3m.com",
  "HellermannTyton": "https://upload.wikimedia.org/wikipedia/commons/7/70/HellermannTyton-Logo.svg",
  "Bosch": "bosch.com",
  "Makita": "https://upload.wikimedia.org/wikipedia/commons/7/71/Makita_Logo.svg",
  "Ronix": "ronixtools.com",
  "Gedore": "gedore.com",
  "Kindrick": "kindricktools.com",
  "Kapro": "kapro.com",
  "Total": "totaltools.com.au",
  "Fluke": "fluke.com",
  "Stanley": "stanleytools.com",
  "Tolsen": "tolsentools.com"
};

const BrandPill = ({ name }: { name: string }) => {
  const domainOrUrl = brandDomains[name] || `${name.toLowerCase().replace(/\s+/g, "")}.com`;
  let initialSrc = "";
  if (domainOrUrl.startsWith("http") || domainOrUrl.startsWith("/") || domainOrUrl.startsWith(".") || domainOrUrl.match(/\.(png|jpe?g|svg|webp|gif)$/i)) {
    initialSrc = domainOrUrl;
  } else if (domainOrUrl.startsWith("favicon:")) {
    initialSrc = `https://www.google.com/s2/favicons?domain=${domainOrUrl.replace("favicon:", "")}&sz=128`;
  } else {
    initialSrc = `https://logo.clearbit.com/${domainOrUrl}`;
  }

  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.includes("clearbit")) {
      const cleanDomain = domainOrUrl.replace("favicon:", "");
      setImgSrc(`https://www.google.com/s2/favicons?domain=${cleanDomain}&sz=128`);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-1.5 bg-white border border-slate-200 rounded-xl px-4 py-3 cursor-pointer hover:border-blue-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)] transition-all duration-200 ease-out group"
      style={{ minWidth: "90px", width: "100px" }}
    >
      {!hasError ? (
        <img
          src={imgSrc}
          alt={`${name} logo`}
          onError={handleError}
          className="object-contain"
          style={{ maxWidth: "72px", maxHeight: "32px" }}
          loading="lazy"
        />
      ) : (
        <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
          <span className="text-sm font-bold text-blue-400">{name.charAt(0)}</span>
        </div>
      )}
      <span className="text-[10px] font-semibold text-slate-500 text-center leading-tight line-clamp-1 w-full group-hover:text-blue-600 transition-colors">{name}</span>
    </div>
  );
};

const brands = [
  {
    icon: <Car className="w-6 h-6 text-blue-600" />,
    title: "Automotive",
    subtitle: "Heavy Equipment & Vehicles",
    description: "Automotive vehicles & parts · Heavy mining equipment · Construction machines · Grease, lubricants & compounds · Engines · Tyres · Spare parts",
    brandNames: ["MAN","Shell","CAT","Toyota","Mobil","Sullair","Belzona","Bridgestone","Bestolife","Moly Slip","TotalEnergies","Storike","XCMG","Perkins","Atlas Copco","IVECO","Yokohama Tyres"],
  },
  {
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    title: "Welding Machines & Consumables",
    subtitle: "MIG · TIG · STICK · FLUX-CORED",
    description: "Welding machines · Electrodes · Filler wire · Shielding gas · Cutting torch & Tips · Gloves · Aperon · Full Coverall",
    brandNames: ["CIGWELD","AFROX","Lincoln Electric","TWECO","Harris","Victor","ESAB","Miller","Bossweld"],
  },
  {
    icon: <Laptop className="w-6 h-6 text-blue-600" />,
    title: "IT Equipment, Accessories & Cables",
    subtitle: "Computing · Networking · Cables",
    description: "Laptops & Accessories · Printers & Cartridges · Ethernet cable · UPS Systems · Resin joint kit · Electric & Mining Cables",
    brandNames: ["APC","CyberPower","Dell","D-Link","Ducab","Huadong","Nexans","RR Kabel"],
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "Electrical Products",
    subtitle: "Automation · Lighting · Control",
    description: "Contactors · Overload relays · Switches & automation · Plugs & sockets · Lighting & accessories",
    brandNames: ["OSRAM","Philips","Schneider Electric","Gewiss","Chint Electric","ABB","Legrand","Hager","Mitsubishi Electric","Siemens","Eaton","3M","HellermannTyton"],
  },
  {
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    title: "Hand & Power Tools",
    subtitle: "Precision · Power · Garden Tools",
    description: "Hand tools · Precision tools · Power tools & accessories · Garden tools",
    brandNames: ["Bosch","Makita","Ronix","Gedore","Kindrick","Kapro","Total","Fluke","Stanley","HellermannTyton","Tolsen"],
  },
];

export default function OurBrands() {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section id="brands" className="py-24 bg-[#f0f4ff] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(115,145,209,0.07),transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            What We Carry
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Brands</h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            We represent and supply world-class brands across five major product categories, bringing trusted global manufacturers to East Africa.
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="space-y-5"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.title}
              variants={itemVariant}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 shrink-0">
                    {brand.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 leading-tight">{brand.title}</h3>
                    <p className="text-xs text-blue-500 font-semibold tracking-wide uppercase mt-0.5">{brand.subtitle}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{brand.description}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100 mb-5" />

                {/* Brand Pills */}
                <div className="flex flex-wrap gap-3">
                  {brand.brandNames.map((name) => (
                    <BrandPill key={name} name={name} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20c05c] text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:scale-105 active:scale-95"
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
