import mongoose from "mongoose";

const StorageSchema = new mongoose.Schema({
   url: {
       type: String,
   },
   filename: {
       type: String,
   }
},
{
    timestamps: true, // TODO createAt, updateAt
    versionKey: false,  
});

export default mongoose.model("users", StorageSchema);