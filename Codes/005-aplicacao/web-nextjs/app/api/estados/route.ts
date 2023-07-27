import { NextRequest, NextResponse } from "next/server";


export function GET(request : NextRequest) {

    return new NextResponse(JSON.stringify({
        message: "Lista de estados."
    }));

}

export function POST(request : NextRequest) {

}