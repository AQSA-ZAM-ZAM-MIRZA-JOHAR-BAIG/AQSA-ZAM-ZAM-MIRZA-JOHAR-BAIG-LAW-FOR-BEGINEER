import { getAllLessons } from "@/lib/markdown";
import Link from "next/link";
import { Book, Shield, Gavel } from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "introduction":
      return <Book className="h-6 w-6 text-primary" />;
    case "rights":
      return <Shield className="h-6 w-6 text-primary" />;
    case "criminal":
      return <Gavel className="h-6 w-6 text-primary" />;
    default:
      return <Book className="h-6 w-6 text-primary" />;
  }
};

export default function TopicsPage() {
  const lessons = getAllLessons();

  const groupedLessons = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.category]) {
      acc[lesson.category] = [];
    }
    acc[lesson.category].push(lesson);
    return acc;
  }, {} as Record<string, typeof lessons>);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Browse Learning Paths</h1>
        <p className="text-xl text-muted-foreground">
          Select a path below to start your legal education journey in a structured manner.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedLessons).map(([category, categoryLessons]) => (
          <div key={category} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                {getCategoryIcon(category)}
              </div>
              <h2 className="text-2xl font-bold capitalize">{category} Topics</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryLessons.map((lesson, idx) => (
                <Link 
                  key={lesson.slug} 
                  href={`/learn/${lesson.category}/${lesson.slug}`}
                  className="flex flex-col p-6 rounded-xl border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                      Lesson {lesson.order}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground pt-1">
                    {lesson.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
