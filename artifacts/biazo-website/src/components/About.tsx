import { motion } from "framer-motion";
import { Building2, Globe2, History } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Dual Hub Operations",
      desc: "Strategically positioned with operations in RAKEZ Business Zone, UAE and Uganda to serve East Africa efficiently."
    },
    {
      icon: <History className="w-6 h-6 text-primary" />,
      title: "Decade of Excellence",
      desc: "Sister company established in 2008, bringing over 15 years of deep expertise in procurement and supply chain management."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-primary" />,
      title: "Global Network",
      desc: "Robust international supply chain connecting top-tier manufacturers to vital sectors across emerging markets."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">A Legacy of Trust and Global Reach</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Biazo International General Trading FZ-LLC, incorporated in September 2022 in Ras Al Khaimah (RAKEZ), UAE, stands as a premier trading entity bridging continents.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As the sister company to Biazo International Ltd in Uganda (established 2008), we leverage over a decade of hands-on experience in procurement and supply chain management to deliver exceptional value to our partners in East Africa and beyond.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">2008</h4>
                <p className="text-sm font-medium text-foreground uppercase tracking-wide">Uganda Roots Established</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">2022</h4>
                <p className="text-sm font-medium text-foreground uppercase tracking-wide">UAE Hub Launched</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-border"
              >
                <div className="shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
