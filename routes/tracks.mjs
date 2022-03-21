import express from "express";
import { getItems, getItem, createItem } from "../controllers/tracks.mjs";
const router = express.Router();
import { validatorCreateItem } from "../validators/tracks.mjs";
import { customHeader } from "../middleware/customHeader.mjs";

//TODO http://localhost:3000/tracks GET, POST, DELETE, PUT

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", validatorCreateItem, createItem);

// export { router };
export default router;