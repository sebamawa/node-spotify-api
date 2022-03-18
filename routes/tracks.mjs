import express from "express";
import { getItems, getItem, createItem } from "../controllers/tracks.mjs";
const router = express.Router();

//TODO http://localhost:3000/tracks GET, POST, DELETE, PUT

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", createItem);

export { router };