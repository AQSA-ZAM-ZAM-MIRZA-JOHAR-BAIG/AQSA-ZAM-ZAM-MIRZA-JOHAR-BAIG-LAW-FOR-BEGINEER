"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Scale, Book, Shield, Gavel, CheckCircle2 } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

const mainNavItems = [
  {
    title: "Introduction to Law",
    href: "/learn/introduction",
    icon: Book,
    items: [
      { title: "What is Law?", href: "/learn/introduction/what-is-law", slug: "what-is-law" },
      { title: "Types of Law", href: "/learn/introduction/types-of-law", slug: "types-of-law" },
      { title: "How Laws are Made", href: "/learn/introduction/how-laws-are-made", slug: "how-laws-are-made" },
      { title: "The Justice System", href: "/learn/introduction/justice-system", slug: "justice-system" },
    ],
  },
  {
    title: "Civil Law Basics",
    href: "/learn/civil",
    icon: Scale,
    items: [
      { title: "Basics of Contracts", href: "/learn/civil/contracts", slug: "contracts" },
      { title: "What is a Tort?", href: "/learn/civil/torts", slug: "torts" },
      { title: "Property Law", href: "/learn/civil/property-law", slug: "property-law" },
      { title: "Family Law", href: "/learn/civil/family-law", slug: "family-law" },
    ],
  },
  {
    title: "Fundamental Rights",
    href: "/learn/rights",
    icon: Shield,
    items: [
      { title: "Right to Equality", href: "/learn/rights/equality", slug: "equality" },
      { title: "Right to Freedom", href: "/learn/rights/freedom", slug: "freedom" },
      { title: "Article 32", href: "/learn/rights/article-32", slug: "article-32" },
    ],
  },
  {
    title: "Criminal Law Basics",
    href: "/learn/criminal",
    icon: Gavel,
    items: [
      { title: "What is an FIR?", href: "/learn/criminal/what-is-fir", slug: "what-is-fir" },
      { title: "Bail Basics", href: "/learn/criminal/bail", slug: "bail" },
      { title: "Arrest Rights", href: "/learn/criminal/arrest-rights", slug: "arrest-rights" },
      { title: "The Charge Sheet", href: "/learn/criminal/charge-sheet", slug: "charge-sheet" },
    ],
  },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const { isLoaded, isCompleted } = useProgress();

  return (
    <aside className={cn("pb-12 border-r h-[calc(100vh-4rem)] overflow-y-auto w-full md:w-64 shrink-0 bg-card hidden md:block", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Learning Paths
          </h2>
          <div className="space-y-1">
            {mainNavItems.map((path) => (
              <div key={path.href} className="flex flex-col gap-1 w-full pb-2">
                <Link
                  href={path.href}
                  className={cn(
                    "flex items-center gap-2 justify-start px-4 py-2 font-medium bg-transparent rounded-lg hover:bg-muted transition-colors text-sm",
                    pathname.startsWith(path.href) ? "text-primary font-semibold bg-primary/10 hover:bg-primary/15" : "text-foreground"
                  )}
                >
                  <path.icon className="h-4 w-4" />
                  {path.title}
                </Link>
                {/* Sub items */}
                <div className="flex flex-col gap-1 ml-6 pl-3 border-l">
                  {path.items.map((item) => {
                    const completed = isLoaded && isCompleted(item.slug);
                    return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-md flex justify-between items-center px-2 py-1.5 text-sm transition-colors hover:text-primary hover:bg-muted group",
                        pathname === item.href ? "text-primary font-medium bg-primary/5" : "text-muted-foreground"
                      )}
                    >
                      <span className="truncate">{item.title}</span>
                      {completed && <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 opacity-80" />}
                    </Link>
                  )})}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
