import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Fingerprint,
  CheckCircle2
} from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
  },
  {
    icon: Fingerprint,
    title: "Role-Based Access",
    description: "Strict access controls ensure only authorized parents and drivers can view relevant information.",
  },
  {
    icon: Eye,
    title: "Privacy First",
    description: "Location data is only shared with verified parents and school administrators. No third-party sharing.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Hosted on enterprise-grade cloud infrastructure with 99.9% uptime guarantee and regular backups.",
  },
]

const certifications = [
  "SOC 2 Type II Compliant",
  "GDPR Compliant",
  "ISO 27001 Certified",
  "Regular Security Audits",
]

export function Safety() {
  return (
    <section id="safety" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Security & Privacy
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Your child&apos;s safety is our top priority
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              We&apos;ve built SafeRoute with security at its core. Your family&apos;s data is 
              protected with enterprise-grade security measures.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Certifications */}
          <div className="relative">
            <div className="bg-muted/50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Certified Secure</h3>
                <p className="text-muted-foreground">
                  Meeting the highest standards of data protection
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-sm text-center text-muted-foreground">
                  <span className="font-semibold text-foreground">Zero data breaches</span> since launch. 
                  Your trust is our responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
