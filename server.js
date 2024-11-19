import express from "express";

const app = express();

app.get("/api",(req, res) => {
    res.status(200).send("Boas vindas");
});

app.listen(3000, () =>{
    console.log("servidor escutando..");
});

