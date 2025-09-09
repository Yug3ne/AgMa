const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center mr-3">
                <img
                  src="/logo.png"
                  alt="AgMa Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-brand-2">AgMa</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming agribusiness through expert consulting, comprehensive
              training, and sustainable market systems development.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/service"
                  className="text-gray-300 hover:text-brand-2 transition-colors"
                >
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className="text-gray-300 hover:text-brand-2 transition-colors"
                >
                  Training & Development
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className="text-gray-300 hover:text-brand-2 transition-colors"
                >
                  Professional Management
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className="text-gray-300 hover:text-brand-2 transition-colors"
                >
                  Value Chain Analysis
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className="text-gray-300 hover:text-brand-2 transition-colors"
                >
                  Market Linkage
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className="text-gray-300 hover:text-brand-2 transition-colors"
                >
                  Certification Support
                </a>
              </li>
            </ul>
          </div>

          {/* Value Chains */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Value Chains
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Coffee</span>
              </li>
              <li>
                <span className="text-gray-300">Banana</span>
              </li>
              <li>
                <span className="text-gray-300">Avocado</span>
              </li>
              <li>
                <span className="text-gray-300">Mango</span>
              </li>
              <li>
                <span className="text-gray-300">Sweet Potato</span>
              </li>
              <li>
                <span className="text-gray-300">Dairy</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-brand-2 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-brand-2 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@agma.com</p>
              <p>Phone: +25476444444</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Agma. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-brand-2 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-2 transition-colors"
            >
              Terms Of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
