"use client"

import { useEffect, useState, useRef } from "react"

interface UseCounterOptions {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
}

export function useCounter({
  end,
  duration = 2000,
  delay = 0,
  suffix = "",
  prefix = "",
}: UseCounterOptions) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const countRef = useRef(0)

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const timer = setInterval(() => {
      const now = Date.now()
      const remaining = Math.max(endTime - now, 0)
      const progress = 1 - remaining / duration

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.round(easeOutQuart * end)

      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (remaining === 0) {
        clearInterval(timer)
        setCount(end)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, end, duration])

  const start = () => {
    setTimeout(() => setHasStarted(true), delay)
  }

  return {
    count,
    displayValue: `${prefix}${count}${suffix}`,
    start,
    hasStarted,
  }
}
