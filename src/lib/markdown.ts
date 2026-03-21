import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface LessonMetadata {
  title: string;
  description: string;
  category: string;
  slug: string;
  order: number;
}

export interface Lesson extends LessonMetadata {
  content: string;
}

export function getLessonSlugs(category: string) {
  const categoryPath = path.join(contentDirectory, category);
  if (!fs.existsSync(categoryPath)) return [];
  return fs.readdirSync(categoryPath).filter((file) => file.endsWith(".md"));
}

export function getLessonBySlug(category: string, slug: string): Lesson | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(contentDirectory, category, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: realSlug,
    category,
    content,
  } as Lesson;
}

export function getAllLessonsByCategory(category: string): Lesson[] {
  const slugs = getLessonSlugs(category);
  const lessons = slugs
    .map((slug) => getLessonBySlug(category, slug))
    .filter((lesson): lesson is Lesson => lesson !== null)
    .sort((lesson1, lesson2) => (lesson1.order > lesson2.order ? 1 : -1));
  return lessons;
}

export function getAllLessons(): Lesson[] {
  if (!fs.existsSync(contentDirectory)) return [];
  const categories = fs.readdirSync(contentDirectory).filter(file => 
    fs.statSync(path.join(contentDirectory, file)).isDirectory()
  );
  
  let allLessons: Lesson[] = [];
  categories.forEach(category => {
    allLessons = [...allLessons, ...getAllLessonsByCategory(category)];
  });
  
  return allLessons;
}
