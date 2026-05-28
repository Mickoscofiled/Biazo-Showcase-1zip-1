import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#04101f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            We Look Forward to<br />
            <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Working With You!
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xl text-blue-200/60 max-w-xl mx-auto"
          >
            Reach out to discuss your procurement needs. Our global network is ready to serve you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {[
              {
                icon: <Mail className="w-5 h-5 text-blue-400" />,
                label: "Email",
                value: "sales@biazointernational.com",
                href: "mailto:sales@biazointernational.com"
              },
              {
                icon: <Phone className="w-5 h-5 text-blue-400" />,
                label: "Phone",
                value: "+971 524 860 664",
                href: "tel:+971524860664"
              },
              {
                icon: <Phone className="w-5 h-5 text-blue-400" />,
                label: "Phone 2",
                value: "+971 568 878 801",
                href: "tel:+971568878801"
              },
              {
                icon: <Globe className="w-5 h-5 text-blue-400" />,
                label: "Website",
                value: "www.biazointernational.com",
                href: "https://www.biazointernational.com"
              }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-testid={`link-contact-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-blue-900/30 hover:border-blue-600/50 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-blue-400/70 font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-blue-300 transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/[0.03] border border-blue-900/30 hover:border-blue-700/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Locations</h3>
            </div>

            <div className="space-y-8">
              <div className="pl-4 border-l-2 border-blue-500/50">
                <h4 className="font-bold text-lg text-blue-300 mb-2">UAE Headquarters</h4>
                <p className="text-blue-200/60 leading-relaxed">
                  Ras Al Khaimah, UAE<br />
                  RAKEZ Business Zone-FZ<br />
                  B4209b10-Business Center 04
                </p>
              </div>

              <div className="pl-4 border-l-2 border-blue-500/30">
                <h4 className="font-bold text-lg text-blue-300 mb-2">Dubai Office</h4>
                <p className="text-blue-200/60 leading-relaxed">
                  Abraj Shopping Center<br />
                  903 Sabka Rd, Deira<br />
                  Dubai, UAE
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="mailto:sales@biazointernational.com"
                data-testid="button-send-inquiry"
                className="block w-full text-center bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-400/30 hover:scale-[1.02]"
              >
                Send an Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
