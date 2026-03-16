import { motion } from "motion/react";
import {
  Brain,
  TrendingUp,
  Smartphone,
  Globe,
  Code,
  Database,
  Cloud,
  Cpu,
  GitBranch,
  Layers,
  CheckCircle,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence Development",
      description:
        "Custom AI solutions including computer vision, NLP, and intelligent automation systems",
      features: [
        "Computer Vision & Image Recognition",
        "Natural Language Processing",
        "Intelligent Chatbots & Virtual Assistants",
        "AI-Powered Automation",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Machine Learning Solutions",
      description:
        "End-to-end ML solutions from data preparation to model deployment and monitoring",
      features: [
        "Predictive Analytics",
        "Custom ML Model Development",
        "Deep Learning Systems",
        "Model Training & Optimization",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for Android, iOS, and beyond",
      features: [
        "iOS App Development (Swift)",
        "Android App Development (Kotlin)",
        "Cross-Platform (React Native, Flutter)",
        "App Store Optimization",
      ],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Modern, responsive web applications with cutting-edge frontend and backend technologies",
      features: [
        "Frontend Development (React, Next.js)",
        "Backend Development (Node.js, Python)",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
      ],
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business requirements",
      features: [
        "Enterprise Software Solutions",
        "SaaS Product Development",
        "API Development & Integration",
        "Legacy System Modernization",
      ],
      gradient: "from-orange-500 to-yellow-600",
    },
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      description:
        "Build robust data pipelines and gain actionable insights from your data",
      features: [
        "Data Pipeline Architecture",
        "ETL/ELT Solutions",
        "Business Intelligence Dashboards",
        "Real-time Analytics",
      ],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure Solutions",
      description:
        "Scalable cloud infrastructure and DevOps solutions for modern applications",
      features: [
        "AWS, Azure, GCP Solutions",
        "Kubernetes & Container Orchestration",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code (IaC)",
      ],
      gradient: "from-cyan-500 to-teal-600",
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive technology solutions powered by AI, machine learning, and modern
              software engineering practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div
                  className={`p-4 bg-gradient-to-br ${service.gradient} rounded-xl w-fit mb-6 group-hover:shadow-lg transition-all`}
                >
                  <service.icon className="size-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We work with industry-leading technologies and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Brain, label: "TensorFlow" },
              { icon: Cpu, label: "PyTorch" },
              { icon: Code, label: "React" },
              { icon: GitBranch, label: "Node.js" },
              { icon: Layers, label: "Docker" },
              { icon: Cloud, label: "Kubernetes" },
              { icon: Database, label: "PostgreSQL" },
              { icon: Globe, label: "Next.js" },
              { icon: Smartphone, label: "React Native" },
              { icon: TrendingUp, label: "Python" },
              { icon: Code, label: "TypeScript" },
              { icon: Cloud, label: "AWS" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl text-center hover:border-cyan-500/50 transition-all"
              >
                <tech.icon className="size-8 text-cyan-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300">{tech.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business with cutting-edge
              technology solutions
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
