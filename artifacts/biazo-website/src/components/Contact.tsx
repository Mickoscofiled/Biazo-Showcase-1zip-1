import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-500">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
  </svg>
);

export default function Contact() {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(100,149,237,0.07),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,149,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,149,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariant}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            variants={itemVariant}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
          >
            We Look Forward to<br />
            <span className="bg-gradient-to-r from-primary to-[#87CEEB] bg-clip-text text-transparent">
              Working With You!
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-xl text-slate-600 max-w-xl mx-auto"
          >
            Reach out to discuss your procurement needs. Our global network is ready to serve you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariant}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: <Mail className="w-5 h-5 text-primary" />,
                label: "Email",
                value: "sales@biazointernational.com",
                href: "mailto:sales@biazointernational.com",
                highlight: false
              },
              {
                icon: WA_ICON,
                label: "WhatsApp",
                value: "+971 50 462 0492",
                href: "https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20get%20a%20quote.",
                highlight: true
              },
              {
                icon: WA_ICON,
                label: "WhatsApp 2",
                value: "+971 54 551 6485",
                href: "https://wa.me/971545516485?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20get%20a%20quote.",
                highlight: true
              },
              {
                icon: <Phone className="w-5 h-5 text-primary" />,
                label: "Phone",
                value: "+971 52 486 0664",
                href: "tel:+971524860664",
                highlight: false
              },
              {
                icon: <Globe className="w-5 h-5 text-primary" />,
                label: "Website",
                value: "www.biazointernational.com",
                href: "https://www.biazointernational.com",
                highlight: false
              }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={itemVariant}
                data-testid={`link-contact-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                  item.highlight
                    ? "bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-400"
                    : "bg-white hover:bg-slate-50 border-slate-100 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors shrink-0 ${
                  item.highlight ? "bg-green-100 group-hover:bg-green-200" : "bg-primary/5 group-hover:bg-primary/10"
                }`}>
                  {item.icon}
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${
                    item.highlight ? "text-green-600" : "text-primary"
                  }`}>{item.label}</p>
                  <p className={`font-medium transition-colors ${
                    item.highlight ? "text-green-800 group-hover:text-green-600" : "text-slate-800 group-hover:text-primary"
                  }`}>{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Our Locations</h3>
            </div>

            <div className="space-y-8">
              <div className="pl-4 border-l-2 border-primary/40">
                <h4 className="font-bold text-lg text-slate-700 mb-2">UAE Headquarters</h4>
                <p className="text-slate-600 leading-relaxed">
                  Ras Al Khaimah, UAE<br />
                  RAKEZ Business Zone-FZ<br />
                  B4209b10-Business Center 04
                </p>
              </div>

              <div className="pl-4 border-l-2 border-primary/30">
                <h4 className="font-bold text-lg text-slate-700 mb-2">Dubai Office</h4>
                <p className="text-slate-600 leading-relaxed">
                  Abraj Shopping Center<br />
                  903 Sabka Rd, Deira<br />
                  Dubai, UAE
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/971504620492?text=Hello%20Biazo%20International%2C%20I%20would%20like%20to%20send%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-send-inquiry"
                className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20c05c] text-white py-4 rounded-full active:scale-[0.98] font-semibold text-lg transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                </svg>
                Send Inquiry on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
