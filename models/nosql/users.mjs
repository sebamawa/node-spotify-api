import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: ["user", "admin"],
        default: "user",
    }
},
{
    timestamps: true, // TODO createAt, updateAt
    versionKey: false,  
});

UserSchema.plugin(mongooseDelete, { overrideMethods: "all" });

export default mongoose.model("users", UserSchema);