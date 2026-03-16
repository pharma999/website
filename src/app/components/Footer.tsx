import { Link } from "react-router";
import { Mail, Linkedin, Twitter, Github, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                <Zap className="size-5" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                VSNION
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Innovating the future with cutting-edge AI and technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">AI Development</li>
              <li className="text-sm text-gray-400">Machine Learning</li>
              <li className="text-sm text-gray-400">App Development</li>
              <li className="text-sm text-gray-400">Web Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@vsnion.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="size-4" />
                adarshv978@gmail.com
              </a>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
                >
                  <Twitter className="size-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
                >
                  <Github className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} VSNION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
