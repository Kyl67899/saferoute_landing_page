import { Download, QrCode, MapPin, Bell } from "lucide-react"

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the App",
    description: "Get SafeRoute from Google Play or App Store. Available for both Android and iOS devices.",
  },
  {
    icon: QrCode,
    step: "02",
    title: "Enter School Code",
    description: "Use the unique 6-character code provided by your school to connect to your child's bus.",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Track in Real-Time",
    description: "See the live location of your child's bus with precise GPS tracking updated every 10 seconds.",
  },
  {
    icon: Bell,
    step: "04",
    title: "Get Instant Updates",
    description: "Receive push notifications for departures, arrivals, delays, and any important announcements.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wide">How It Works</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple setup process to start tracking your child&apos;s bus immediately
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.step}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
