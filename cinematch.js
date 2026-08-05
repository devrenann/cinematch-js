const prompt = require("prompt-sync")({sigint: true});

console.log("- - -  CineMatch JS  - - -\n")

const nome = prompt("Qual é o seu nome? - ")
const idade = Number(prompt("Qual é a sua idade? - "));

const generosInput = prompt ("Quais gêneros você mais gosta? [separe por virgula (,)] - ");

const usuario = {
    nome,
    idade, 
    generosFavoritos: generosInput
        .split(",")
        .map((genero) => genero.trim())
        .filter((genero) => genero !== ""),
};

console.log("\nPerfil criado com sucesso!");
console.log(usuario);