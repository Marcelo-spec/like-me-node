const express = require("express");
const cors = require("cors");
const app = express();


const { obtenerPost, agregarPost, eliminarPost, agregarLikeAPost } = require("./query-pg.js")

app.use(cors());

app.use(express.json())


const PORT = process.env.PORT || 3000


app.get("/posts", async (req, res) => {
    const { code, message } = await obtenerPost()
    res.status(code).json(message);
})


app.post("/posts", async (req, res) => {
    const { code, message } = await agregarPost(req.body);
    res.status(code).send(message);
})


app.delete("/posts/:id", async (req, res) => {
    const { code, message } = await eliminarPost(req.params.id)
    res.status(code).send({ code, message });
})


app.put("/posts/like/:id", async (req, res) => {
    const { code, message } = await agregarLikeAPost(req.params.id)
    res.status(code).json({ code, message });
})

app.listen(PORT, console.log(`Server on port: ${PORT}`))