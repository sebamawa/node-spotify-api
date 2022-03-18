import express from "express";
const router = express.Router();
//TODO http://localhost:3001/api/storage
import { uploadMiddleware } from "../utils/handleStorage.mjs";
import { getItems, getItem, createItem } from "../controllers/storage.mjs";	

router.post("/", uploadMiddleware.single("miFile"), createItem);

export { router };