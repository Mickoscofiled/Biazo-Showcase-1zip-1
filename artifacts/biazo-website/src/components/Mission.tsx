import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export default function Mission() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-8 h-8 text-primary" />,
      content: "To serve, support, and collaborate with our clients to deliver timely services with commitment, integrity, and professionalism."
    },
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      content: "To be a leading, trusted partner that delivers outstanding, timely services and creates significant value."
    },
    {
      title: "Our Goal",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      content: "Global leader in providing innovative and comprehensive solutions to empower industries across continents."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="mb-6 p-4 bg-primary/10 inline-block rounded-lg">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
