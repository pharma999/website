import { Link } from "react-router";
import { motion } from "motion/react";
import { 
  Brain, 
  Code, 
  Smartphone, 
  Globe, 
  Cloud, 
  Zap, 
  Shield, 
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Briefcase
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Advanced AI systems for intelligent automation and decision-making",
    },
    {
      icon: TrendingUp,
      title: "Machine Learning",
      description: "Custom ML models and predictive analytics solutions",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, scalable web applications and platforms",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and DevOps automation",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Intelligent process automation and optimization",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and frameworks to build future-proof solutions",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team consists of experienced engineers and AI specialists",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Successful delivery of complex AI and software projects",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full"
              >
                <span className="text-cyan-400 text-sm font-medium">Next-Generation Technology</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Innovating the Future with{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology and AI
                </span>
              </h1>
              
              <p className="text-lg text-gray-300">
                VSNION is a modern technology and AI company specializing in building intelligent,
                scalable, and high-performance systems that transform businesses and drive innovation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Our Services
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczMDI5ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Technology"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-cyan-400">Technologies</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build intelligent and scalable solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4 group-hover:bg-cyan-500/20 transition-all">
                  <tech.icon className="size-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-cyan-400">VSNION</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/10 rounded-xl"
              >
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-6">
                  <item.icon className="size-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Banner */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-y border-cyan-500/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full">
              <Briefcase className="size-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">We're Hiring</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Team of <span className="text-cyan-400">Talented Engineers</span>
            </h2>
            
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're looking for passionate developers, AI engineers, and innovators to join our
              growing team and work on cutting-edge technology projects.
            </p>
            
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              View Open Positions
              <ArrowRight className="size-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
