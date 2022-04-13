const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")));

/* app.listen(3001, () => console.log("Servidor corriendo en el puerto http://localhost:3001")); */

app.listen(process.env.PORT || 3001, () => console.log("Servidor corriendo en el puerto http://localhost:3001"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})