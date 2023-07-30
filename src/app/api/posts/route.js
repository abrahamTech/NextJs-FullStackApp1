import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req) => {
    
    try{
        await connect();

        //If we don't put anything between the parentheses it will fetch all the posts.
        const posts = await Post.find();

        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch(error) {
        return new NextResponse("Database Error" + error, {status: 500});
    }

    // return new NextResponse("It works", {status: 200});
}