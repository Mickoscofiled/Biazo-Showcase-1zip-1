import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";
import missionImg from "@/assets/mission.webp";
import visionImg from "@/assets/vision.webp";
import goalImg from "@/assets/goal.webp";

export default function Mission() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-9 h-9 text-white" />,
      content: "To serve, support, and collaborate with our clients to deliver timely services with commitment, integrity, and professionalism.",
      image: missionImg,
      gradient: "from-blue-400 to-indigo-500",
      glow: "shadow-blue-200",
      blob1: "bg-blue-100",
      blob2: "bg-indigo-100",
    },
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-9 h-9 text-white" />,
      content: "To be a leading, trusted partner that delivers outstanding, timely services and creates significant value.",
      image: visionImg,
      gradient: "from-sky-400 to-cyan-500",
      glow: "shadow-sky-200",
      blob1: "bg-sky-100",
      blob2: "bg-cyan-100",
    },
    {
      title: "Our Goal",
      icon: <TrendingUp className="w-9 h-9 text-white" />,
      content: "Global leader in providing innovative and comprehensive solutions to empower industries across continents.",
      image: goalImg,
      gradient: "from-violet-400 to-purple-500",
      glow: "shadow-violet-200",
      blob1: "bg-violet-100",
      blob2: "bg-purple-100",
    }
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };
  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section id="mission" className="py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Bubbly blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-violet-100 rounded-full blur-[90px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-100 rounded-full blur-[80px] opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariant}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            ✦ Our Foundation
          </motion.div>
          <motion.h2 variants={itemVariant} className="text-3xl md:text-5xl font-extrabold text-slate-800">
            What Drives Us
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariant}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={itemVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`group relative rounded-3xl overflow-hidden min-h-[340px] flex flex-col justify-end shadow-2xl ${card.glow} border border-white/60`}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent z-10" />
                <img src={card.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Decorative bubbles */}
              <div className={`absolute top-4 right-4 w-20 h-20 ${card.blob1} rounded-full blur-2xl opacity-70 group-hover:scale-150 transition-transform duration-500 z-10`} />
              <div className={`absolute top-10 left-3 w-12 h-12 ${card.blob2} rounded-full blur-xl opacity-50 group-hover:scale-125 transition-transform duration-700 z-10`} />

              <div className="relative z-20 p-7">
                <div className={`mb-5 p-3.5 inline-block rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">{card.title}</h3>
                <p className="text-slate-300 leading-relaxed">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
