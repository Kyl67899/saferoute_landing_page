import { CTA } from "@/component/landing/cta";
import { Demo } from "@/component/landing/demo";
import { FAQ } from "@/component/landing/faq";
import { Features } from "@/component/landing/features";
import { Footer } from "@/component/landing/footer";
import { ForSchools } from "@/component/landing/for-schools";
import { Header } from "@/component/landing/header";
import { Hero } from "@/component/landing/hero";
import { HowItWorks } from "@/component/landing/how-it-works";
import { Stats } from "@/component/landing/stats";
import { Testimonials } from "@/component/landing/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Demo />
      <ForSchools />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
