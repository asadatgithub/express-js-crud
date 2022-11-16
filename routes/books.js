
import express from "express";
import Book from "../schemas/book.js"

import authenticate from "../middlewares/authentication.js";
const router = express.Router();

router.get("/", authenticate, async (req, res) => {

    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.json({ message: err });
    } o
})



router.get("/:id", authenticate, async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post("/", authenticate, async (req, res) => {
    try {
        const result = await Book.create(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch("/:id", authenticate, async (req, res) => {
    try {
        const result = await Book.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete("/:id", authenticate, async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.json({ message: err });
    }
})

export default router;