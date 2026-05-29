import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export default function Mission() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-9 h-9 text-blue-600" />,
      content: "To serve, support, and collaborate with our clients to deliver timely services with commitment, integrity, and professionalism.",
      border: "border-blue-200 hover:border-blue-400",
      bg: "bg-white hover:bg-blue-50"
    },
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-9 h-9 text-sky-500" />,
      content: "To be a leading, trusted partner that delivers outstanding, timely services and creates significant value.",
      border: "border-blue-200 hover:border-sky-400",
      bg: "bg-white hover:bg-sky-50"
    },
    {
      title: "Our Goal",
      icon: <TrendingUp className="w-9 h-9 text-blue-500" />,
      content: "Global leader in providing innovative and comprehensive solutions to empower industries across continents.",
      border: "border-blue-200 hover:border-blue-400",
      bg: "bg-white hover:bg-blue-50"
    }
  ];

  return (
    <section id="mission" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-100/40 blur-[100px] rounded-full" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Our Foundation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-blue-900"
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
              className={`group relative p-8 rounded-2xl border ${card.border} ${card.bg} transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-blue-200/50 transition-all" />
              <div className="relative">
                <div className="mb-6 p-4 bg-blue-50 border border-blue-100 inline-block rounded-xl group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                <p className="text-blue-600/65 leading-relaxed">
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
