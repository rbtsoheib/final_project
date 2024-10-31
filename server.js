import express from 'express'; 
import dotenv, { config } from 'dotenv'; 

dotenv.config(); 

const app = express()

app.get("/Products" , (req,res) => {
    res.send("Server is ready");
});

console.log(process.env.MONGO_URI);


app.listen(3040, () => {
    console.log("Server started at http://localhost:3040")
}); 

