import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { auth } from '@clerk/nextjs/server'

const userSchema = z.object({
    username: z.string().min(3).max(20),
    bio: z.string().max(1000),
    avatar_url: z.string().url(),
});

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
    const { userId } = await params;
    const user = await prisma.users.findUnique({
        where: {
            user_id: userId,
        },
    });
    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: { params: { userId: string } }) {
    const { userId: targetUserId } = await params;
    
    try {
        const { userId } = await auth()
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (targetUserId !== userId) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const { username, bio, avatar_url } = await request.json();
        const validatedData = userSchema.safeParse({
            username,
            bio,
            avatar_url,
        });

        if (!validatedData.success) {
            return NextResponse.json({ error: "Invalid data" }, { status: 400 });
        }

        const user = await prisma.users.update({
            where: {
                user_id: targetUserId,
            },
            data: {
                username,
                bio,
                avatar_url,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error updating profile:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}