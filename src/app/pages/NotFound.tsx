import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              404
            </div>
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-xl text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <Home className="size-5" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              <Search className="size-5" />
              Contact Support
            </Link>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl">
            <h3 className="font-semibold mb-3 text-cyan-400">Quick Links</h3>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Projects
              </Link>
              <Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
