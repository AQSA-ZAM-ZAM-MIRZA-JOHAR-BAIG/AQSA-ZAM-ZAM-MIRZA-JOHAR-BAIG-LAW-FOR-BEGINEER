"use client";

import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SearchDialog } from "@/components/SearchDialog";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center flex-1 justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <button 
            className="md:hidden mr-2 p-2 -ml-2 text-muted-foreground hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </button>
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="font-bold sm:inline-block text-xl tracking-tight hidden md:block">
              Law for Beginners
            </span>
            <span className="font-bold sm:inline-block text-xl tracking-tight md:hidden">
              Law
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SearchDialog />
        </div>
      </div>
    </header>
  );
}
