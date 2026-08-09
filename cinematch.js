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
const catalogo = [
    new Serie(
        "Fronteira Digital",
        ["Ação", "Ficção Científica"],
        45,
        2
    ),
    new Conteudo(
        "Risadas de Sábado",
        "Filme",
        ["Comédia", "Romance"],
        98
    ),
    new Conteudo(
        "Sombras do Porão",
        "Filme",
        ["Comédia", "Romance"],
        98
    ),
];

function calcularCompatibilidade(usuario, conteudo){
    const generosEmComum = conteudo.generos.filter((genero) =>
    usuario.generosFavoritos.includes(genero)
    );
    const generosNaoExplorados = conteudo.generos.filter(
        (genero) => !usuario.generosFavoritos.includes(genero)
    );

    const percentual = (generosEmComum.length / conteudo.generos.length) * 100;
    const classificacao = classificarAfinidade(percentual);
    
    return {
        titulo: conteudo.titulo,
        percentual,
        generosEmComum,
        generosNaoExplorados,
        classificacao,
    };    
}
function classificarAfinidade(percentual) {
    if (percentual >= 80) {
        return "Alta afinidade";
    } else if (percentual >= 50) {
        return "Média afinidade";
    } else {
        return "Baixa afinidade";
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