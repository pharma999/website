import { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Trophy,
  GraduationCap,
  X,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

type Job = {
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
};

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
};

export function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const jobs: Job[] = [
    {
      title: "AI Engineer Intern",
      location: "Remote",
      type: "Internship",
      description:
        "We're looking for an AI Engineer Intern to help develop and deploy cutting-edge AI systems. You'll work on computer vision, NLP, and machine learning projects.",
      requirements: [
        "Knowledge of AI/ML fundamentals",
        "Basic understanding of TensorFlow or PyTorch",
        "Interest in computer vision or NLP",
        "Proficiency in Python",
        "Strong problem-solving skills",
      ],
      responsibilities: [
        "Assist in designing AI models",
        "Help test and improve model performance",
        "Collaborate with AI engineers",
        "Research new AI techniques",
      ],
    },
    {
      title: "Machine Learning Intern",
      location: "Remote",
      type: "Internship",
      description:
        "Join our ML team to learn how to build scalable machine learning systems and pipelines.",
      requirements: [
        "Knowledge of machine learning basics",
        "Python and scikit-learn familiarity",
        "Understanding of ML pipelines",
        "Basic knowledge of cloud platforms",
        "Currently pursuing CS or related field",
      ],
      responsibilities: [
        "Assist in building ML pipelines",
        "Support model deployment tasks",
        "Monitor model performance",
        "Work with data scientists",
      ],
    },
    {
      title: "Mobile App Developer Intern",
      location: "Remote",
      type: "Internship",
      description:
        "Work with our team to build mobile applications for iOS and Android using modern frameworks.",
      requirements: [
        "Basic knowledge of React Native or Flutter",
        "Understanding of mobile app development",
        "Familiarity with Swift or Kotlin",
        "Interest in UI/UX principles",
        "Portfolio or small project experience",
      ],
      responsibilities: [
        "Assist in mobile app development",
        "Implement UI components",
        "Integrate backend APIs",
        "Help optimize app performance",
      ],
    },
    {
      title: "Web Developer Intern",
      location: "Remote",
      type: "Internship",
      description:
        "Help build responsive web applications using React, Next.js, and Node.js.",
      requirements: [
        "Knowledge of HTML, CSS, JavaScript",
        "Basic understanding of React",
        "Familiarity with Next.js or similar frameworks",
        "Basic Node.js knowledge",
        "Interest in web performance optimization",
      ],
      responsibilities: [
        "Build responsive web pages",
        "Assist with frontend components",
        "Support backend API development",
        "Follow coding best practices",
      ],
    },
    {
      title: "Data Science Intern",
      location: "Remote",
      type: "Internship",
      description:
        "Work with data scientists to analyze datasets and build predictive models.",
      requirements: [
        "Knowledge of statistics and data analysis",
        "Proficiency in Python",
        "Basic SQL knowledge",
        "Experience with data visualization tools",
        "Currently pursuing CS, Data Science, or related field",
      ],
      responsibilities: [
        "Assist with data analysis",
        "Help build predictive models",
        "Create data visualizations",
        "Prepare reports and insights",
      ],
    },
    {
      title: "AI Research Intern",
      location: "Remote",
      type: "Internship",
      description: "Join our research team to work on cutting-edge AI projects.",
      requirements: [
        "Currently pursuing CS, AI, or related degree",
        "Strong mathematics and algorithms foundation",
        "Knowledge of Python and ML frameworks",
        "Research experience is a plus",
        "Passion for AI",
      ],
      responsibilities: [
        "Assist in AI research projects",
        "Conduct literature reviews",
        "Implement and test algorithms",
        "Document research findings",
      ],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Remote Work",
      description: "Work from anywhere in the world",
    },
    {
      icon: Trophy,
      title: "Career Growth",
      description: "Clear progression and learning opportunities",
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses and conferences",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance with flexible schedules",
    },
  ];

  const handleChange =
    (field: keyof FormDataType) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = async (e: React.FormEvent, jobTitle: string) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.resume) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://formsubmit.co/ajax/p.rishabh1004@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            fullName: formData.name,
            phone: formData.phone,
            email: formData.email,
            resume: formData.resume,
            coverLetter: formData.coverLetter,
            jobTitle: jobTitle,
            location: jobs[selectedJob!].location,
            jobType: jobs[selectedJob!].type,
            _subject: `New Job Application - ${jobTitle}`,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send application");
      }

      alert("Application submitted successfully!");

      setSelectedJob(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: "",
        coverLetter: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full mb-6">
              <Briefcase className="size-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Join Our Team</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build the Future with <span className="text-cyan-400">VSNION</span>
            </h1>
            <p className="text-xl text-gray-300">
              Join our team of talented interns and innovators working on cutting-edge AI and
              technology projects
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a culture that values innovation, learning, and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4">
                  <benefit.icon className="size-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our current internship openings and find your next opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <Button
                  onClick={() => setSelectedJob(index)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  View Details & Apply
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedJob !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-cyan-500/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
              <h2 className="text-2xl font-bold">{jobs[selectedJob].title}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-4" />
                    {jobs[selectedJob].location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-4" />
                    {jobs[selectedJob].type}
                  </span>
                </div>
                <p className="text-gray-300">{jobs[selectedJob].description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Requirements</h3>
                <ul className="space-y-2">
                  {jobs[selectedJob].requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Responsibilities</h3>
                <ul className="space-y-2">
                  {jobs[selectedJob].responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">Apply Now</h3>

                <form
                  onSubmit={(e) => handleSubmit(e, jobs[selectedJob].title)}
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange("name")}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange("email")}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Resume / LinkedIn URL *</Label>
                    <Input
                      id="resume"
                      required
                      placeholder="https://..."
                      value={formData.resume}
                      onChange={handleChange("resume")}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      rows={4}
                      placeholder="Tell us why you're a great fit..."
                      value={formData.coverLetter}
                      onChange={handleChange("coverLetter")}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}