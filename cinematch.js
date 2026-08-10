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
        return `${this.titulo} tem ${this.temporadas} temporada(s)`;
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
        ["Terror", "Suspense"],
        110
    ),
];

function exibirMenu(usuario, catalogo){
    let opcao;
    do {
        console.log("\n********************************");
        console.log("             CINEMATCH          ");
        console.log("********************************");
        console.log("(1) - Ver meu perfil");
        console.log("(2) - Ver catálogo completo");
        console.log("(3) - Calcular compatibilidade com todos os conteúdos");
        console.log("(4) - Ver o conteúdo mais recomendado");
        console.log("(5) - Sair");
        console.log("********************************");

        opcao = prompt("Escolha uma opção: ");

        switch(opcao) {
            case "1":
                console.log("\nMeu perfil: ")
                console.log("********************************");
                console.log(usuario);
                pausar();
                break;
            case "2":
                console.log("\nCatálogo: ")
                console.log("********************************");
                catalogo.forEach((conteudo) => {
                    console.log(conteudo.exibirResumo());
                });
                pausar();
                break;
            case "3":
                console.log("\nCompatibilidade");
                console.log("********************************");
                catalogo.forEach((conteudo) => {
                    const resultado = calcularCompatibilidade(usuario, conteudo);
                    console.log(`\nTitulo: ${resultado.titulo}`);
                    console.log(`Tipo: ${resultado.tipo}`);
                    console.log(`Compatibilidade: ${resultado.percentual}%`);
                    console.log(`Gêneros em comum: ${resultado.generosEmComum.join(", ")}`);
                    console.log(`Gêneros não explorados: ${resultado.generosNaoExplorados.join(", ")}`);
                    console.log(`Classificação: ${resultado.classificacao}`);
                });
                pausar();
                break;                  
            case "4":
                const melhorResultado = encontrarMaisCompativel(usuario, catalogo);
                const numeroRecomendacao = contarRecomendacao();
                console.log("\nRecomendação Principal: ");
                console.log("********************************");
                console.log(`Recomendação nº ${numeroRecomendacao}`);
                console.log(`Título: ${melhorResultado.titulo} (${melhorResultado.tipo})`);
                console.log(`Compatibilidade: ${melhorResultado.percentual}%`);
                console.log(gerarRecomendacaoPersonalizada(usuario, melhorResultado));
                pausar();
                break;
            case "5":
                finalizarOnboarding(usuario.nome, exibirMensagemFinal);
                break;
            default:
                console.log("\nOpção Inválida. Tente novamente digitando uma opção correta!")
        }
    } while (opcao !== "5");
}

function pausar(){
    prompt("\nPressione ENTER para voltar ao menu!")
}

function buscarCatalogoSimulado(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(catalogo);
        }, 2000);
    });
}

async function iniciarSistema(){
    console.log("\nCarregando catálogo...");

    const catalogoCarregado = await buscarCatalogoSimulado();
    
    console.log("Catálogo carregado com sucesso!")

    exibirMenu(usuario, catalogoCarregado);
}

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
        tipo: conteudo.tipo,
        percentual,
        generosEmComum,
        generosNaoExplorados,
        classificacao,
    };    
}

function encontrarMaisCompativel(usuario, catalogo){
    const resultados = catalogo.map((conteudo) =>
        calcularCompatibilidade(usuario, conteudo)
    );
    const melhorResultado = resultados.reduce((melhor, atual) =>
        atual.percentual > melhor.percentual ? atual : melhor   

    );
    
    return melhorResultado;
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

function gerarRecomendacaoPersonalizada(usuario, melhorResultado) {
    const generoConhecido = melhorResultado.generosEmComum[0];
    const generoNovo = melhorResultado.generosNaoExplorados[0];

    if (generoConhecido && generoNovo){
        return `${usuario.nome}, você já curte ${generoConhecido} - Que tal experimentar 
        ${generoNovo}? "${melhorResultado.titulo}" pode ser uma ótima escolha.`;
    }
    if (generoConhecido && !generoNovo){
        return `${usuario.nome}, "${melhorResultado.titulo}" combina muito com os gêneros que você já gosta.`;
    }
    return `${usuario.nome}, que tal experimentar algo novo? "${melhorResultado.titulo}" pode ser uma boa!`;
}
function finalizarOnboarding(nomeUsuario, callback){
    console.log("\nOnboarding finalizado com sucesso!");
    callback(nomeUsuario);
}
function exibirMensagemFinal(nome){
    console.log(`${nome}, aproveite sua maratona!`);
}
function criarContadorDeRecomendacoes(){
    let total = 0;

    return function () {
        total++;
        return total;
    };
}
const contarRecomendacao = criarContadorDeRecomendacoes();

console.log("\n********************************");
console.log("             CINEMATCH          ");
console.log("********************************");

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

iniciarSistema();