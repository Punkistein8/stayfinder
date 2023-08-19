import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const stayfinder = new PrismaClient();

export async function GET() {
    try {
        const data = await stayfinder.hoteles.findMany()
        return NextResponse.json(data)
    } catch (error) {
        throw new Error(error);
    }
}