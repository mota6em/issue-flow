import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { IssueSchema } from "../../localTSfiles/schemas";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "You must be logged in to create an issue" },
      { status: 401 }
    );
  }
  const body = await req.json();
  const validation = IssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error?.errors, { status: 400 });
  }
  const createdIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(createdIssue);
}
