import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

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

StorageSchema.plugin(mongooseDelete, { overrideMethods: "all" });

export default mongoose.model("storage", StorageSchema);