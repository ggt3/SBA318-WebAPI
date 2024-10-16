import express from 'express'
import petsRouter from './routes/pets.js'
import usersRouter from './routes/users.js'

const app = express()
const PORT = 3000


app.set("view engine", "pug");
app.set("views", "./views");

// middlewares
app.use(express.json()); //parse json data
app.use(express.static("public")) //serving static public folder
app.use(express.urlencoded({extended: true})); //body parser

app.use('/api/pets', petsRouter);
app.use('/api/users', usersRouter);




app.get("/", (req,res)=> {
    res.send("ok")
})

//ERROR MIDDLEWARE
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.listen(PORT, () => console.log("server running on port: ", PORT))

