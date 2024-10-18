import { Router } from "express";
import FormModel from "../models/Form.js";

const router = Router();

router.post("/add-contact", async (req, res) => {
  try {
    const newDetail = new FormModel(req.body);
    await newDetail.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error); 
    res.status(500).json({ msg: error });
  }
});

export default router;
