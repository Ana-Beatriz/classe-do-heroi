let readline = require("readline-sync")
let tipo
let ataque

function classe() {
    let classeHeroi = parseInt(readline.question("Escolha a classe do seu heroi:\n1 - Guerreiro\n2 - Mago\n3 - Monge\n4 - Ninja\n"))

    while (classeHeroi < 1 || classeHeroi > 4) {
        classeHeroi = parseInt(readline.question("Opcao Incorreta.\nEscolha a classe do seu heroi:\n1 - Guerreiro\n2 - Mago\n3 - Monge\n4 - Ninja\n"))
    }

    switch (classeHeroi) {
        case 1:
            tipo = "Guerreiro"
            ataque = "usou espada"
            break;

        case 2:
            tipo = "Mago"
            ataque = "usou magia"
            break;

        case 3:
            tipo = "Monge"
            ataque = "usou artes marciais"
            break;

        case 4:
            tipo = "Ninja"
            ataque = "usou shuriken"
            break;
    }
}

do {
    let nome = readline.question("Qual o nome do seu Heroi?\n")
    let idade = readline.question("Qual a idade do seu Heroi?\n")

    classe()
    console.log(`o ${tipo} atacou usando ${ataque}`)

    var repet = readline.question("Nova classificacao? S/N\n")
    console.clear()

} while (repet.toUpperCase() !== "N")
