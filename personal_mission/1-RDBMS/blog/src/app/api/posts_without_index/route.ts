import type { NextApiRequest } from "next";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const url = new URL(req.url!);
  const searchParams = new URLSearchParams(url.searchParams);
  const title = searchParams.get("title") || "";

  const start = Date.now();
  let posts;

  if (title) {
    posts = await prisma.postWithoutIndex.findMany({
      where: {
        title: title,
      },
      orderBy: {
        title: "asc",
      },
    });
  } else {
    posts = await prisma.postWithoutIndex.findMany({
      orderBy: {
        title: "asc",
      },
      take: 20,
    });
  }

  const end = Date.now();
  const responseTime = end - start;
  // console.log({ posts, responseTime });
  return NextResponse.json({ posts, responseTime });
}
