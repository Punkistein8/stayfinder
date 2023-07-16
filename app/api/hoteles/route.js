import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ text: 'From Get!' })
}

export async function POST(req, res) {
    const body = await req.json()
    return NextResponse.json({ text: `From Post, Body: ${body.text}` })
}