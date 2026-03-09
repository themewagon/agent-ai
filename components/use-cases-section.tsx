"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building, LineChart, Users, ShoppingCart, FileText, MessageSquare } from "lucide-react"

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("customer-service")

  const useCases = {
    "customer-service": {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Customer Service",
      description:
        "Our AI agents handle customer inquiries 24/7, resolving issues and escalating when necessary. They learn from each interaction to continuously improve service quality.",
      benefits: [
        "24/7 availability with no wait times",
        "Consistent quality across all interactions",
        "Seamless escalation to human agents when needed",
        "Multilingual support without additional cost",
      ],
      image: "./images/customer-service.jpg",
    },
    sales: {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Sales Automation",
      description:
        "Agents qualify leads, follow up with prospects, and guide customers through the sales process, increasing conversion rates while reducing sales team workload.",
      benefits: [
        "Automated lead qualification and scoring",
        "Personalized follow-ups at scale",
        "Intelligent product recommendations",
        "Detailed analytics on customer interactions",
      ],
      image: "./images/sales-automation.jpg",
    },
    "data-analysis": {
      icon: <LineChart className="h-6 w-6" />,
      title: "Data Analysis",
      description:
        "Our agents analyze large datasets, identify trends, and generate actionable insights, helping you make data-driven decisions faster than ever before.",
      benefits: [
        "Automated report generation and distribution",
        "Anomaly detection and proactive alerts",
        "Natural language queries for complex data",
        "Visualization recommendations based on data type",
      ],
      image: "./images/data-analysis.jpg",
    },
    hr: {
      icon: <Users className="h-6 w-6" />,
      title: "HR & Recruitment",
      description:
        "Streamline your hiring process with agents that screen resumes, schedule interviews, and answer candidate questions, ensuring a smooth experience for all parties.",
      benefits: [
        "Unbiased initial candidate screening",
        "Automated interview scheduling",
        "Candidate FAQ handling",
        "Onboarding process automation",
      ],
      image: "./images/hr-recruitment.jpg",
    },
    legal: {
      icon: <FileText className="h-6 w-6" />,
      title: "Legal Document Review",
      description:
        "Agents review contracts and legal documents, flagging potential issues and summarizing key points, saving your legal team valuable time.",
      benefits: [
        "Rapid contract review and comparison",
        "Identification of non-standard clauses",
        "Compliance checking against regulations",
        "Plain language summaries of complex documents",
      ],
      image: "./images/legal-document-review.jpg",
    },
    operations: {
      icon: <Building className="h-6 w-6" />,
      title: "Operations Management",
      description:
        "Optimize your operations with agents that monitor processes, predict maintenance needs, and coordinate resources across departments.",
      benefits: [
        "Predictive maintenance scheduling",
        "Inventory optimization",
        "Supply chain disruption detection",
        "Cross-department resource coordination",
      ],
      image: "./images/operations-management.jpg",
    },
  }

  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Business With AI Agents</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how organizations across industries are using our agentic AI platform to solve real business
              challenges.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(useCases).map(([key, useCase]) => (
            <Button
              key={key}
              variant={activeTab === key ? "default" : "outline"}
              className={`flex items-center gap-2 ${activeTab === key ? "bg-blue-600 hover:bg-blue-700" : "border-slate-300"}`}
              onClick={() => setActiveTab(key)}
            >
              <span className={activeTab === key ? "text-white" : "text-slate-700"}>{useCase.icon}</span>
              <span>{useCase.title}</span>
            </Button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">{useCases[activeTab].title}</h3>
              <p className="text-slate-600 mb-6">{useCases[activeTab].description}</p>

              <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
              <ul className="space-y-2 mb-8">
                {useCases[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.3334 4L6.00008 11.3333L2.66675 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white">
                Learn More
              </Button>
            </div>
            <div className="lg:w-1/2 bg-slate-100 flex items-center justify-center p-8">
              <img
                src={useCases[activeTab].image || "/placeholder.svg"}
                alt={`${useCases[activeTab].title} illustration`}
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
