"use client";

import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import Link from "next/link";
import { LessonMetadata } from "@/lib/markdown";

export function SearchDialog() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LessonMetadata[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchIndex, setSearchIndex] = useState<LessonMetadata[]>([]);

  useEffect(() => {
    fetch("/api/search")
      .then((res) => res.json())
      .then((data) => setSearchIndex(data));
  }, []);

  const fuse = useMemo(() => new Fuse(searchIndex, {
    keys: ["title", "description", "category"],
    threshold: 0.3,
  }), [searchIndex]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const searchResults = fuse.search(query).map((result) => result.item);
      setResults(searchResults);
    }
  }, [query, fuse]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="relative max-w-sm hidden sm:flex items-center w-80 rounded-full border bg-muted/50 pl-3 pr-4 py-2 text-sm text-muted-foreground hover:bg-muted/80 transition-all font-medium text-left"
      >
        <Search className="h-4 w-4 mr-2" />
        Search topics...
        <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-2xl bg-card border rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden animate-in fade-in zoom-in-95 duration-200 mx-4">
            <div className="flex items-center px-4 border-b">
              <Search className="h-5 w-5 text-muted-foreground mr-2" />
              <input
                autoFocus
                className="w-full bg-transparent px-2 py-4 focus:outline-none text-base border-none outline-none"
                placeholder="Search for legal topics, phrases..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm font-medium px-2 py-1 rounded hover:bg-muted"
              >
                Esc
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 && query !== "" && (
                <p className="p-4 text-center text-sm text-muted-foreground">
                  No results found for &quot;{query}&quot;.
                </p>
              )}
              {query === "" && (
                <p className="p-4 text-center text-sm text-muted-foreground">
                  Start typing to search across all lessons.
                </p>
              )}
              {results.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/learn/${lesson.category}/${lesson.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block p-3 hover:bg-muted rounded-lg transition-colors"
                >
                  <div className="font-semibold text-primary">{lesson.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">{lesson.description}</div>
                  <div className="text-xs text-muted-foreground mt-1 capitalize bg-secondary w-fit px-2 py-0.5 rounded">
                    {lesson.category}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
