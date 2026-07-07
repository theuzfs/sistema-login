const express = require("express");
const router = express.Router();

const users = [];

router.get("/", (req, res) => {
    res.send("API do sistema de login funcionando");
});

router.post("/users", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            error: "Nome, e-mail e senha são obrigatórios"
        });
    }

    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({
            error: "E-mail já cadastrado"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };

    users.push(newUser);

    res.status(201).json({
        message: "Usuário cadastrado com sucesso",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }
    });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            error: "E-mail e senha são obrigatórios"
        });
    }

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            error: "E-mail ou senha inválidos"
        });
    }

    res.json({
        message: "Login realizado com sucesso",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

router.get("/users", (req, res) => {
    const usersWithoutPasswords = users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        };
    });

    res.json(usersWithoutPasswords);
});

module.exports = router;