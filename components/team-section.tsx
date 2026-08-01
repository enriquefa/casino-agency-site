"use client"

import { motion } from "framer-motion"

// 🌟 UPGRADED: High-intent, performance-focused role titles
const team = [
  { name: "Santiago", role: "Head of Brand Growth", initials: "S", color: "#f6b848" },
  { name: "Victor", role: "Co-Founder & Growth Architect", initials: "V", color: "#48c6f6" },
  { name: "Federico", role: "Lead Performance Media Buyer", initials: "F", color: "#f66b48" },
  { name: "Noah", role: "Attribution & Tracking Lead", initials: "N", color: "#9b59b6" },
  { name: "Ethan", role: "Full-Stack CRO Engineer", initials: "E", color: "#2ecc71" },
  { name: "Sophie", role: "Direct Response Creative Director", initials: "S", color: "#e74c3c" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#f6b848] bg-[#f6b848]/10 rounded-full border border-[#f6b848]/20"
          >
            Our Team
          </motion.span>
          
          {/* 🌟 UPGRADED: Positioning Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            No Juniors. <span className="text-[#f6b848]">No Handoffs.</span>
          </h2>
          
          {/* 🌟 UPGRADED: Dynamic E-com Subtitle */}
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            No entry-level interns or generic account managers passing the buck. Just data-focused media buyers, direct-response creatives, and CRO engineers hyper-focused on your store's bottom line.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <motion.div 
                className="relative w-24 h-24 mx-auto mb-4 rounded-full bg-secondary border-2 border-border flex items-center justify-center overflow-hidden"
                whileHover={{ 
                  borderColor: "#f6b848",
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span 
                  className="text-2xl font-bold text-muted-foreground"
                  whileHover={{ 
                    color: "#f6b848",
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {member.initials}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-[#f6b848]/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.h3 
                className="font-semibold text-foreground mb-1 group-hover:text-[#f6b848] transition-colors"
                whileHover={{ color: "#f6b848" }}
                transition={{ duration: 0.2 }}
              >
                {member.name}
              </motion.h3>
              
              {/* 🌟 Renders the sharper, niche-aligned role */}
              <p className="text-sm text-muted-foreground leading-snug px-2">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}