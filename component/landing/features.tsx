"use client"

import { useState } from "react"
import { 
  MapPin, 
  Bell, 
  Clock, 
  Users, 
  Route, 
  Radio,
  CheckCircle2,
  Smartphone
} from "lucide-react"
import { cn } from "@/lib/utils"

const parentFeatures = [
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description: "Track your child's bus in real-time with precise GPS updates every 10 seconds. Know exactly where they are at any moment.",
  },
  {
    icon: Bell,
    title: "Instant Push Alerts",
    description: "Get notified when the bus departs, arrives at your stop, reaches school, or in case of any delays or emergencies.",
  },
  {
    icon: Route,
    title: "Stop-by-Stop Progress",
    description: "See exactly which stop the bus is at and track progress along the entire route with real-time ETA updates.",
  },
  {
    icon: Clock,
    title: "Daily Trip Overview",
    description: "View departure time, expected arrival, driver information, and complete trip history all in one place.",
  },
]

const driverFeatures = [
  {
    icon: Radio,
    title: "One-Tap Trip Start",
    description: "Start your trip with a single button tap. The app automatically begins broadcasting your location to parents.",
  },
  {
    icon: MapPin,
    title: "Auto GPS Broadcasting",
    description: "Your location is automatically shared every 10 seconds. Focus on driving while the app handles communication.",
  },
  {
    icon: CheckCircle2,
    title: "Stop Advancement",
    description: "Mark each stop as completed with one tap. Parents are instantly notified when you reach their stop.",
  },
  {
    icon: Bell,
    title: "Broadcast Messages",
    description: "Send quick notifications to all parents using templates or custom messages for delays, emergencies, or updates.",
  },
]

export function Features() {
  const [activeTab, setActiveTab] = useState<"parents" | "drivers">("parents")

  const features = activeTab === "parents" ? parentFeatures : driverFeatures

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide">Features</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Everything you need for safe school commutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed for both parents and drivers
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-muted rounded-xl">
            <button
              onClick={() => setActiveTab("parents")}
              className={cn(
                "px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeTab === "parents"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Users className="w-4 h-4" />
              For Parents
            </button>
            <button
              onClick={() => setActiveTab("drivers")}
              className={cn(
                "px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeTab === "drivers"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Smartphone className="w-4 h-4" />
              For Drivers
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
