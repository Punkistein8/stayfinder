import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const stayfinder = new PrismaClient();

export async function GET(request) {
    const data = await stayfinder.hoteles.findMany()
    return NextResponse.json(data)
}

export async function POST(req, res) {
    const body = await req.json()
    return NextResponse.json({ text: `From Post, Body: ${body.text}` })
}