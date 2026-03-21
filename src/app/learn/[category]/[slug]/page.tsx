import { getLessonBySlug, getAllLessons } from "@/lib/markdown";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { LessonActions } from "@/components/LessonActions";
import { Comments } from "@/components/Comments";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((lesson) => ({
    category: lesson.category,
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const lesson = getLessonBySlug(category, slug);

  if (!lesson) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${lesson.title} | Law for Beginners`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: Props) {
  const { category, slug } = await params;
  const lesson = getLessonBySlug(category, slug);

  if (!lesson) {
    notFound();
  }

  // Get next and prev lessons conceptually
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.slug === slug && l.category === category);
  
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="flex flex-col xl:flex-row gap-8 pb-12">
      {/* Main Content Area */}
      <article className="flex-1 w-full max-w-3xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary flex items-center">
            <Home className="w-3.5 h-3.5 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/topics" className="hover:text-primary capitalize">
            {category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-medium text-foreground truncate max-w-[200px]">
             {lesson.title}
          </span>
        </nav>

        <div className="mb-8 space-y-4 border-b pb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span className="capitalize">{category}</span>
            <span>•</span>
            <span>Lesson {lesson.order}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {lesson.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {lesson.description}
          </p>
          <div className="flex items-center justify-between pt-4">
            <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              Beginner Friendly
            </span>
            <LessonActions slug={slug} />
          </div>
        </div>

        <MarkdownRenderer content={lesson.content} />

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevLesson ? (
            <Link
              href={`/learn/${prevLesson.category}/${prevLesson.slug}`}
              className="flex w-full sm:w-auto flex-col items-start gap-1 rounded-lg border p-4 hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous Lesson
              </div>
              <div className="font-medium">{prevLesson.title}</div>
            </Link>
          ) : <div className="hidden sm:block" />}
          
          {nextLesson ? (
            <Link
              href={`/learn/${nextLesson.category}/${nextLesson.slug}`}
              className="flex w-full sm:w-auto flex-col items-end gap-1 rounded-lg border p-4 hover:border-primary hover:bg-primary/5 transition-colors text-right"
            >
              <div className="flex items-center text-sm text-muted-foreground">
                Next Lesson <ArrowRight className="ml-2 h-4 w-4" />
              </div>
              <div className="font-medium">{nextLesson.title}</div>
            </Link>
          ) : <div className="hidden sm:block" />}
        </div>

        <Comments />
      </article>

      {/* Table of Contents Placeholder for large screens */}
      <aside className="hidden xl:block w-64 shrink-0">
        <div className="sticky top-24 space-y-4">
          <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
            On this page
          </h3>
          <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
            <p className="italic">Table of contents will be generated here.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
