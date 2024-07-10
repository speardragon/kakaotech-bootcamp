import type { NextApiRequest } from "next";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    const url = new URL(req.url!);
    const searchParams = new URLSearchParams(url.searchParams);
    const title = searchParams.get("title") || "";

    const start = Date.now();

    const posts = await prisma.postWithIndex.findMany({
      where: title ? { title: title } : undefined,
      orderBy: {
        title: "asc",
      },
      take: title ? undefined : 20,
    });

    const end = Date.now();
    const responseTime = end - start;

    return NextResponse.json({ posts, responseTime });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
