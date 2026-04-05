"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Bell, Shield, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now available across India
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Know exactly where your child is,{" "}
              <span className="text-primary">every moment</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Real-time school bus tracking with instant notifications. 
              Peace of mind for parents. Efficiency for schools.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Download Free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>

            {/* App Store Buttons */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <Link href="#" className="transition-transform hover:scale-105">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  width={200}
                  height={200}
                  className="h-12"
                />
              </Link>
              <Link href="#" className="transition-transform hover:scale-105">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  width={200}
                  height={200}
                  className="h-12"
                />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Live GPS</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-primary" />
                <span>Instant Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>100% Secure</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-280px md:w-[320px] h-560px md:h-640px bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content */}
                  <div className="p-4 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-foreground rounded-sm" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg">👋</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Good morning,</p>
                        <p className="font-semibold text-foreground">Priya</p>
                      </div>
                    </div>

                    {/* Live Tracking Card */}
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                          </span>
                          <span className="text-sm font-medium text-primary">Live Tracking</span>
                        </div>
                        <span className="text-xs text-muted-foreground">Bus #42</span>
                      </div>
                      
                      {/* Mini Map */}
                      <div className="w-full h-28 bg-muted rounded-xl mb-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M20%2050%20L80%2050%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M50%2020%20L50%2080%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-primary-foreground text-sm">🚌</span>
                        </div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-[8px]">🏫</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-muted-foreground">ETA to School</p>
                          <p className="text-lg font-bold text-foreground">8 mins</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Next Stop</p>
                          <p className="text-sm font-medium text-foreground">Green Park</p>
                        </div>
                      </div>
                    </div>

                    {/* Recent Notifications */}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground mb-3">Recent Updates</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Bell className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Bus departed</p>
                            <p className="text-xs text-muted-foreground">Left Sector 45 • 2 min ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-accent" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Aarav picked up</p>
                            <p className="text-xs text-muted-foreground">At Stop #3 • 5 min ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-8 top-20 bg-card border border-border rounded-2xl p-4 shadow-lg max-w-180px">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bell className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Push Notification</span>
                </div>
                <p className="text-xs text-muted-foreground">Bus #42 arriving at your stop in 2 minutes</p>
              </div>

              <div className="absolute -right-4 bottom-32 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground">Safe trips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
