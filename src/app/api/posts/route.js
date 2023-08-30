import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req) => {

    const url = new URL(req.url);
    //Gonna take all the query and search for the username
    const username = url.searchParams.get("username");
    
    try{
        await connect();

        //If we don't put anything between the parentheses it will fetch all the posts.
        const posts = await Post.find(username && { username });

        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch(error) {
        return new NextResponse("Database Error" + error, {status: 500});
    }

    // return new NextResponse("It works", {status: 200});
};

export const POST = async (req) => {

    const body = await req.json();

    const newPost = new Post(body);
    
    try{
        await connect();

        await newPost.save();

        return new NextResponse("Post has been created", {status: 201});
    } catch(error) {
        return new NextResponse("Database Error" + error, {status: 500});
    }

    // return new NextResponse("It works", {status: 200});
}