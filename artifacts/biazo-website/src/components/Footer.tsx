import logoPath from "@assets/WhatsApp_Image_2026-05-28_at_9.07.14_AM_1779994735397.jpeg";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logoPath} alt="Biazo Logo" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              Biazo International General Trading FZ-LLC is a premier general trading company bridging UAE and East Africa with high-quality industrial supplies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#sectors" className="hover:text-white transition-colors">Sectors</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#statistics" className="hover:text-white transition-colors">Statistics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <p>RAKEZ Business Zone, UAE</p>
        </div>
      </div>
    </footer>
  );
}
