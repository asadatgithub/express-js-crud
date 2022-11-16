
import express from "express";
import User from "../schemas/user.js"
import jwt from "jsonwebtoken";
import validate from "../middlewares/validation.js";
import schema from "../validations/user.validation.js";
const router = express.Router();

router.post("/login", validate(schema.login), async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (!user) return res.status(401).send("Invalid email or password.");
        const token = jwt.sign({ id: user._id }, "my_temporary_secret", { expiresIn: "1h" });
        res.send(token);
    } catch (error) {
        res.status(500).send(error);
    }
})


router.post("/sign-up", async (req, res) => {
    try{
        const result = await User.create(req.body);
        res.status(200).json(result);
    }catch(error){
        res.status(500).send(error);
    }

})


export default router;