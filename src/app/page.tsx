import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Scale } from "lucide-react";
import { DashboardWidget } from "@/components/DashboardWidget";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 py-10 md:py-20 text-center">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-primary/10 text-primary border-primary/20 mb-4 tracking-tight">
          <GraduationCap className="w-4 h-4 mr-2" />
          Law made simple for everyone
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance">
          Understand Your Rights Without the Jargon
        </h1>
        <p className="text-xl text-muted-foreground font-medium md:leading-relaxed text-balance">
          A high-quality, beginner-friendly legal education platform designed to explain complex legal concepts using simple language and real-world scenarios.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/learn/introduction"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
          >
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/topics"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Browse Topics
          </Link>
        </div>
      </div>

      <DashboardWidget />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left w-full max-w-5xl">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Simple Explanations</h3>
          <p className="text-muted-foreground leading-relaxed">
            We break down the complexities of law into bite-sized, easy-to-understand explanations with real-world analogies.
          </p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Scale className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Structured Paths</h3>
          <p className="text-muted-foreground leading-relaxed">
            Follow our guided learning paths from Introduction to Law, to Fundamental Rights and Criminal Law basics.
          </p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <ArrowRight className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Actionable Knowledge</h3>
          <p className="text-muted-foreground leading-relaxed">
            Learn what to do in practical scenarios, like filing an FIR, knowing your rights during a traffic stop, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
