import express from "express";
import pets from "../models/pets.js";
import users from "..models/users.js"
const router = new express.Router();

router.post("/newPet", (req,res) => {
    try {
        if (pets.find((p) => p.name == req.body.name)) {
          res.json({ error: "Pet Name Already Taken" });
          return;
        }
        if (users.includes((u) => u.username != req.body.owner)) {
            res.json({ error: "" });
            return;
          }

    const newPet = {
        id: pets[pets.length - 1].id + 1,
        name: req.body.name,
        username: req.body.owner,
        species: req.body.species,
        color: req.body.color,
        level: 1
    }
    //TODO: add the pet to the user's pet list

    pets.push(newPet);
    res.json(pets[pets.length - 1]);

} catch (error) {
    console.log(error);
  }
});

