import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you for contacting us, ${formData.name}!\n\nWe'll get back to you soon at ${formData.email}.\n\nIn a real application, this would send your message to our team.`
    );
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@vsnion.com",
      link: "mailto:info@vsnion.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "San Francisco, CA & Remote Worldwide",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
    { icon: Github, link: "#", label: "GitHub" },
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-cyan-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have a project in mind or want to learn more about our services? We'd love to hear
              from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-900 border-gray-700"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-900 border-gray-700"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-gray-900 border-gray-700"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-gray-900 border-gray-700"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-900 border-gray-700"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    <Send className="size-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg">
                        <info.icon className="size-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-900 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="size-5 text-cyan-400" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
                <h3 className="font-semibold mb-4 text-cyan-400">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Response Note */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl"
              >
                <p className="text-sm text-gray-300">
                  <span className="text-purple-400 font-semibold">Quick Response: </span>
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-gray-400 mb-8">
              With remote teams worldwide, we're always available to serve you
            </p>
            <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="size-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-400">
                  Interactive map would be displayed here
                  <br />
                  San Francisco HQ & Remote Teams Worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
