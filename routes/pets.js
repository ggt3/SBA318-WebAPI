import express from "express";
import pets from "../data/pets.js";
import users from "../data/users.js";

const router = new express.Router();

//BASE: /api/pets

router.get("/newPet", (req, res) => {
  res.render("newPet");
});

// router.post("/newPet", (req,res) => {
//     try {
//         if (pets.find((p) => p.name == req.body.name)) {
//           res.json({ error: "Pet Name Already Taken" });
//           return;
//         }
//         if (users.includes((u) => u.username != req.body.owner)) {
//             res.json({ error: "" });
//             return;
//           }

//     const newPet = {
//         id: pets[pets.length - 1].id + 1,
//         name: req.body.name,
//         username: req.body.owner,
//         species: req.body.species,
//         color: req.body.color,
//         level: 1
//     }
//     //TODO: add the pet to the user's pet list
//     console.log(newPet)
//     pets.push(newPet);
//     res.json(pets[pets.length - 1]);

// } catch (error) {
//     console.log(error);
//   }
// });

router.post("/success", (req, res) => {
  try {
    if (pets.find((p) => p.name === req.body.name)) {
      res.json({ error: "Pet Name Already Taken" });
      return;
    }
    if (!users.find((u) => {u.username === req.body.owner
        console.log(u.username)
    })) {

        res.json({ error: "Invalid Owner, not in System. Enter Valid owner username." });
      return;
    }

    const newPet = {
      id: pets[pets.length - 1].id + 1,
      name: req.body.name,
      username: req.body.owner,
      species: req.body.species,
      color: req.body.color,
      level: 1,
    };
    
    pets.push(newPet);
    //add the pet to the user's pet list
    users.find((u,i)=> {
       if (u.username === req.body.owner ) {
        u.pets.push(newPet.id)
        console.log(u)
        return true;
      }})
    // res.json(pets[pets.length - 1]);
    res.render("success", {
      name: req.body.name,
      owner: req.body.owner,
      color: req.body.color,
      species: req.body.species,
    });
  } catch (error) {
    console.log(error);
  }
});

//rename your pet 
router.patch( "/:name/rename", (req,res) => {
    const targetPet = pets.find((p, i) => {
        if (p.name === req.params.name) {
          for (const key in req.body) {
            pets[i][key] = req.body[key];
          }
          return true;
        }
    })
}
)

//returns all the types of species created
router.get("/?species", (req,res)=> {

})

export default router;
