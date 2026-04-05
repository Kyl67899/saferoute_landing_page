import { Star } from "lucide-react"


const testimonials = [
  {
    quote: "SafeRoute has completely changed how I handle my morning routine. I know exactly when the bus will arrive, and I can see my daughter safely reach school.",
    author: "Meera Sharma",
    role: "Parent of 2",
    location: "Delhi",
    avatar: "MS",
    rating: 5,
  },
  {
    quote: "As a school administrator, this app has reduced our parent inquiry calls by 80%. Parents are happy, and our staff can focus on what matters.",
    author: "Rajesh Kumar",
    role: "School Principal",
    location: "Mumbai",
    avatar: "RK",
    rating: 5,
  },
  {
    quote: "The driver app is so simple to use. One tap to start, and the GPS does everything automatically. Parents get updates without me doing anything extra.",
    author: "Suresh Yadav",
    role: "School Bus Driver",
    location: "Bangalore",
    avatar: "SY",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wide">Testimonials</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Loved by parents across India
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our community has to say about SafeRoute
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App Store Ratings */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground">Google Play</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">4.8</p>
                <p className="text-xs text-muted-foreground">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
