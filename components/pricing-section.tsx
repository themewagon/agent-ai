"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 29,
      annualPrice: 290,
      features: ["2 AI agents", "100 agent runs per month", "Basic integrations", "Email support", "7-day history"],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "10 AI agents",
        "1,000 agent runs per month",
        "Advanced integrations",
        "Priority support",
        "30-day history",
        "Custom agent training",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For organizations with advanced needs",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited AI agents",
        "Custom agent runs",
        "All integrations",
        "Dedicated support",
        "Unlimited history",
        "Custom agent training",
        "Advanced security",
        "SLA guarantees",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the plan that's right for your business, with no hidden fees or surprises.
            </p>

            <div className="flex items-center justify-center mt-8 mb-12">
              <span className={`mr-3 ${isAnnual ? "text-slate-600" : "text-slate-900 font-medium"}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-slate-200"
              >
                <span className="sr-only">Toggle pricing period</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    isAnnual ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? "text-slate-900 font-medium" : "text-slate-600"}`}>
                Annual <span className="text-green-600 text-sm font-medium">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-blue-600 shadow-lg shadow-blue-100"
                  : "border border-slate-200 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">Most Popular</div>
              )}
              <div className="p-6 md:p-8 bg-white">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <span className="text-4xl font-bold">
                       ${isAnnual ? (plan.annualPrice / 12).toFixed(2) : plan.monthlyPrice}

                      </span>
                      <span className="text-slate-600">/month</span>
                      {isAnnual && (
                        <div className="text-sm text-slate-500 mt-1">Billed annually (${plan.annualPrice}/year)</div>
                      )}
                    </>
                  ) : (
                    <span className="text-2xl font-bold">Custom Pricing</span>
                  )}
                </div>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                      : "bg-white border border-slate-300 hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-200">
                <h4 className="font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
