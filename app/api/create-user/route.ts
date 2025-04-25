import { handleAuth } from "@/lib/handleAuth";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export default async function GET() {
  try {
    const result = await handleAuth();
    if (result.status === "created" || result.status === "already_registered") {
      redirect("/");
    }
    return NextResponse.json({ error: result.status }, { status: 400 });
  } catch (error) {
    console.error("Error in /api/create-user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
