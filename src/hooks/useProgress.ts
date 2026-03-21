"use client";

import { useState, useEffect } from "react";

export function useProgress() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [bookmarkedLessons, setBookmarkedLessons] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedCompleted = localStorage.getItem("law_completed_lessons");
    const storedBookmarked = localStorage.getItem("law_bookmarked_lessons");

    if (storedCompleted) {
      setCompletedLessons(JSON.parse(storedCompleted));
    }
    if (storedBookmarked) {
      setBookmarkedLessons(JSON.parse(storedBookmarked));
    }
    setIsLoaded(true);
  }, []);

  const toggleComplete = (slug: string) => {
    let newCompleted;
    if (completedLessons.includes(slug)) {
      newCompleted = completedLessons.filter((l) => l !== slug);
    } else {
      newCompleted = [...completedLessons, slug];
    }
    setCompletedLessons(newCompleted);
    localStorage.setItem("law_completed_lessons", JSON.stringify(newCompleted));
  };

  const toggleBookmark = (slug: string) => {
    let newBookmarks;
    if (bookmarkedLessons.includes(slug)) {
      newBookmarks = bookmarkedLessons.filter((l) => l !== slug);
    } else {
      newBookmarks = [...bookmarkedLessons, slug];
    }
    setBookmarkedLessons(newBookmarks);
    localStorage.setItem("law_bookmarked_lessons", JSON.stringify(newBookmarks));
  };

  const isCompleted = (slug: string) => completedLessons.includes(slug);
  const isBookmarked = (slug: string) => bookmarkedLessons.includes(slug);

  return {
    isLoaded,
    completedLessons,
    bookmarkedLessons,
    toggleComplete,
    toggleBookmark,
    isCompleted,
    isBookmarked,
  };
}
