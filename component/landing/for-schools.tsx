import { 
  School, 
  Shield, 
  BarChart3, 
  Clock, 
  Users, 
  Headphones,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Shield,
    title: "Enhanced Safety",
    description: "Real-time tracking ensures student safety and provides accountability for transportation operations.",
  },
  {
    icon: Users,
    title: "Parent Satisfaction",
    description: "Keep parents informed and reduce inquiry calls with automatic notifications and live tracking.",
  },
  {
    icon: BarChart3,
    title: "Operational Insights",
    description: "Access detailed analytics on routes, timing, and driver performance to optimize operations.",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reduce administrative burden with automated attendance tracking and trip logging.",
  },
]

const features = [
  "Custom school branding",
  "Admin dashboard access",
  "Unlimited buses & drivers",
  "Priority support",
  "API integration",
  "Detailed analytics",
]

export function ForSchools() {
  return (
    <section id="for-schools" className="py-20 md:py-28 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 text-background/80 text-sm font-medium mb-6">
              <School className="w-4 h-4" />
              For Schools & Institutions
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-background mb-6 text-balance">
              Partner with SafeRoute for safer school transportation
            </h2>

            <p className="text-lg text-background/70 mb-8">
              Join hundreds of schools across India who trust SafeRoute to manage their 
              school bus operations efficiently and safely.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-background mb-1">{benefit.title}</h3>
                    <p className="text-sm text-background/60">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <Headphones className="w-4 h-4" />
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 hover:text-background">
                View Pricing
              </Button>
            </div>
          </div>

          {/* Right Content - Features Card */}
          <div className="relative">
            <div className="bg-background rounded-3xl p-8 text-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <School className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">School Plan</h3>
                  <p className="text-sm text-muted-foreground">Everything you need</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-foreground">Custom</span>
                  <span className="text-muted-foreground">pricing</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Based on number of buses and students
                </p>
                <Button size="lg" className="w-full">
                  Get a Quote
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
