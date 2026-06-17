import logoPath from "@/assets/biazo-logo-new-transparent.png";
import { motion } from "framer-motion";
import { MapPin, Building, Mail, Globe } from "lucide-react";

export default function Footer() {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
  };

  return (
    <footer className="relative bg-[#0f172a] text-slate-400 pt-24 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#7391D1]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(115,145,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(115,145,209,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Section: Our Locations */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="grid md:grid-cols-[1fr_1.5fr] gap-10 mb-16 pb-16 border-b border-white/5"
        >
          <motion.div variants={itemVariant} className="flex flex-col justify-center">
            <h3 className="text-white text-3xl font-bold mb-4">Our Locations</h3>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              We are strategically positioned to serve our clients seamlessly across the Middle East and East Africa, ensuring rapid supply and premium support.
            </p>
          </motion.div>
          <motion.div variants={itemVariant} className="grid sm:grid-cols-3 gap-6">
             <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 rounded-3xl p-8 shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                   <Building size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">UAE Headquarters</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">Ras Al Khaimah, UAE<br/>RAKEZ Business Zone-FZ<br/>B4209b10-Business Center 04</p>
             </div>
             <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 rounded-3xl p-8 shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-[#7391D1]/20 flex items-center justify-center mb-6 text-[#7391D1]">
                   <MapPin size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">Dubai Office</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">Abraj Shopping Center<br/>903 Sabka Rd, Deira<br/>Dubai, UAE</p>
             </div>
             <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 rounded-3xl p-8 shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 flex items-center justify-center mb-6 text-[#25D366]">
                   <Globe size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">Branch Offices</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">Ethiopia · Uganda<br/>Malawi · Zimbabwe</p>
             </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Links & Contact */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="grid md:grid-cols-4 gap-12 mb-16"
        >
          <motion.div variants={itemVariant} className="md:col-span-2">
            <img
              src={logoPath}
              alt="Biazo Logo"
              data-testid="img-footer-logo"
              className="h-28 w-auto object-contain mb-8 brightness-0 invert opacity-90 transition-all duration-300 hover:scale-105"
              loading="lazy"
            />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 mb-8 font-medium">
              Biazo International General Trading FZ-LLC is a premier general trading company bridging UAE and East Africa with high-quality industrial supplies and solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:sales@biazointernational.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-email"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-900 transition-colors bg-white hover:bg-blue-50 px-6 py-3 rounded-full active:scale-95 shadow-lg shadow-white/5 hover:shadow-xl"
              >
                <Mail size={16} />
                sales@biazointernational.com
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-90">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {["About Us", "Sectors", "Products", "Statistics", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-90">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="hover:text-white transition-colors cursor-default">+971 50 462 0492</li>
              <li className="hover:text-white transition-colors cursor-default">+971 54 551 6485</li>
              <li className="hover:text-white transition-colors cursor-default">+971 52 486 0664</li>
              <li className="pt-4 border-t border-white/5">
                <a href="https://www.biazointernational.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline underline-offset-4 transition-all duration-300">
                  www.biazointernational.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/5 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-medium"
        >
          <p>&copy; {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <p>Designed for Excellence</p>
        </motion.div>
      </div>
    </footer>
  );
}
