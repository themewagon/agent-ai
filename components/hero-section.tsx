"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Sparkles size={16} className="mr-2" />
                <span className="text-sm font-medium">Next-Gen AI Agents</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-violet-900 bg-clip-text text-transparent">
                AI Agents That Work For You
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
                Automate complex workflows, make decisions, and solve problems with our agentic AI platform. Your
                digital workforce is here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-6 text-lg"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Start Building</span>
                  <ArrowRight
                    size={20}
                    className={`ml-2 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                  />
                </Button>
                <Button variant="outline" className="border-slate-300 px-8 py-6 text-lg">
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center text-slate-500 text-sm">
                <Zap size={16} className="mr-2 text-yellow-500" />
                <span>No credit card required • Free tier available</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-6 border border-slate-200 shadow-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl flex items-center justify-center">
                  <Bot size={24} className="text-white" />
                </div>
                <div className="pt-6">
                  <div className="bg-white rounded-lg p-4 mb-4 border border-slate-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-medium">U</span>
                      </div>
                      <p className="text-slate-800">Schedule meetings with clients next week</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg p-4 mb-4 text-white">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="text-white font-medium">A</span>
                      </div>
                      <p>I'll help you schedule those meetings.</p>
                    </div>
                    <div className="pl-11 space-y-2 text-sm">
                      <p className="bg-white/10 rounded p-2">✓ Checking your calendar availability</p>
                      <p className="bg-white/10 rounded p-2">✓ Drafting emails to 5 clients</p>
                      <p className="bg-white/10 rounded p-2">✓ Suggesting optimal meeting times</p>
                      <p className="bg-white/10 rounded p-2">✓ Creating calendar events</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-medium">U</span>
                      </div>
                      <p className="text-slate-800">Perfect, thank you!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl blur-3xl top-6 left-6"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
