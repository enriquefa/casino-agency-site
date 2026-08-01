"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
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
      setFormState({ name: "", email: "", website: "", message: "" }) 
      
      // 🚀 Push event to Google Tag Manager dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'contact_form_success' });
    } else {
      alert("Something went wrong. Please try again.")
    }
  }

  const accentColor = "#f6b848"

  return (
    <section id="contact" className="py-24 md:py-32">
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
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Let&apos;s Engineer Your <span style={{ color: accentColor }}>Scale Engine</span>
          </h2>
        </motion.div>

        {/* Two-Column Grid with responsive ordering: Form appears first on mobile, info on left on desktop */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Block: order-2 on mobile (below form), lg:order-1 on desktop (left side) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to scale your store and protect your margins? Drop your details below to lock in a performance consultation with our growth team.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Growth Partnerships
                </h3>
                <p className="text-muted-foreground">Strategy & Performance</p>
                <a
                  href="mailto:growth@maroteagency.com"
                  className="hover:underline inline-flex items-center gap-2 mt-1 justify-center lg:justify-start"
                  style={{ color: accentColor }}
                >
                  <Mail className="w-4 h-4" />
                  growth@maroteagency.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Offices</h3>
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                    <div>
                      <p className="font-medium text-foreground">LatAm Headquarters</p>
                      <p className="text-muted-foreground text-sm">
                        Coronel Niceto Vega 4736, Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Block: order-1 on mobile (appears first), lg:order-2 on desktop (right side) */}
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
                  style={{ 
                    outlineColor: accentColor,
                  }}
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
                  style={{ 
                    outlineColor: accentColor,
                  }}
                />
              </div>
              <div>
                <Input
                  type="url"
                  placeholder="Company Website (Optional)"
                  value={formState.website}
                  onChange={(e) =>
                    setFormState({ ...formState, website: e.target.value })
                  }
                  className="bg-card border-border"
                  style={{ 
                    outlineColor: accentColor,
                  }}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your e-commerce store (Monthly revenue, ad spend targets, or current bottlenecks)..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={8}
                  className="bg-card border-border resize-none min-h-[180px]"
                  style={{ 
                    outlineColor: accentColor,
                  }}
                />
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-medium py-4 text-center rounded-full"
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
                  className="w-full py-3.5 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-opacity disabled:opacity-50"
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