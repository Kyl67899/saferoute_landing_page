"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I start tracking my child's bus?",
    answer: "Download the SafeRoute app from Google Play or App Store, create an account, and enter the 6-character school code provided by your school. Once verified, you'll instantly see your child's bus location and receive notifications.",
  },
  {
    question: "Is SafeRoute free for parents?",
    answer: "Yes! The SafeRoute app is completely free for parents. Schools pay for the service, allowing all parents to track their children's bus at no cost.",
  },
  {
    question: "How accurate is the GPS tracking?",
    answer: "Our GPS tracking updates every 10 seconds with accuracy within 5-10 meters. This ensures you always know the precise location of your child's bus.",
  },
  {
    question: "What happens if the bus is delayed?",
    answer: "You'll receive an automatic push notification if the bus deviates from its schedule or encounters delays. Drivers can also send custom messages to inform parents about traffic, weather, or other situations.",
  },
  {
    question: "Can multiple family members track the bus?",
    answer: "Absolutely! You can add multiple family members to your account. Each member will receive their own notifications and can track the bus independently from their devices.",
  },
  {
    question: "How does the school code system work?",
    answer: "Each school receives a unique 6-character code. When parents enter this code, they're connected to their school's bus network and can see only the buses assigned to their children.",
  },
  {
    question: "Is my location data secure?",
    answer: "Yes, we take security very seriously. All data is encrypted using AES-256 encryption, and we follow strict privacy policies. Location data is only shared with verified parents and school administrators.",
  },
  {
    question: "What devices are supported?",
    answer: "SafeRoute works on Android (5.0 and above) and iOS (12.0 and above) devices. We also have a web dashboard for school administrators.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide">FAQ</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about SafeRoute
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
