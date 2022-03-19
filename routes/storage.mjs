import express from "express";
const router = express.Router();
//TODO http://localhost:3001/api/storage
import { uploadSingleFileMiddleware } from "../utils/handleStorage.mjs";
import { getItems, getItem, createItem } from "../controllers/storage.mjs";	

// router.post("/", createItem);
router.post("/", uploadSingleFileMiddleware.single("myFile"), createItem);

//export { router };
export default router;