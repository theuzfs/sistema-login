const express = require("express");
const cors = require("cors");
const userRoutes = require("./users");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});