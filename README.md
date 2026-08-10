# CineMatch JS

## Sobre o projeto

O CineMatch JS é um projeto desenvolvido em JavaScript com Node.js que simula um sistema de recomendação de filmes e séries.

A aplicação funciona pelo terminal. Primeiro, o usuário informa seu nome, idade e gêneros favoritos. Depois disso, o sistema compara essas preferências com um catálogo de conteúdos e calcula a compatibilidade com cada filme ou série.

O projeto foi desenvolvido para o Mini-Projeto Avaliativo do curso de Desenvolvimento Mobile com React Native.

## Objetivo

O objetivo principal do projeto foi praticar os conteúdos estudados durante o módulo, utilizando JavaScript em uma aplicação interativa executada pelo terminal.

Durante o desenvolvimento foram aplicados conceitos como:

- variáveis
- tipos de dados
- operadores
- condicionais
- estruturas de repetição
- funções
- arrow functions
- arrays
- métodos de array
- objetos
- classes
- construtores
- herança
- uso do `this`
- callbacks
- closures
- Promises
- async/await
- entrada de dados pelo terminal
- versionamento com Git e GitHub
- organização de tarefas com Kanban

## Funcionalidades

O sistema permite:

- criar um perfil com nome, idade e gêneros favoritos
- visualizar o perfil informado
- visualizar o catálogo de filmes e séries
- calcular a compatibilidade entre o usuário e cada conteúdo
- mostrar os gêneros em comum
- mostrar os gêneros ainda não explorados
- classificar o nível de afinidade
- encontrar o conteúdo com maior compatibilidade
- gerar uma recomendação personalizada
- navegar pelas funcionalidades através de um menu interativo

## Como funciona a compatibilidade

O sistema compara os gêneros favoritos informados pelo usuário com os gêneros cadastrados em cada conteúdo.

O cálculo utilizado é:

```
quantidade de gêneros em comum
-------------------------------- x 100
total de gêneros do conteúdo
```

A classificação é feita da seguinte forma:

- 80% a 100%: Alta afinidade
- 50% a 79%: Média afinidade
- 0% a 49%: Baixa afinidade

## Catálogo

O projeto possui três conteúdos fictícios:

### Fronteira Digital

- Tipo: Série
- Gêneros: Ação e Ficção Científica
- Duração: 45 minutos
- Temporadas: 2

### Risadas de Sábado

- Tipo: Filme
- Gêneros: Comédia e Romance
- Duração: 98 minutos

### Sombras do Porão

- Tipo: Filme
- Gêneros: Terror e Suspense
- Duração: 110 minutos

## Tecnologias utilizadas

- JavaScript
- Node.js
- prompt-sync
- Git
- GitHub
- GitHub Projects
- VS Code

## Requisitos

Para executar o projeto é necessário ter:

- Node.js instalado
- npm instalado
- Git, caso queira clonar o repositório

## Como executar

Clone o repositório:

```bash
git clone https://github.com/devrenann/cinematch-js
```

Entre na pasta do projeto:

```bash
cd cinematch-js
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
node cinematch.js
```

Depois disso, basta responder às perguntas exibidas no terminal e utilizar o menu.

## Exemplo de execução

```text
********************************
             CINEMATCH
********************************

Qual é o seu nome? Renan
Qual é a sua idade? 28
Quais gêneros você mais gosta? Ação, Comédia

Perfil criado com sucesso!

Carregando catálogo...
Catálogo carregado com sucesso!

********************************
             CINEMATCH
********************************
(1) - Ver meu perfil
(2) - Ver catálogo completo
(3) - Calcular compatibilidade com todos os conteúdos
(4) - Ver o conteúdo mais recomendado
(5) - Sair
```

## Estrutura do projeto

```text
cinematch-js/
│
├── cinematch.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

O arquivo `cinematch.js` possui a lógica principal da aplicação.

O `package.json` contém as informações do projeto e suas dependências.

O `package-lock.json` registra as versões das dependências instaladas.

O `.gitignore` impede que arquivos que não precisam ser enviados ao repositório, como `node_modules`, sejam versionados.

## Conceitos de JavaScript utilizados

### Arrays e métodos de array

O catálogo e os gêneros são armazenados em arrays.

Durante o projeto utilizei os métodos:

- `filter()`, para encontrar gêneros em comum e gêneros não explorados
- `map()`, para calcular a compatibilidade de todos os conteúdos
- `reduce()`, para encontrar o conteúdo com maior compatibilidade

Também utilizei `forEach()` para exibir conteúdos no menu.

### Classes e herança

Foi criada uma classe chamada `Conteudo`, que representa os conteúdos do catálogo.

Também foi criada a classe `Serie`, que herda de `Conteudo` utilizando `extends`.

A classe `Serie` possui uma informação específica, que é a quantidade de temporadas.

### Uso do this

O `this` foi utilizado dentro das classes para acessar os atributos dos objetos, como título, tipo, gêneros e duração.

### Callback

Foi criada uma função de finalização do onboarding que recebe outra função como parâmetro.

Essa função é executada quando o usuário escolhe sair do sistema.

### Closure

Foi criado um contador de recomendações utilizando closure.

O contador mantém internamente a quantidade de vezes que uma recomendação foi solicitada durante a execução do programa.

### Promise

O carregamento do catálogo é simulado através de uma Promise.

Foi utilizado um `setTimeout()` para representar o tempo que uma aplicação poderia levar para receber dados de um servidor.

### Async e Await

A função responsável por iniciar o sistema utiliza `async/await` para aguardar o carregamento do catálogo antes de mostrar o menu para o usuário.

## var, let e const

Durante o projeto foram priorizados `const` e `let`.

Usei `const` para valores que não precisam receber uma nova atribuição durante a execução.

Usei `let` em situações onde o valor precisa mudar, como na opção escolhida pelo usuário dentro do menu.

Não foi necessário utilizar `var` neste projeto.

## Como a internet funciona

De forma resumida, a internet permite que computadores e outros dispositivos se comuniquem através de redes.

Quando acessamos um site ou aplicativo, normalmente o dispositivo envia uma solicitação para outro computador que possui os dados ou serviços necessários.

Esse computador responde à solicitação e envia os dados de volta.

## Arquitetura cliente-servidor

Em uma arquitetura cliente-servidor, o cliente é a parte que solicita informações e o servidor é responsável por processar a solicitação e devolver uma resposta.

Por exemplo, em uma plataforma real de streaming, o aplicativo poderia solicitar ao servidor uma lista de filmes disponíveis.

Neste projeto não existe um servidor real.

A função que utiliza Promise e `setTimeout()` simula esse comportamento, como se o catálogo estivesse sendo carregado de um servidor antes de ser utilizado pela aplicação.

## VS Code e extensões

O projeto foi desenvolvido utilizando o Visual Studio Code.

Não foi necessária nenhuma extensão específica para executar o projeto, pois o VS Code já possui suporte para desenvolvimento em JavaScript.

O terminal integrado do VS Code também foi utilizado durante o desenvolvimento e os testes.

## Organização com Kanban

As tarefas do projeto foram organizadas utilizando o GitHub Projects.

O quadro foi dividido nas seguintes colunas:

- Backlog
- A Fazer
- Em Andamento
- Concluído

As tarefas foram movimentadas entre as colunas conforme o desenvolvimento avançava.

## Versionamento

O projeto foi versionado utilizando Git e GitHub.

Foram utilizadas branches para separar partes do desenvolvimento.

### main

Branch principal do projeto.

### develop

Branch utilizada para reunir as funcionalidades durante o desenvolvimento antes da versão final.

### feat/perfil-interativo

Utilizada para desenvolver a coleta dos dados do usuário através do terminal.

### feat/classes-poo

Utilizada durante o desenvolvimento das classes, herança e outras funcionalidades relacionadas ao projeto.

### docs/readme

Utilizada para criação e atualização da documentação do projeto.

Os commits também foram realizados durante diferentes etapas do desenvolvimento para registrar a evolução do projeto.

## Possíveis melhorias

Algumas melhorias que poderiam ser implementadas futuramente são:

- permitir cadastrar mais filmes e séries
- melhorar o tratamento de entradas digitadas pelo usuário
- evitar diferenças entre gêneros digitados com letras maiúsculas ou minúsculas
- adicionar uma interface gráfica
- buscar conteúdos através de uma API real
- salvar as preferências do usuário
- permitir realizar novas buscas sem reiniciar o programa

## Autor

Renan Santos


