import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema (
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
// timestamps: true -> Is a sequence of characters that denote the time and date (or one of them) in which a certain event occurred.

//It's going to create an user collection in our database
export default mongoose.model("User", userSchema);