import { motion } from "motion/react";
import { Target, Eye, Heart, Users, Rocket, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We constantly push boundaries and explore new technologies",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and collective intelligence",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we build",
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success - we're committed to your goals",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Expert Engineers" },
    { number: "15+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
  ];

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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-cyan-400">VSNION</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A forward-thinking technology company working on advanced AI systems and modern
              software architecture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzMwMjU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team Collaboration"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Who We Are</h2>
              <p className="text-gray-300">
                VSNION is an innovative technology company at the forefront of artificial
                intelligence and software development. We specialize in creating intelligent,
                scalable, and efficient technology solutions that empower businesses to thrive in
                the digital age.
              </p>
              <p className="text-gray-300">
                Our team of expert engineers, data scientists, and AI researchers work together to
                build cutting-edge systems that solve complex problems and drive meaningful
                innovation across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl"
            >
              <div className="p-4 bg-cyan-500/20 rounded-full w-fit mb-6">
                <Target className="size-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To build intelligent, scalable, and efficient technology solutions that transform
                businesses and improve lives. We are committed to pushing the boundaries of what's
                possible with AI and modern software engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl"
            >
              <div className="p-4 bg-purple-500/20 rounded-full w-fit mb-6">
                <Eye className="size-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To become a global leader in AI-powered technology innovation, recognized for
                creating intelligent systems that shape the future and drive positive change across
                industries worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl text-center"
              >
                <div className="p-3 bg-cyan-500/10 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="size-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-y border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
    </div>
  );
}
