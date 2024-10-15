import express from 'express'


const app = express()
const PORT = process.env.PORT

// middlewares

app.use(express.json()); //parse json data

app.use('/api/pets', petsRouter);
app.use('/api/users', userRouter);


app.get("/", (req,res)=> {
    res.send("ok")
})

app.listen(PORT, () => console.log("server running on port: ", PORT))

