import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { getUserIdentity } from "@/lib/getUserIdentity";

const userSchema = z.object({
    username: z.string().min(3).max(50),
    fullName: z.string().min(3).max(100),
    bio: z.string().max(1000),
    avatarUrl: z.string().url(),
});

export async function GET(request: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;

    try {
        let user = null;

        if (!isNaN(Number(userId))) {
            user = await prisma.user.findUnique({
                where: {
                    id: Number(userId),
                },
            });
        }

        if (!user) {
            user = await prisma.user.findUnique({
                where: {
                    userId: String(userId),
                },
            });
        }

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error fetching user:', (error as any).message);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest, { params }: { params: { userId: string } }) {
    const { userId: targetUserId } = await params;

    const {authStatus, id} = await getUserIdentity(String(targetUserId));
    const { username, fullName, bio, avatarUrl } = await request.json();

    if (!authStatus) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    

    const validatedData = userSchema.safeParse({
        username,
        fullName,
        bio,
        avatarUrl,
    });

    if (!validatedData.success) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    try {
        const user = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: {
                username,
                fullName,
                bio,
                avatarUrl,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error updating profile:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}