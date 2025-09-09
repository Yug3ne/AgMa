import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="AgMa Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-brand">AgMa</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-brand bg-brand/5"
                    : "text-gray-700 hover:text-brand hover:bg-brand/5"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-brand bg-brand/5"
                    : "text-gray-700 hover:text-brand hover:bg-brand/5"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/service"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/service")
                    ? "text-brand bg-brand/5"
                    : "text-gray-700 hover:text-brand hover:bg-brand/5"
                }`}
              >
                Service
              </Link>
              <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand hover:bg-brand/5 cursor-pointer transition-colors">
                Process
              </span>
              <Link
                to="/assessment"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/assessment")
                    ? "text-brand bg-brand/5"
                    : "text-gray-700 hover:text-brand hover:bg-brand/5"
                }`}
              >
                Assessment
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/assessment"
              className="bg-brand hover:bg-brand-2 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-brand p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
