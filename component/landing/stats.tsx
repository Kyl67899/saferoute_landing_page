"use client"

import { Bus, Users, School, MapPin } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const stats = [
  {
    icon: School,
    value: 500,
    suffix: "+",
    label: "Schools Connected",
  },
  {
    icon: Bus,
    value: 2000,
    suffix: "+",
    label: "Buses Tracked Daily",
  },
  {
    icon: Users,
    value: 100000,
    suffix: "+",
    label: "Happy Parents",
  },
  {
    icon: MapPin,
    value: 50000000,
    suffix: "+",
    label: "Safe Trips Completed",
  },
]

function CasinoNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isSpinning, setIsSpinning] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          startAnimation()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  const startAnimation = () => {
    setIsSpinning(true)
    const duration = 2000
    const steps = 30
    const stepDuration = duration / steps
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      
      // Random numbers during spin phase
      if (currentStep < steps - 5) {
        const randomMultiplier = Math.random() * 2
        setDisplayValue(Math.floor(value * randomMultiplier))
      } 
      // Ease into final value
      else {
        const progress = (currentStep - (steps - 5)) / 5
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(Math.floor(value * eased + (value * 0.8) * (1 - eased)))
      }

      if (currentStep >= steps) {
        clearInterval(interval)
        setDisplayValue(value)
        setIsSpinning(false)
      }
    }, stepDuration)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(num >= 10000000 ? 0 : 1).replace(/\.0$/, '') + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K'
    }
    return num.toLocaleString()
  }

  return (
    <div ref={ref} className="relative overflow-hidden">
      <p 
        className={`text-3xl md:text-4xl font-bold text-foreground tabular-nums transition-all duration-100 ${
          isSpinning ? 'blur-[1px]' : ''
        }`}
      >
        {formatNumber(displayValue)}{suffix}
      </p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide">Trusted Across India</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
            Making school commutes safer, one trip at a time
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <CasinoNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
