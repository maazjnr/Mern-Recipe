import { RecipeModel } from "../models/Recipes.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export { router as recipesRouter };
