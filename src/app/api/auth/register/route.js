import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    //Info inside POST request
    const { name, email, password } = await request.json();

    //Connect to the MONGODB from: "@/utils/db"
    await connect();

    //Encrypted the password
    const hashedPassword = await bcrypt.hash(password, 5);

    //Create a New USER using those credentials
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    try {
        //Save the USER in MONGODB
        await newUser.save();
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (err) {
        return new NextResponse(err.message, {
        status: 500,
        });
    }
};