"use client";

import { useProgress } from "@/hooks/useProgress";
import { Bookmark, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonActionsProps {
  slug: string;
}

export function LessonActions({ slug }: LessonActionsProps) {
  const { isLoaded, isCompleted, isBookmarked, toggleComplete, toggleBookmark } = useProgress();

  if (!isLoaded) return <div className="flex gap-2 h-8" />; // Placeholder to avoid hydration mismatch

  const completed = isCompleted(slug);
  const bookmarked = isBookmarked(slug);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => toggleBookmark(slug)}
        className={cn(
          "flex items-center text-sm font-medium transition-colors px-3 py-1.5 rounded-md",
          bookmarked 
            ? "bg-primary/10 text-primary hover:bg-primary/20" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
      >
        <Bookmark className={cn("w-4 h-4 mr-2", bookmarked && "fill-current")} />
        {bookmarked ? "Saved" : "Save for later"}
      </button>

      <button
        onClick={() => toggleComplete(slug)}
        className={cn(
          "flex items-center text-sm font-medium transition-colors px-3 py-1.5 rounded-md",
          completed 
            ? "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-500" 
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        <CheckCircle2 className={cn("w-4 h-4 mr-2", completed && "fill-current")} />
        {completed ? "Completed" : "Mark as Complete"}
      </button>
    </div>
  );
}
