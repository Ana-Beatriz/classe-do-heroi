let readline = require("readline-sync")
let tipo
let ataque
let classeHeroi

function classe() {
    classeHeroi = parseInt(readline.question("\n---- CLASSES DE HEROI ----\n|     1 - Guerreiro      |\n|     2 - Mago           |\n|     3 - Monge          |\n|     4 - Ninja          |\n--------------------------\nEscolha a classe do seu heroi: "))

    while (classeHeroi < 1 || classeHeroi > 4) {
        classeHeroi = parseInt(readline.question("\nOpcao incorreta, tente novamente\n\n---- CLASSES DE HEROI ----\n|     1 - Guerreiro      |\n|     2 - Mago           |\n|     3 - Monge          |\n|     4 - Ninja          |\n--------------------------\nEscolha a classe do seu heroi: "))
    }

    return classeHeroi
}

function tipoHeroi(tipos){
    switch (classeHeroi) {
        case 1:
            tipo = "Guerreiro"
            ataque = "espada"
            break;

        case 2:
            tipo = "Mago"
            ataque = "magia"
            break;

        case 3:
            tipo = "Monge"
            ataque = "artes marciais"
            break;

        case 4:
            tipo = "Ninja"
            ataque = "shuriken"
            break;
    }
}

do {
    let nome = readline.question("Qual o nome do seu Heroi? ")
    let idade = readline.question("Qual a idade do seu Heroi? ")

    classe()
    tipoHeroi(classeHeroi)
    console.log(`\nO ${tipo} atacou usando ${ataque}\n`)

    var repet = readline.question("Nova classificacao? S/N\n")
    console.clear()

} while (repet.toUpperCase() !== "N")
