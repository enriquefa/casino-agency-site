"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasAnimated = useRef(false)

  // Auto-detect decimal places if not explicitly passed (e.g., 4.2 -> 1 decimal place)
  const decimalPlaces =
    decimals ?? (end % 1 !== 0 ? end.toString().split(".")[1]?.length || 1 : 0)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    let animationFrameId: number
    const startTime = performance.now()

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Easing function for smooth acceleration/deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = easeOutQuart * end

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(updateCounter)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isInView, end, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {prefix}
      {count.toFixed(decimalPlaces)}
      {suffix}
    </motion.span>
  )
}