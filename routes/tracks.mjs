import express from "express";
const router = express.Router();

//TODO http://localhost:3000/tracks GET, POST, DELETE, PUT

router.get("/", (req, res) => {
    const data = ["hola", "mundo", "para", "todos"];
    res.send({data});
});

export { router };