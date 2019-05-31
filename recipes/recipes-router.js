const Recipes = require("./recipes-model");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.find(req.query);
    res.status(200).json(recipes);
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the recipes"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);

    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the recipe"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const recipe = await Recipes.add(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error adding the recipe"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await Recipes.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The recipe has been nuked" });
    } else {
      res.status(404).json({ message: "The recipe could not be found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error removing the recipe"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const recipe = await Recipes.update(req.params.id, req.body);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "The recipe could not be found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error updating the recipe"
    });
  }
});



// add an endpoint for adding new message to a hub
module.exports = router;
