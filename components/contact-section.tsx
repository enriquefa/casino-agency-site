"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Send, MessageSquare, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    budget: "$10k - $50k/mo",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
    setIsSubmitting(false)
    if (res.ok) {
      setIsSubmitted(true)
      setFormState({ name: "", email: "", website: "", budget: "$10k - $50k/mo", message: "" }) 
      
      // 🚀 Push event to Google Tag Manager dataLayer
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'contact_form_success' })
      }
    } else {
      alert("Something went wrong. Please try again.")
    }
  }

  const accentColor = "#f6b848"

  const supportedPlatforms = [
    "Meta Ads", "Google Ads", "TikTok", "Taboola", "Coinzilla", "Voluum", "RedTrack"
  ]

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span 
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full border"
            style={{ 
              color: accentColor, 
              backgroundColor: `${accentColor}15`,
              borderColor: `${accentColor}30`
            }}
          >
            Contact & Scale
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Let&apos;s Engineer Your <span style={{ color: accentColor }}>Scale Engine</span>
          </h2>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to scale your casino, sportsbook, or crypto brand without risking your ad accounts? Lock in a performance consultation with our growth team.
              </p>

              {/* Direct Channels */}
              <div className="grid sm:grid-cols-2 gap-6 w-full text-left">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Mail className="w-4 h-4" style={{ color: accentColor }} /> Growth Email
                  </h3>
                  <a
                    href="mailto:growth@adsblackjack.com"
                    className="text-sm hover:underline font-medium break-all"
                    style={{ color: accentColor }}
                  >
                    growth@adsblackjack.com
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" style={{ color: accentColor }} /> Direct Telegram
                  </h3>
                  <a
                    href="https://t.me/Adsblackjack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline font-medium"
                    style={{ color: accentColor }}
                  >
                    @Adsblackjack
                  </a>
                </div>
              </div>

              {/* Platforms & Infrastructure */}
              <div className="w-full">
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider text-muted-foreground">
                  Supported Networks & S2S Tracking Stack
                </h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {supportedPlatforms.map((platform) => (
                    <span 
                      key={platform}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location & Response SLA */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-left">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <div>
                    <p className="font-medium text-foreground">LatAm Operating Hub</p>
                    <p className="text-muted-foreground text-sm">
                      Coronel Niceto Vega 4736, Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Zap className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} />
                  <p className="text-xs text-muted-foreground">
                    Guaranteed response within <strong className="text-foreground">24 hours</strong>. Dedicated Slack/Telegram syncs provided upon partnership.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Work Email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="url"
                  placeholder="Company Website or Brand URL"
                  value={formState.website}
                  onChange={(e) =>
                    setFormState({ ...formState, website: e.target.value })
                  }
                  className="bg-card border-border"
                />
              </div>
              <div>
                <select
                  value={formState.budget}
                  onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  className="w-full h-10 px-3 py-2 text-sm rounded-md bg-card border border-border text-foreground focus:outline-none"
                >
                  <option value="< $10k/mo">Estimated Monthly Ad Spend: &lt; $10k/mo</option>
                  <option value="$10k - $50k/mo">Estimated Monthly Ad Spend: $10k - $50k/mo</option>
                  <option value="$50k - $150k/mo">Estimated Monthly Ad Spend: $50k - $150k/mo</option>
                  <option value="$150k+/mo">Estimated Monthly Ad Spend: $150k+/mo</option>
                </select>
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your target GEOs, main growth bottlenecks, or specific acquisition channels (e.g. Meta, Native, Voluum tracking, Coinzilla)..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-card border-border resize-none min-h-[150px]"
                />
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-medium py-4 text-center rounded-xl bg-[#f6b848]/10 border border-[#f6b848]/30"
                  style={{ color: accentColor }}
                >
                  Strategy request received! Our growth team will reach out in under 24 hours.
                </motion.div>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-opacity disabled:opacity-50 cursor-pointer"
                  style={{ 
                    backgroundColor: accentColor, 
                    color: "#202020" 
                  }}
                >
                  {isSubmitting ? (
                    "Submitting Strategy Request..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}