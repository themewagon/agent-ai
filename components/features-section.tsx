"use client"

import { motion } from "framer-motion"
import { Brain, Workflow, Layers, Shield, Zap, Code } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "Autonomous Decision Making",
      description:
        "Our agents make intelligent decisions based on your goals and constraints without constant supervision.",
    },
    {
      icon: <Workflow className="h-6 w-6 text-blue-600" />,
      title: "Complex Workflow Automation",
      description: "Automate multi-step processes that require judgment, adaptation, and coordination between systems.",
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Multi-Agent Collaboration",
      description: "Deploy teams of specialized agents that work together to solve complex problems.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with fine-grained permissions and audit logs for all agent actions.",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Rapid Integration",
      description: "Connect to your existing tools and data sources in minutes with our extensive API library.",
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "Customizable Agents",
      description: "Build and customize agents with our intuitive interface or advanced programming options.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Agentic AI Features</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform provides everything you need to build, deploy, and manage intelligent AI agents that get work
              done.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
