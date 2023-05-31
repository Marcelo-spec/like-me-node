const express = require('express');
const cors = require('cors');
const app = express();

// Operaciónes postgres
const { obtenerPost, agregarPost } = require("./query-pg.js")

// Middlewares

// Habilitar cors
app.use(cors());
// Procesar json
app.use(express.json())

// Asigna puerto servidor WEB
const PORT = 3001

// Agregar nuevo registro
app.post('/posts', async (req, res) => {
    console.log(`starting post`, req.body)
    await agregarPost(req.body);
    res.status(201).send("Registro agregado!");
})

// Obtener todas los registros
app.get('/posts', async (req, res) => {
    res.status(200).json(await obtenerPost());
})

app.listen(PORT, console.log(`Server on port: ${PORT}`))