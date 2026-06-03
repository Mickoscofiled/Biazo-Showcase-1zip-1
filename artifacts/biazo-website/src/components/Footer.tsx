import logoPath from "@assets/biazo-logo-transparent.png";

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
    <footer className="bg-slate-900 text-slate-300 py-14 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="grid md:grid-cols-4 gap-8 mb-10"
        >
          <motion.div variants={itemVariant} className="md:col-span-2">
            <img
              src={logoPath}
              alt="Biazo Logo"
              data-testid="img-footer-logo"
              className="h-16 w-auto object-contain mb-6 brightness-0 invert opacity-90"
            />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 mb-6">
              Biazo International General Trading FZ-LLC is a premier general trading company bridging UAE and East Africa with high-quality industrial supplies and solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:sales@biazointernational.com"
                data-testid="link-footer-email"
                className="text-xs text-slate-400 hover:text-white transition-colors bg-slate-800/60 px-4 py-2 rounded-full active:scale-95 border border-slate-700/50 hover:border-primary/50 hover:bg-primary/10 shadow-sm"
              >
                sales@biazointernational.com
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Sectors", "Products", "Statistics", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>+971 50 462 0492</li>
              <li>+971 54 551 6485</li>
              <li>+971 52 486 0664</li>
              <li className="pt-2">
                <a href="https://www.biazointernational.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.biazointernational.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500"
        >
          <p>&copy; {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <p>RAKEZ Business Zone, Ras Al Khaimah, UAE</p>
        </motion.div>
      </div>
    </footer>
  );
}
