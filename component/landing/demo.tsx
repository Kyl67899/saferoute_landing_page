"use client"

import { useState, useEffect } from "react"
import { 
  MapPin, 
  Bell, 
  Clock, 
  Bus,
  CheckCircle2,
  Radio
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/util"

const stops = [
  { name: "Sector 45 Depot", time: "7:00 AM", status: "completed" },
  { name: "Green Park Colony", time: "7:12 AM", status: "completed" },
  { name: "Sunrise Apartments", time: "7:20 AM", status: "current" },
  { name: "Blue Ridge Society", time: "7:28 AM", status: "upcoming" },
  { name: "DPS International School", time: "7:40 AM", status: "upcoming" },
]

const notifications = [
  { 
    id: 1, 
    message: "Bus #42 has departed from depot",
    time: "7:00 AM",
    type: "departure"
  },
  { 
    id: 2, 
    message: "Aarav has been picked up at Stop #2",
    time: "7:12 AM",
    type: "pickup"
  },
  { 
    id: 3, 
    message: "Bus approaching your stop in 3 minutes",
    time: "7:17 AM",
    type: "alert"
  },
]

export function Demo() {
  const [activeDemo, setActiveDemo] = useState<"tracking" | "notifications" | "user" | "driver">("tracking")
  const [progress, setProgress] = useState(35)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 35
        return prev + 1
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide">Live Demo</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
            See SafeRoute in action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Interactive preview of the app experience
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-muted rounded-xl">
            <button
              onClick={() => setActiveDemo("tracking")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeDemo === "tracking"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <MapPin className="w-4 h-4" />
              Live Tracking
            </button>
            <button
              onClick={() => setActiveDemo("notifications")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeDemo === "notifications"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Bell className="w-4 h-4" />
              Notifications
            </button>
            <button
              onClick={() => setActiveDemo("driver")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeDemo === "driver"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Bus className="w-4 h-4" />
              Driver View
            </button>
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-lg">
            {activeDemo === "tracking" && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Map Area */}
                <div className="bg-muted rounded-2xl p-4 relative min-h-300px">
                  {/* Simulated Map */}
                  <div className="absolute inset-4 bg-background rounded-xl overflow-hidden">
                    {/* Route Line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path 
                        d="M10,90 L30,70 L50,60 L70,40 L90,10" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-border"
                        strokeDasharray="4 2"
                      />
                      <path 
                        d="M10,90 L30,70 L50,60 L70,40 L90,10" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-primary"
                        strokeDasharray={`${progress} 100`}
                      />
                    </svg>
                    
                    {/* Stop Markers */}
                    {[
                      { x: "10%", y: "90%", status: "completed" },
                      { x: "30%", y: "70%", status: "completed" },
                      { x: "50%", y: "60%", status: "current" },
                      { x: "70%", y: "40%", status: "upcoming" },
                      { x: "90%", y: "10%", status: "upcoming" },
                    ].map((stop, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-background",
                          stop.status === "completed" ? "bg-primary" : 
                          stop.status === "current" ? "bg-accent animate-pulse" : "bg-muted-foreground/30"
                        )}
                        style={{ left: stop.x, top: stop.y }}
                      />
                    ))}
                    
                    {/* Bus Icon */}
                    <div 
                      className="absolute w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                      style={{ 
                        left: `${35 + (progress - 35) * 0.5}%`, 
                        top: `${65 - (progress - 35) * 0.5}%` 
                      }}
                    >
                      <Bus className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  {/* ETA Badge */}
                  <div className="absolute top-6 right-6 bg-background border border-border rounded-xl px-4 py-2 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">ETA</p>
                        <p className="font-bold text-foreground">8 mins</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stops List */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Route Progress</h3>
                  <div className="space-y-3">
                    {stops.map((stop, index) => (
                      <div 
                        key={stop.name}
                        className={cn(
                          "flex items-center gap-4 p-3 rounded-xl transition-colors",
                          stop.status === "current" ? "bg-primary/10 border border-primary/20" : "bg-muted/50"
                        )}
                      >
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                          stop.status === "completed" ? "bg-primary text-primary-foreground" :
                          stop.status === "current" ? "bg-accent text-accent-foreground" :
                          "bg-muted text-muted-foreground"
                        )}>
                          {stop.status === "completed" ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={cn(
                            "font-medium",
                            stop.status === "upcoming" ? "text-muted-foreground" : "text-foreground"
                          )}>
                            {stop.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{stop.time}</p>
                        </div>
                        {stop.status === "current" && (
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeDemo === "notifications" && (
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    3 New
                  </span>
                </div>
                <div className="space-y-4">
                  {notifications.map((notif, index) => (
                    <div 
                      key={notif.id}
                      className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                        notif.type === "departure" ? "bg-primary/10" :
                        notif.type === "pickup" ? "bg-accent/10" : "bg-chart-3/10"
                      )}>
                        {notif.type === "departure" ? (
                          <Bus className={cn("w-5 h-5", "text-primary")} />
                        ) : notif.type === "pickup" ? (
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        ) : (
                          <Bell className="w-5 h-5 text-chart-3" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{notif.message}</p>
                        <p className="text-sm text-muted-foreground mt-1">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Get instant alerts on your phone</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* User */}
            {activeDemo === "user" && (
              <div className="max-w-md mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Bus className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Driver Dashboard</h3>
                <p className="text-muted-foreground mb-6">
                  One-tap trip management for drivers
                </p>

                <div className="bg-muted/50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Radio className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">Trip Status</span>
                    </div>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  </div>
                  <div className="text-left space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Route</span>
                      <span className="font-medium text-foreground">Morning Route A</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Stops Completed</span>
                      <span className="font-medium text-foreground">3 / 5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Students Onboard</span>
                      <span className="font-medium text-foreground">24</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button size="lg" className="w-full">
                    Mark Stop Done
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    Send Alert
                  </Button>
                </div>
              </div>
            )}

            {/* Driver */}
            {activeDemo === "driver" && (
              <div className="max-w-md mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Bus className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Driver Dashboard</h3>
                <p className="text-muted-foreground mb-6">
                  One-tap trip management for drivers
                </p>

                <div className="bg-muted/50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Radio className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">Trip Status</span>
                    </div>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  </div>
                  <div className="text-left space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Route</span>
                      <span className="font-medium text-foreground">Morning Route A</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Stops Completed</span>
                      <span className="font-medium text-foreground">3 / 5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Students Onboard</span>
                      <span className="font-medium text-foreground">24</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button size="lg" className="w-full">
                    Mark Stop Done
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    Send Alert
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
