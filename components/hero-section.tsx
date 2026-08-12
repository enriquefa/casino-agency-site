"use client"
 
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
 
// ⚙️ QUICK CONFIGURATION
const CAL_COM_SLUG = "https://cal.com/adsblackjack/free-strategy-session" // <-- Your official clean link!
const ZOHO_EMAIL = "enrique@maroteagency.com"          // <-- Your professional Zoho inbox
 
export function HeroSection() {
 
  // Dynamically load Cal.com's clean visual overlay script using the correct production endpoint
  useEffect(() => {
    if (typeof window !== "undefined") {
      (function (C: any, A: string, L: string) {
        let p = function (a: any, ar: any) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(cal, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
 
      if ((window as any).Cal) {
        (window as any).Cal("init", { origin: "https://cal.com" });
        (window as any).Cal("ui", { 
          theme: "dark", 
          styles: { branding: { brandColor: "#f6b848" } }, 
          hideEventTypeDetails: false, 
          layout: "month_view" 
        });
      }
    }
  }, []);
 
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden pt-16 md:pt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#f6b848]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#f6b848]/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
 
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 text-center my-auto pt-10 md:pt-12">
        <motion.span 
          className="inline-block px-3.5 py-1 mb-5 text-xs md:text-sm font-medium text-[#f6b848] bg-[#f6b848]/10 rounded-full border border-[#f6b848]/20"
        >
          iGaming & Crypto Performance Agency
        </motion.span>
 
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight max-w-4xl mx-auto"
        >
          Dominate New Markets <br className="hidden sm:block" />
          <span className="text-[#f6b848]">with High-Converting Casino & Crypto Ads.</span>
        </motion.h1>
 
        <p className="max-w-xl mx-auto text-base md:text-xl text-muted-foreground mb-8 md:mb-10 text-pretty px-2 leading-relaxed">
         We scale iGaming, Casino, and Crypto brands globally. Through data-driven media buying on Meta, Google, TikTok, and Snapchat, we acquire high-value players and investors in untapped markets.
        </p>
 
        {/* --- ACTIONS BUTTON CONTAINER --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8 md:mb-16 w-full max-w-sm sm:max-w-none mx-auto">
          
          {/* Cal.com Dynamic Popup Button */}
          <button
            type="button"
            data-cal-link={CAL_COM_SLUG}
            data-cal-config='{"layout":"month_view"}'
            className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f6b848] text-[#202020] font-semibold rounded-full hover:bg-[#f6b848]/90 transition-all shadow-lg shadow-[#f6b848]/20 text-sm md:text-base cursor-pointer w-full sm:w-auto"
          >
            Get a Free Strategy Call 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
 
          {/* 🌟 UPDATED: Scroll to Form Button */}
          <Link 
            href="#contact"
            className="flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors text-sm md:text-base w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
            Send Us Your Bottleneck
          </Link>
        </div>
      </div>
 
      {/* --- INFINITE MOVING LOGO MARQUEE --- */}
      <div className="w-full py-12 bg-background/40 backdrop-blur-md overflow-hidden z-20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 mb-6 md:mb-8">
          <p className="text-center text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40">
            Expert Integration with Your iGaming & Crypto Stack
          </p>
        </div>
 
        <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <motion.div
            className="flex gap-20 md:gap-40 shrink-0 items-center justify-around min-w-full opacity-50 grayscale brightness-0 invert"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {/* TODO: source real logo assets for these 5 — filenames below are placeholders */}
                <img src="/logo/meta.png" alt="Meta Ads" className="h-16 md:h-24 w-auto object-contain shrink-0 aspect-[2/1]" />
                <img src="/logo/google.png" alt="Google Ads" className="h-16 md:h-24 w-auto object-contain shrink-0 aspect-[2/1]" />
                <img src="/logo/tiktok.png" alt="TikTok Ads" className="h-16 md:h-24 w-auto object-contain shrink-0 aspect-[2/1]" />
                <img src="/logo/voluum.png" alt="Voluum" className="h-16 md:h-24 w-auto object-contain shrink-0 aspect-[2/1]" />
                <img src="/logo/redtrack.png" alt="RedTrack" className="h-16 md:h-24 w-auto object-contain shrink-0 aspect-[2/1]" />
                <img src="/logo/everflow.png" alt="Everflow" className="h-16 md:h-24 w-auto object-contain shrink-0 aspect-[2/1]" />
                <img src="/logo/coinzilla.png" alt="Coinzilla" className="h-16 md:h-24 w-auto object-contain shrink-0 aspect-[2/1]" />
                <img src="/logo/taboola.png" alt="Taboola" className="h-16 md:h-24 w-auto object-contain shrink-0 aspect-[2/1]" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
 
    </section>
  )
}