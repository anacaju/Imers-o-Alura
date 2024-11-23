import express from "express";

const posts = [
    {
        id: 1, descricao: "Meu novo cachorro! ",
        imgurl: "https://placeholders.net/300x200/random/dog",
        data: "2023-11-23"
    },
    {
        id: 2, descricao: "Receita deliciosa de bolo de chocolate!",
        imgurl: "https://loremflickr.com/300/200/food",
        data: "2023-11-24"
    },
    {
        id: 3, descricao: "Paisagem montanhosa incrível!",
        imgurl: "https://source.unsplash.com/random/300x200/?mountain",
        data: "2023-11-25"
    },
];
const app = express();
app.use(express.json());

app.get("/api",(req, res) => {
    res.status(200).send("Boas vindas");
});

app.listen(3000, () => {
    console.log("servidor escutando...");
});
