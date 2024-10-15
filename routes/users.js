import express from "express";
import users from "../models/users.js";

const router = new express.Router();

//:petname - gets info on the spcified pet
//:username -

//get all users
router.get("/",  (req, res) => {
  try {
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

//create a new user
router.post("/", (req, res) => {
  try {
    if (users.find((u) => u.username == req.body.username)) {
      res.json({ error: "Username Already Taken" });
      return;
    }
    const user = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      username: req.body.username,
      country: req.body.country,
      email: req.body.email,
      pets: [],
    };

    users.push(user);
    res.json(users[users.length - 1]);

    res.send(user);
  } catch (error) {
    console.log(error);
  }
});


export default router;
