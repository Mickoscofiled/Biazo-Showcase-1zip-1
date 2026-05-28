import logoPath from "@assets/WhatsApp_Image_2026-05-28_at_9.07.14_AM_1779994735397.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#020c1b] text-blue-300/50 py-14 border-t border-blue-900/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-3 inline-block mb-6 shadow-xl shadow-blue-900/30">
              <img
                src={logoPath}
                alt="Biazo Logo"
                data-testid="img-footer-logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-blue-200/40 mb-6">
              Biazo International General Trading FZ-LLC is a premier general trading company bridging UAE and East Africa with high-quality industrial supplies and solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:sales@biazointernational.com"
                data-testid="link-footer-email"
                className="text-xs text-blue-400/70 hover:text-blue-300 transition-colors bg-blue-900/20 px-3 py-1.5 rounded-lg border border-blue-900/30 hover:border-blue-700/50"
              >
                sales@biazointernational.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-blue-200 font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Sectors", "Products", "Statistics", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-blue-300/40 hover:text-blue-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-blue-200 font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-300/40">
              <li>+971 524 860 664</li>
              <li>+971 568 878 801</li>
              <li className="pt-2">
                <a href="https://www.biazointernational.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                  www.biazointernational.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900/20 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-blue-300/30">
          <p>&copy; {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <p>RAKEZ Business Zone, Ras Al Khaimah, UAE</p>
        </div>
      </div>
    </footer>
  );
}
