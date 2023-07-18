import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const stayfinder = new PrismaClient();

export async function GET(request) {
    try {
        const data = await stayfinder.hoteles.findMany()
        return NextResponse.json(data)
    } catch (error) {
        throw new Error(error);
    }
}

export async function POST(req, res) {
    const body = await req.json()
    return NextResponse.json({ text: `From Post, Body: ${body.text}` })
}