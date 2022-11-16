
import express from "express";
import Book from "../schemas/book.js"
import validate from "../middlewares/validation.js";
import schema from "../validations/user.validation.js";
import authenticate from "../middlewares/authentication.js";
const router = express.Router();

router.get("/", authenticate, async (req, res) => {

    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.json({ message: err });
    }
})


router.get("/:id", authenticate, validate(schema.id), async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.json(book);
        }
        else {
            res.status(404).json({ "message": `Book with ID ${req.params.id} was not found.` })
        }
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

router.patch("/:id", authenticate, validate(schema.id), async (req, res) => {
    try {
        const result = await Book.findByIdAndUpdate(req.params.id, req.body);
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ "message": `Book with ID ${req.params.id} was not found.` })
        }

    } catch (err) {
        res.json({ message: err });
    }
})

router.delete("/:id", authenticate, validate(schema.id), async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.json({ message: err });
    }
})

export default router;