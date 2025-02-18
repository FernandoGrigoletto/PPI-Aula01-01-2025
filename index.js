import express from "express";
import autenticar from "./seguranca/autenticar.js";   
import session from 'express-session';

const porta = 3000;
const localhost = "0.0.0.0";

const app = express();

app.use(session({
    secret: "Gr1g0l3tt0",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 15
    }
}));

app.get("/login", (requisicao, resposta) => {
    resposta.redirect('/login.html');
})

app.get("/login", (requisicao, resposta) => {
    resposta.redirect('/login.html');
})

app.use(express.static("./publico"));

app.use(autenticar, express.static("./privado"));


app.listen(porta, localhost, () => {
    console.log('Servidor rodando em http://${localhost};${porta}');
});