export const dynamic = "force-static";

import { NextResponse } from "next/server";
import { getAllLessons } from "@/lib/markdown";

export async function GET() {
  const lessons = getAllLessons();
  // Strip out full content to keep the payload small
  const strippedLessons = lessons.map(({ content, ...rest }) => rest);
  return NextResponse.json(strippedLessons);
}
