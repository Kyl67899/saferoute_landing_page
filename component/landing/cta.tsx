import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Start tracking your child&apos;s bus today
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join over 100,000 parents who trust SafeRoute for peace of mind. 
          Download the app and connect to your school in minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button size="lg" variant="secondary" className="gap-2">
            <Download className="w-5 h-5" />
            Download Free
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground gap-2"
          >
            Contact Sales
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* App Store Buttons */}
        <div className="flex items-center gap-4 justify-center">
          <Link href="#" className="transition-transform hover:scale-105">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="h-14"
            />
          </Link>
          <Link href="#" className="transition-transform hover:scale-105">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on the App Store" 
              className="h-14"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
