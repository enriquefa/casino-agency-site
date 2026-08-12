"use client"

import { motion } from "framer-motion"
import { Search, Share2, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedCounter } from "./animated-counter"

// NOTE: stat/statSuffix values below are carried over as placeholders (same as the
// ecommerce version) — swap for real figures once there's client data in this vertical.
const services = [
  {
    icon: Search,
    title: "Google Ads & Certified Search",
    subtitle: "Capture ready-to-play and ready-to-invest audiences the moment they search.",
    description:
      "Paid search in iGaming and crypto is won before the auction — through certification, licensing documentation, and campaign structures built to survive Google's evolving policy reviews. We manage certified accounts for licensed casino, sportsbook, and crypto brands, structured to protect account health while uncertified competitors get suspended.",
    stat: 3.8,
    statSuffix: "x", 
    statLabel: "Average Search ROAS",
  },
  {
    icon: Share2,
    title: "Paid Social & Affiliate Growth",
    subtitle: "Meta and TikTok gate real-money gambling and crypto behind certification and market approval — the brands that get through keep testing, not the ones with the biggest budget.",
    description:
       "We run compliant paid social wherever certification allows it, and build the affiliate and programmatic layer that carries acquisition where paid social can't reach. Structured creative testing, tracked partner links, predictable cost per first-time depositor.",
    stat: 35,
    statLabel: "Average decrease in Cost per FTD (First-Time Deposit)",
  },
  {
    icon: Globe,
    title: "Funnel & Compliance Engineering",
    subtitle: "Ad spend scales. Deposit friction and compliance gaps don't fix themselves.",
    description:
      "We audit your registration flow, KYC/verification steps, deposit funnel, mobile UX, and geo-targeting — and fix what's cutting into first-time deposits before they happen. Same spend, better return.",
    stat: 25,
    statLabel: "Average FTD Conversion Lift",
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
      ease: "easeOut" as const, // 🌟 FIXED: Added "as const" to fix TS error from image_289477.png
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
            Strategies Built 
            <br />
            <span className="text-[#f6b848]">for iGaming & Crypto</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            <strong className="text-foreground font-semibold">Senior experts at the helm, not junior account handlers. </strong> 
            We run certified Google, Meta, and TikTok campaigns
            <span className="text-foreground font-medium">, plus affiliate and programmatic, for casino, sportsbook, and crypto brands</span>.
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
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-[#f6b848]/50 transition-colors duration-300"
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
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="border-t border-border pt-6">
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
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#f6b848] group-hover:underline"
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