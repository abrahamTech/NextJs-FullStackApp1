import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";


export const GET = async (req, {params}) => {

    const { id } = params;

    try{
        await connect();

        //Using the id, it will fetch the post of that id
        const post = await Post.findById(id);

        return new NextResponse(JSON.stringify(post), { status: 200});
    } catch (error) {
        return new NextResponse("Data Error" + error, {status: 500});
    }
};

export const DELETE = async (req, {params}) => {

    const { id } = params;

    try{
        await connect();

        //Using the id, it will DELETE the post of that id
        await Post.findByIdAndDelete(id);

        return new NextResponse("Post has been deleted", { status: 200});
    } catch (error) {
        return new NextResponse("Data Error" + error, {status: 500});
    }
};