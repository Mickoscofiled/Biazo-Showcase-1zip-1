import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export default function Mission() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-9 h-9 text-blue-400" />,
      content: "To serve, support, and collaborate with our clients to deliver timely services with commitment, integrity, and professionalism.",
      gradient: "from-blue-600/20 to-blue-800/10"
    },
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-9 h-9 text-blue-300" />,
      content: "To be a leading, trusted partner that delivers outstanding, timely services and creates significant value.",
      gradient: "from-indigo-600/20 to-indigo-800/10"
    },
    {
      title: "Our Goal",
      icon: <TrendingUp className="w-9 h-9 text-blue-500" />,
      content: "Global leader in providing innovative and comprehensive solutions to empower industries across continents.",
      gradient: "from-cyan-600/20 to-cyan-800/10"
    }
  ];

  return (
    <section id="mission" className="py-24 bg-[#04101f] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Our Foundation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            What Drives Us
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative p-8 rounded-2xl border border-blue-900/30 hover:border-blue-600/50 bg-gradient-to-br ${card.gradient} bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/30 hover:-translate-y-1 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-blue-500/10 transition-all" />
              <div className="relative">
                <div className="mb-6 p-4 bg-blue-500/10 inline-block rounded-xl border border-blue-500/20 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{card.title}</h3>
                <p className="text-blue-200/60 leading-relaxed">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
