import { motion } from "motion/react";
import { Brain, Smartphone, Globe, Bot, BarChart, Cloud, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Recommendation Engine",
      category: "Artificial Intelligence",
      description:
        "Built an intelligent recommendation system using deep learning that increased user engagement by 45% for an e-commerce platform.",
      image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczMDI5ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Brain,
      tech: ["TensorFlow", "Python", "AWS"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Computer Vision Quality Control System",
      category: "Machine Learning",
      description:
        "Developed a real-time defect detection system for manufacturing that reduced quality control costs by 60% while improving accuracy.",
      image: "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc3Mjk5MzIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: BarChart,
      tech: ["PyTorch", "OpenCV", "Docker"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Healthcare Mobile App",
      category: "App Development",
      description:
        "Created a cross-platform healthcare app connecting patients with doctors, featuring real-time video consultations and secure health records.",
      image: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzczMDUxMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Smartphone,
      tech: ["React Native", "Node.js", "MongoDB"],
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Intelligent Chatbot Platform",
      category: "AI & Automation",
      description:
        "Designed an AI chatbot platform with NLP capabilities that handles 80% of customer queries automatically, reducing support costs significantly.",
      image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczMDI5ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Bot,
      tech: ["GPT-4", "LangChain", "React"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Enterprise SaaS Platform",
      category: "Web Development",
      description:
        "Built a scalable SaaS platform for project management with real-time collaboration features, serving over 10,000 users.",
      image: "https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aXZlJTIwdGVjaCUyMHN0YXJ0dXAlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMDUxMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Globe,
      tech: ["Next.js", "PostgreSQL", "Redis"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Cloud Infrastructure Automation",
      category: "DevOps & Cloud",
      description:
        "Implemented infrastructure as code solution that reduced deployment time by 70% and improved system reliability with auto-scaling.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTg0NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Cloud,
      tech: ["Kubernetes", "Terraform", "AWS"],
      gradient: "from-indigo-500 to-purple-600",
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
              Our <span className="text-cyan-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of innovative AI systems, intelligent automation solutions,
              mobile applications, and modern web platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg`}>
                    <project.icon className="size-6 text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-cyan-400 mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                    <span className="text-sm font-medium">View Details</span>
                    <ExternalLink className="size-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-y border-cyan-500/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Impact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Delivering measurable results across all our projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "1M+", label: "Users Impacted" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
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
            className="p-12 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with innovative technology
              solutions
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
