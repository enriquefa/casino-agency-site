"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"

// 🌟 Option 1: E-commerce Performance Data Array
const stats = [
  { value: 10, prefix: "$", suffix: "M+", label: "Client Revenue Generated" },
  { value: 3.8, prefix: "", suffix: "x", label: "Average Blended ROAS" },
  { value: 35, prefix: "", suffix: "%", label: "Average CAC Reduction" },
  { value: 50, prefix: "", suffix: "+", label: "E-com Brands Scaled" },
]

export function StatsSection() {
  return (
    <section className="py-20 border-y border-border bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f6b848] mb-3 tabular-nums">
                  {/* 🌟 Renders the prefix (like $) inline with the counter */}
                  {stat.prefix}
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
                <motion.div 
                  className="absolute -inset-4 bg-[#f6b848]/5 rounded-2xl -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                viewport={{ once: true }}
                className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-medium"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}