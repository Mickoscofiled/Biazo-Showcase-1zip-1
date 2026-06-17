import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Globe, Send, CheckCircle, User, Building2, Package, Hash, MessageSquare, ChevronDown } from "lucide-react";

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-500">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
  </svg>
);

const WA_NUMBER = "971504620492";

const PRODUCT_CATEGORIES = [
  "Agriculture Products",
  "Construction Machinery",
  "Mining Equipment",
  "Oil & Gas Equipment",
  "Healthcare & Pharmaceuticals",
  "Pipes & Fittings (GI / PPRC)",
  "Steel & Metal Products",
  "Welding Machines & Consumables",
  "Electrical Products",
  "IT Equipment, Accessories & Cables",
  "Safety Solutions & PPE",
  "Hand & Power Tools",
  "Industrial & Lab Chemicals",
  "Geological Equipment & Accessories",
  "Automotive & Spare Parts",
  "Office Supplies",
  "Other / Multiple Products",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", product: "", quantity: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isValid = form.name.trim() && form.product && form.quantity.trim();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) { setTouched({ name: true, product: true, quantity: true }); return; }
    const lines = [
      `Hello Biazo International, I'd like to request a quote.`, ``,
      `*Name:* ${form.name.trim()}`,
      form.company.trim() ? `*Company:* ${form.company.trim()}` : null,
      `*Product / Category:* ${form.product}`,
      `*Quantity / Volume:* ${form.quantity.trim()}`,
      form.notes.trim() ? `*Additional Notes:* ${form.notes.trim()}` : null,
      ``, `Please send pricing and availability. Thank you!`,
    ].filter((l) => l !== null).join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: "", company: "", product: "", quantity: "", notes: "" });
    setTouched({});
    setSubmitted(false);
  }

  const fieldBase = "w-full bg-blue-50/50 border-none rounded-2xl px-5 py-4 text-blue-900 placeholder-blue-300 text-sm focus:outline-none transition-all duration-300";
  const fieldOk = `${fieldBase} hover:bg-blue-50 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-inner`;
  const fieldErr = `${fieldBase} ring-2 ring-red-300 focus:bg-white focus:ring-4 focus:ring-red-100 shadow-inner`;
  const fieldClass = (name: string, hasError: boolean) => hasError ? fieldErr : fieldOk;

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
    <section id="contact" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(115,145,209,0.07),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(115,145,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(115,145,209,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 blur-[130px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
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
            <span className="bg-gradient-to-r from-primary to-[#a3b8e0] bg-clip-text text-transparent">
              Working With You!
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-xl text-slate-600 max-w-xl mx-auto"
          >
            Reach out to discuss your procurement needs. Fill out the quick inquiry form to receive a quote on WhatsApp instantly.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 xl:gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-50px" }}
            variants={containerVariant}
            className="flex flex-col gap-4 lg:sticky lg:top-28"
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
                target={item.href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                variants={itemVariant}
                data-testid={`link-contact-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`group flex items-center gap-5 p-6 rounded-3xl border-none transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? "bg-gradient-to-br from-green-50 to-white shadow-xl shadow-green-900/5 hover:shadow-2xl hover:shadow-green-900/10"
                    : "bg-white shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10"
                }`}
              >
                <div className={`p-4 rounded-2xl transition-colors shrink-0 ${
                  item.highlight ? "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
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
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-3xl bg-white border-none shadow-2xl shadow-blue-900/10 overflow-hidden">
              <div className="px-8 pt-8 pb-6 border-b border-blue-50 flex items-center gap-4 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="p-3.5 rounded-2xl bg-[#25D366]/10 border-none text-[#25D366]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-blue-900 font-bold text-base">Quick Inquiry Form</p>
                  <p className="text-blue-500 font-medium text-sm">Sends directly to WhatsApp</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="p-8 space-y-6"
                    noValidate
                  >
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                        <User size={14} /> Your Name <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur}
                        placeholder="e.g. John Mwangi" autoComplete="name"
                        className={fieldClass("name", !!(touched.name && !form.name.trim()))} />
                      {touched.name && !form.name.trim() && <p className="mt-2 text-xs font-semibold text-red-500">Please enter your name</p>}
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                        <Building2 size={14} /> Company <span className="text-blue-400/50 normal-case font-normal">(optional)</span>
                      </label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} onBlur={handleBlur}
                        placeholder="e.g. Acme Mining Ltd" autoComplete="organization"
                        className={fieldClass("company", false)} />
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                        <Package size={14} /> Product / Category <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select name="product" value={form.product} onChange={handleChange} onBlur={handleBlur}
                          className={`${fieldClass("product", !!(touched.product && !form.product))} appearance-none pr-10 cursor-pointer`}>
                          <option value="" disabled className="bg-white text-blue-300">Select a product category…</option>
                          {PRODUCT_CATEGORIES.map((c) => (
                            <option key={c} value={c} className="bg-white text-blue-900">{c}</option>
                          ))}
                        </select>
                        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" />
                      </div>
                      {touched.product && !form.product && <p className="mt-2 text-xs font-semibold text-red-500">Please select a product category</p>}
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                        <Hash size={14} /> Quantity / Volume <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="quantity" value={form.quantity} onChange={handleChange} onBlur={handleBlur}
                        placeholder='e.g. 50 units, 2 tonnes, "as quoted"'
                        className={fieldClass("quantity", !!(touched.quantity && !form.quantity.trim()))} />
                      {touched.quantity && !form.quantity.trim() && <p className="mt-2 text-xs font-semibold text-red-500">Please enter a quantity or volume</p>}
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                        <MessageSquare size={14} /> Additional Notes <span className="text-blue-400/50 normal-case font-normal">(optional)</span>
                      </label>
                      <textarea name="notes" value={form.notes} onChange={handleChange} onBlur={handleBlur}
                        rows={3} placeholder="Specific specs, delivery location, urgency, brand preference…"
                        className={`${fieldClass("notes", false)} resize-none`} />
                    </div>

                    <button
                      type="submit"
                      data-testid="button-inquiry-submit"
                      className={`w-full flex items-center justify-center gap-2.5 py-4 mt-2 rounded-full active:scale-[0.98] font-bold text-base transition-all duration-300 ${
                        isValid
                          ? "bg-[#25D366] hover:bg-[#20c05c] text-white shadow-xl shadow-green-200 hover:shadow-2xl hover:shadow-green-300 hover:-translate-y-1"
                          : "bg-blue-50 text-blue-300 border-none cursor-not-allowed"
                      }`}
                    >
                      <Send size={18} className={isValid ? "opacity-100" : "opacity-50"} />
                      Send Inquiry on WhatsApp
                    </button>

                    <p className="text-center text-xs font-medium text-blue-400/60 pt-2">
                      No account needed · Opens WhatsApp with your message pre-filled
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="p-10 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">WhatsApp Opened!</h3>
                    <p className="text-blue-600/70 text-base leading-relaxed max-w-sm mb-8">
                      Your inquiry message has been pre-filled in WhatsApp. Just press <strong className="text-blue-900 font-bold">Send</strong> and our team will get back to you shortly.
                    </p>
                    <button onClick={handleReset} className="text-sm font-bold text-blue-500 hover:text-blue-700 underline underline-offset-4 transition-colors">
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
