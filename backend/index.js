const express = require('express');
const cors = require('cors');
const app = express();

const { obtenerPost, agregarPost } = require("./query-pg.js")


app.use(cors());

app.use(express.json())


const PORT = 3001


app.post('/posts', async (req, res) => {
    await agregarPost(req.body);
    res.status(201).send("Registro agregado!");
})


app.get('/posts', async (req, res) => {
    res.status(200).json(await obtenerPost());
})

app.listen(PORT, console.log(`Server on port: ${PORT}`))