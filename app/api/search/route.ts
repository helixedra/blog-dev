import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    const { query, limit } = await request.json();

    try {
const response = await prisma.post.findMany({
    take: limit ? limit : undefined,
    where: {
        status: "published",
        OR: [
            {
                title: {
                    contains: query,
                    mode: "insensitive",
                },
            },
            {
                content: {
                    contains: query,
                    mode: "insensitive",
                },
            },
        ],
    },
});
        return NextResponse.json(response);
    } catch (error) {
        console.error((error as Error).message);
        return NextResponse.json({ error: "Failed to search" }, { status: 500 });
    }
}
    