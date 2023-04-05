import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/client";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session)
    return new Response(
      JSON.stringify({ message: "Please sign in to create a new post." }),
      { status: 401 }
    );

  const request = await req.json();

  if (request.title.length > 300)
    return new Response(
      JSON.stringify({ message: "Please write a shorter post." }),
      { status: 403 }
    );
  if (request.title.length === 0)
    return new Response(
      JSON.stringify({
        message: "Please do not leave the post content empty.",
      }),
      { status: 403 }
    );

  try {
    const signedInUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });
    const result = await prisma.post.create({
      data: {
        title: request.title,
        userId: signedInUser.id,
      },
    });
    return new Response(
      JSON.stringify({ message: "Post has been created successfully 🚀" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error has occured whilst creating the post.",
      }),
      { status: 403 }
    );
  }
}
