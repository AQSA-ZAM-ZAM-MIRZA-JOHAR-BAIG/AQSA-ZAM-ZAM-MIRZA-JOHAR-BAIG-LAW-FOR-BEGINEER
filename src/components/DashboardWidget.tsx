"use client";

import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";
import { ArrowRight, Bookmark, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { LessonMetadata } from "@/lib/markdown";

export function DashboardWidget() {
  const { isLoaded, completedLessons, bookmarkedLessons } = useProgress();
  const [lessons, setLessons] = useState<LessonMetadata[]>([]);

  useEffect(() => {
    fetch("/api/search")
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, []);

  if (!isLoaded || lessons.length === 0) return null;

  const totalLessons = lessons.length;
  const progressPercent = Math.round((completedLessons.length / totalLessons) * 100) || 0;

  // Find next lesson conceptually
  const completedSet = new Set(completedLessons);
  const nextUp = lessons.find((l) => !completedSet.has(l.slug));

  return (
    <div className="w-full max-w-5xl mt-12 mb-8 bg-card border rounded-xl overflow-hidden shadow-sm">
      <div className="bg-primary/5 px-6 py-4 border-b flex items-center justify-between">
        <h2 className="font-semibold text-lg">Your Learning Journey</h2>
        <span className="text-sm text-primary font-medium">{progressPercent}% Completed</span>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Up Next
          </h3>
          {nextUp ? (
            <Link
              href={`/learn/${nextUp.category}/${nextUp.slug}`}
              className="flex items-center justify-between group p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div>
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {nextUp.title}
                </h4>
                <div className="text-sm text-muted-foreground mt-1 capitalize">
                  {nextUp.category} path
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </Link>
          ) : (
            <div className="p-4 border rounded-lg bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-900">
              <p className="text-green-700 dark:text-green-500 font-medium">
                🎉 You've completed all available lessons!
              </p>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Your Bookmarks
          </h3>
          {bookmarkedLessons.length > 0 ? (
            <div className="space-y-3">
              {bookmarkedLessons.slice(0, 3).map((slug) => {
                const bookmarkedLesson = lessons.find((l) => l.slug === slug);
                if (!bookmarkedLesson) return null;

                return (
                  <Link
                    key={slug}
                    href={`/learn/${bookmarkedLesson.category}/${slug}`}
                    className="flex items-center gap-3 group text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Bookmark className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary" />
                    <span>{bookmarkedLesson.title}</span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              No lessons bookmarked yet. Save interesting lessons to easily find them later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
