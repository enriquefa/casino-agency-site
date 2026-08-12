"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

// 🌟 HIGH-CONVERTING IGAMING & CRYPTO FEATURES
const features = [

  "Weekly creative production, not quarterly",
  "Blended ROAS & Cost-per-FTD Optimization",
  "Senior-only media buying — Google, Meta, TikTok certification specialists",
  "Affiliate & programmatic infrastructure built in-house",
  "Bilingual LatAm Growth Experts",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden relative" style={{ backgroundColor: "#202020" }}>
      
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Content & Features */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-6 xl:col-span-5 px-6"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#f6b848] bg-[#f6b848]/10 rounded-full border border-[#f6b848]/20"
          >
            About Us
          </motion.span>
          
          {/* 🌟 PREMIUM HEADLINE */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Senior by Default, <span className="text-[#f6b848]">Not by Upgrade.</span>
          </h2>
          
          {/* 🌟 POSITIONING HOOKS */}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
           Most agencies staff your account with whoever's available and call it 'account management.' Marote is built the other way, every media buyer, creative, and compliance specialist on the team has already run performance campaigns in regulated, high-risk verticals before joining. You're never the account someone's learning the certification process on.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Based entirely across Latin America, the team works inside your operating hours, joins your Slack, and tracks every certification renewal before it becomes a suspended account.
          </p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <CheckCircle className="w-5 h-5 text-[#f6b848] flex-shrink-0" />
                </motion.div>
                <span className="text-sm text-foreground group-hover:text-[#f6b848] transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Bleeding Edge Wrapper */}
        <div className="lg:col-span-6 xl:col-span-7 relative w-full h-[380px] sm:h-[480px] lg:h-[680px] mt-8 lg:mt-0">
          
          {/* Container styling from image_28a381.jpg */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[60vw] overflow-hidden bg-[#1a1a1a]/40 border-y lg:border-l border-white/5">
            
            <div className="absolute w-[140%] lg:w-[120%] h-[150%] -left-[15%] lg:-left-[10%] -top-[15%] lg:-top-[22%] origin-center select-none pointer-events-none rotate-[-8deg] lg:rotate-[-12deg]">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 32,
                  repeat: Infinity,
                }}
                className="flex flex-col w-full"
              >
                <img 
                  src="/images/ads.avif" 
                  alt="Marote Performance Showcase Feed Panel A"
                  className="w-full h-auto object-cover"
                />
                <img 
                  src="/images/ads.avif" 
                  alt="Marote Performance Showcase Feed Panel B"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>

            {/* Seamless Blending Gradients */}
            <div 
              className="absolute inset-0 pointer-events-none z-20 hidden lg:block"
              style={{ background: "radial-gradient(ellipse at left, transparent 10%, #202020 90%)" }}
            />
            {/* Mobile-specific gradients for top and bottom blending */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#202020] to-transparent pointer-events-none z-30 lg:hidden" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#202020] to-transparent pointer-events-none z-30 lg:hidden" />
            {/* Desktop Left-edge shadow */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#202020] to-transparent pointer-events-none z-30 hidden lg:block" />

          </div>
        </div>

      </div>
    </section>
  )
}