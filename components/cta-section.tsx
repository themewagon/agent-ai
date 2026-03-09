"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl overflow-hidden"
        >
          <div className="relative px-6 py-16 md:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to transform your business with AI agents?
                </h2>
                <p className="text-blue-100 text-lg max-w-xl">
                  Start your free 14-day trial today. No credit card required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-slant-600 hover:bg-blue-50 px-8 py-6 text-lg">Start Free Trial</Button>
                <Button variant="outline" className="bg-white text-slant-600 hover:bg-blue-50 px-8 py-6 text-lg">
                  <span>Schedule Demo</span>
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
