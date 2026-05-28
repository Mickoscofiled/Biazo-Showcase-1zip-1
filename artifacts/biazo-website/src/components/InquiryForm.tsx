import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, User, Building2, Package, Hash, MessageSquare, ChevronDown } from "lucide-react";

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

const WA_NUMBER = "971524860664";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    product: "",
    quantity: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isValid = form.name.trim() && form.product && form.quantity.trim();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) {
      setTouched({ name: true, product: true, quantity: true });
      return;
    }

    const lines = [
      `Hello Biazo International, I'd like to request a quote.`,
      ``,
      `*Name:* ${form.name.trim()}`,
      form.company.trim() ? `*Company:* ${form.company.trim()}` : null,
      `*Product / Category:* ${form.product}`,
      `*Quantity / Volume:* ${form.quantity.trim()}`,
      form.notes.trim() ? `*Additional Notes:* ${form.notes.trim()}` : null,
      ``,
      `Please send pricing and availability. Thank you!`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: "", company: "", product: "", quantity: "", notes: "" });
    setTouched({});
    setSubmitted(false);
  }

  const fieldClass = (name: string, hasError: boolean) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white placeholder-blue-200/30 text-sm focus:outline-none transition-all duration-200 ${
      hasError
        ? "border-red-500/60 focus:border-red-400 focus:ring-1 focus:ring-red-500/30"
        : "border-blue-900/40 focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/20 hover:border-blue-700/60"
    }`;

  return (
    <section id="inquiry" className="py-24 bg-[#04101f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/8 blur-[130px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-700/8 blur-[110px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Left — info */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              WhatsApp Inquiry
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              Get a Quote in Minutes
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-200/60 leading-relaxed mb-8"
            >
              Fill in your requirements and we'll open WhatsApp with a pre-written message ready to send. Our team typically responds within a few hours.
            </motion.p>

            {/* How it works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              {[
                { step: "1", label: "Fill in your details", desc: "Name, product, quantity" },
                { step: "2", label: "Click Send Inquiry", desc: "Opens WhatsApp with your message ready" },
                { step: "3", label: "Hit send & get a quote", desc: "We reply within a few hours" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-400 text-xs font-bold">{s.step}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-snug">{s.label}</p>
                    <p className="text-blue-200/45 text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Direct WhatsApp link */}
            <motion.a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Or message us directly on WhatsApp
            </motion.a>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl bg-white/[0.025] border border-blue-900/35 overflow-hidden">
              {/* Form header */}
              <div className="px-7 pt-7 pb-5 border-b border-blue-900/30 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Quick Inquiry Form</p>
                  <p className="text-blue-200/45 text-xs">Sends directly to WhatsApp</p>
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
                    className="p-7 space-y-5"
                    noValidate
                  >
                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-blue-300/80 uppercase tracking-wider mb-2">
                        <User size={11} />
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. John Mwangi"
                        autoComplete="name"
                        className={fieldClass("name", !!(touched.name && !form.name.trim()))}
                      />
                      {touched.name && !form.name.trim() && (
                        <p className="mt-1.5 text-xs text-red-400">Please enter your name</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-blue-300/80 uppercase tracking-wider mb-2">
                        <Building2 size={11} />
                        Company <span className="text-blue-400/40 normal-case font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Acme Mining Ltd"
                        autoComplete="organization"
                        className={fieldClass("company", false)}
                      />
                    </div>

                    {/* Product */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-blue-300/80 uppercase tracking-wider mb-2">
                        <Package size={11} />
                        Product / Category <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${fieldClass("product", !!(touched.product && !form.product))} appearance-none pr-10 cursor-pointer`}
                        >
                          <option value="" disabled className="bg-[#0a1628] text-blue-200/50">
                            Select a product category…
                          </option>
                          {PRODUCT_CATEGORIES.map((c) => (
                            <option key={c} value={c} className="bg-[#0a1628] text-white">
                              {c}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400/50 pointer-events-none" />
                      </div>
                      {touched.product && !form.product && (
                        <p className="mt-1.5 text-xs text-red-400">Please select a product category</p>
                      )}
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-blue-300/80 uppercase tracking-wider mb-2">
                        <Hash size={11} />
                        Quantity / Volume <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='e.g. 50 units, 2 tonnes, "as quoted"'
                        className={fieldClass("quantity", !!(touched.quantity && !form.quantity.trim()))}
                      />
                      {touched.quantity && !form.quantity.trim() && (
                        <p className="mt-1.5 text-xs text-red-400">Please enter a quantity or volume</p>
                      )}
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-blue-300/80 uppercase tracking-wider mb-2">
                        <MessageSquare size={11} />
                        Additional Notes <span className="text-blue-400/40 normal-case font-normal">(optional)</span>
                      </label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={3}
                        placeholder="Specific specs, delivery location, urgency, brand preference…"
                        className={`${fieldClass("notes", false)} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      data-testid="button-inquiry-submit"
                      className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-base transition-all duration-200 ${
                        isValid
                          ? "bg-[#25D366] hover:bg-[#20c05c] text-white shadow-xl shadow-green-600/20 hover:shadow-green-500/30 hover:scale-[1.02]"
                          : "bg-white/5 text-white/30 border border-white/10 cursor-not-allowed"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.834L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.99-1.365l-.358-.213-3.758.98.999-3.648-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                      </svg>
                      Send Inquiry on WhatsApp
                      <Send size={16} className="opacity-70" />
                    </button>

                    <p className="text-center text-xs text-blue-200/30">
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
                    <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">WhatsApp Opened!</h3>
                    <p className="text-blue-200/55 text-sm leading-relaxed max-w-xs mb-8">
                      Your inquiry message has been pre-filled in WhatsApp. Just press <strong className="text-white">Send</strong> and our team will get back to you shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                    >
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
