import logoPath from "@/assets/biazo-logo-transparent.webp";
import { motion } from "framer-motion";

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
    <footer className="relative bg-[#0f172a] text-slate-400 py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#7391D1]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(115,145,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(115,145,209,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="grid md:grid-cols-4 gap-8 mb-10"
        >
          <motion.div variants={itemVariant} className="md:col-span-2">
            <img
              src={logoPath}
              alt="Biazo Logo"
              data-testid="img-footer-logo"
              className="h-16 w-auto object-contain mb-6 brightness-0 invert opacity-90"
              loading="lazy"
            />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 mb-6">
              Biazo International General Trading FZ-LLC is a premier general trading company bridging UAE and East Africa with high-quality industrial supplies and solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:sales@biazointernational.com"
                data-testid="link-footer-email"
                className="text-xs text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full active:scale-95 border border-white/10 hover:border-[#7391D1]/50 hover:bg-[#7391D1]/10 shadow-sm"
              >
                sales@biazointernational.com
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Sectors", "Products", "Statistics", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-slate-400 hover:text-[#7391D1] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>+971 50 462 0492</li>
              <li>+971 54 551 6485</li>
              <li>+971 52 486 0664</li>
              <li className="pt-2">
                <a href="https://www.biazointernational.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7391D1] transition-colors">
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
          className="pt-8 border-t border-white/5 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500"
        >
          <p>&copy; {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <p>RAKEZ Business Zone, Ras Al Khaimah, UAE</p>
        </motion.div>
      </div>
    </footer>
  );
}
