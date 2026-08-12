"use client"

import { motion } from "framer-motion"
import { Search, Share2, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedCounter } from "./animated-counter"

// Highly relevant iGaming & Crypto service data
const services = [
  {
    icon: Search,
    title: "Google Ads & Intent Search",
    subtitle: "Capture high-LTV players the exact moment they search, fully compliant.",
    description:
      "Winning paid search in iGaming and crypto requires more than budget—it requires bulletproof certification and policy-compliant account architecture. We manage licensed campaigns that dominate search real estate, driving high-intent traffic while uncertified competitors get sidelined by algorithm suspensions.",
    stat: 4.2,
    statSuffix: "x", 
    statLabel: "Average Return on Ad Spend (ROAS)",
  },
  {
    icon: Share2,
    title: "Paid Social & Omnichannel Scale",
    subtitle: "Scale across Meta, TikTok, and Snap despite high-risk vertical restrictions.",
    description:
      "Social platforms gate real-money gambling and crypto behind strict approvals. We navigate the red tape. By combining certified paid social campaigns with a robust affiliate and programmatic layer, we unlock scalable, predictable acquisition channels that drive consistent First-Time Depositors (FTDs) at your target CPA.",
    stat: 40,
    statLabel: "Average Decrease in FTD Acquisition Cost",
  },
  {
    icon: Globe,
    title: "CRO, Funnel & KYC Optimization",
    subtitle: "Stop losing expensive clicks to broken deposit flows and high-friction KYC.",
    description:
      "Ad spend only scales if the funnel converts. We audit and engineer your entire user journey—from landing page UX and registration flows to KYC verification and the final deposit prompt. By eliminating friction points, we turn more of your paid traffic into active, depositing players without increasing your media budget.",
    stat: 35,
    statLabel: "Lift in Registration-to-Deposit Conversion",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Growth Infrastructure Built 
            <br />
            <span className="text-[#f6b848]">for iGaming & Crypto</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            <strong className="text-foreground font-semibold">Stop trusting your budget to generalist agencies. </strong> 
            We deploy senior media buyers who specialize exclusively in navigating compliance, securing account certifications, 
            <span className="text-foreground font-medium"> and scaling First-Time Depositors (FTDs) across tier-1 platforms</span>.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-[#f6b848]/50 transition-colors duration-300 flex flex-col"
            >
              <motion.div 
                className="absolute top-8 right-8 text-5xl font-bold text-muted/30"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              <motion.div 
                className="w-12 h-12 bg-[#f6b848]/10 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(246, 184, 72, 0.2)",
                  transition: { duration: 0.2 }
                }}
              >
                <service.icon className="w-6 h-6 text-[#f6b848]" />
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm font-medium text-[#f6b848] mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="border-t border-border pt-6 mt-auto">
                <div className="text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter 
                    end={service.stat} 
                    suffix={service.statSuffix || "%"} 
                    duration={1500}
                    className="text-[#f6b848]"
                  />
                </div>
                <div className="text-sm text-muted-foreground">{service.statLabel}</div>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#f6b848] group-hover:underline w-fit"
              >
                <span>Consult</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}