import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";
import missionImg from "@/assets/mission.webp";
import visionImg from "@/assets/vision.webp";
import goalImg from "@/assets/goal.webp";

export default function Mission() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-9 h-9 text-blue-600" />,
      content: "To serve, support, and collaborate with our clients to deliver timely services with commitment, integrity, and professionalism.",
      image: missionImg
    },
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-9 h-9 text-sky-500" />,
      content: "To be a leading, trusted partner that delivers outstanding, timely services and creates significant value.",
      image: visionImg
    },
    {
      title: "Our Goal",
      icon: <TrendingUp className="w-9 h-9 text-blue-500" />,
      content: "Global leader in providing innovative and comprehensive solutions to empower industries across continents.",
      image: goalImg
    }
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section id="mission" className="py-28 bg-blue-50 dark:bg-slate-950/80 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariant}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Our Foundation
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-100"
          >
            What Drives Us
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={itemVariant}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative p-8 rounded-2xl border border-blue-100 dark:border-slate-800 hover:border-primary/20 bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden min-h-[320px] flex flex-col justify-end"
            >
              {/* Soft Background Image */}
              <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent z-10 h-full" />
                <img 
                  src={card.image} 
                  alt="" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top mix-blend-multiply" 
                />
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-primary/10 transition-all z-0" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-primary/5 border border-primary/10 inline-block rounded-xl group-hover:scale-110 transition-transform">
                  <div className="text-primary">{card.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
