import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "SafeRoute - Think Uber Ride Sharing but for Schools and Universities",
  description: 'SafeRoute is a ride-sharing platform designed specifically for schools and universities, providing a safe and convenient transportation solution for students, faculty, and staff. With SafeRoute, users can easily find and share rides to and from campus, ensuring a secure and efficient way to get around while fostering a sense of community within the educational environment.',
  keywords: [
    "SafeRoute",
    "ride-sharing",
    "schools",
    "universities",
    "transportation",
    "students",
    "faculty",
    "staff",
    "secure transportation",
    "convenient transportation",
    "campus transportation",
    "community transportation"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("", "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
