export const dynamic = "force-static";

import { NextResponse } from "next/server";
import { getAllLessons } from "@/lib/markdown";

export async function GET() {
  const lessons = getAllLessons();
  // Strip out full content to keep the payload small
  const searchIndex = lessons.map(({ title, description, category, slug }) => ({
    title,
    description,
    category,
    slug,
  }));
  return NextResponse.json(searchIndex);
}
