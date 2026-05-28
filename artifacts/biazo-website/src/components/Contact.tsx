import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We Look Forward to Working With You!</h2>
            <p className="text-xl text-primary-foreground/80 mb-12">
              Reach out to us to discuss your procurement needs. Our global network is ready to serve you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-primary-foreground/80" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:sales@biazointernational.com" className="text-primary-foreground/80 hover:text-white transition-colors">sales@biazointernational.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 text-primary-foreground/80" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <div className="flex flex-col">
                    <a href="tel:+971524860664" className="text-primary-foreground/80 hover:text-white transition-colors">+971 524 860 664</a>
                    <a href="tel:+971568878801" className="text-primary-foreground/80 hover:text-white transition-colors">+971 568 878 801</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 mt-1 text-primary-foreground/80" />
                <div>
                  <h4 className="font-semibold text-lg">Website</h4>
                  <a href="https://www.biazointernational.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">www.biazointernational.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-foreground p-8 rounded-2xl shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Locations</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-primary mb-1">UAE Headquarters</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ras Al Khaimah UAE - RAKEZ Business Zone-FZ<br/>
                    B4209b10-Business Center 04
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">Dubai Office</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Dubai UAE - Abraj Shopping Center<br/>
                    903 Sabka Rd, Deira UAE
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
