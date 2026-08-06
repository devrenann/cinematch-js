const prompt = require("prompt-sync")({sigint: true});

class Conteudo {
    constructor(titulo, tipo, generos, duracaoMinutos){
        this.titulo = titulo;
        this.tipo = tipo;
        this.generos = generos;
        this.duracaoMinutos = duracaoMinutos;
    }
    exibirResumo() {
        return `${this.titulo} (${this.tipo}) - ${this.duracaoMinutos} min`;
    }
}

class Serie extends Conteudo {
    constructor(titulo, generos, duracaoMinutos, temporadas ) {
        super(titulo, "Série", generos, duracaoMinutos);
        this.temporadas = temporadas;
    }
    exibirTemporadas() {
        return `${this.titulo} tem ${this.temporadas} temporadas(s)`;
    }
}

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

const serieTeste = new Serie(
    "Fronteira Digital",
    ["Ação", "Ficção Cientifica"],
    45,
    2
);

console.log(serieTest.exibirResumo())/
console.log(serie