let readline = require("readline-sync")
const clearLastLines = (count) => {
    process.stdout.moveCursor(0, -count)
    process.stdout.clearScreenDown()
  }

class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = this.tipoAtaque()
    }

    tipoAtaque(){
        switch (this.tipo) {
            case "Guerreiro":
                return "espada"
            case "Mago":
                return "magia"
            case "Monge":
                return "artes marciais"
            case "Ninja":
                return "shuriken"
        }
    }

    escrever(){
        console.log(`\nO ${this.tipo} atacou usando ${this.ataque}\n`)
    }
}

function classe() {
    //inicio menu
    console.log("\n---- CLASSES DE HEROI ----");
    console.log("|      1 - Guerreiro     |");
    console.log("|      2 - Mago          |");
    console.log("|      3 - Monge         |");
    console.log("|      4 - Ninja         |");
    console.log("--------------------------")
    //fim menu
   
    let classeHeroi = parseInt(readline.question("\nEscolha a classe do seu heroi: "))

    while (isNaN(classeHeroi) || !(classeHeroi >= 1 && classeHeroi <= 4)) {
        clearLastLines(2) // Código para mover o cursor 2 linhas para cima e limpar 
        classeHeroi = parseInt(readline.question("Opcao invalida.\nEscolha a classe do seu heroi: "))
    }
    
    let classeTipo
        switch (classeHeroi) {
            case 1:
                return "Guerreiro"
            case 2:
                return "Mago"
            case 3:
                return "Monge"
            case 4:
                return "Ninja"
        }

    return classeTipo
}

do {
    let nome = readline.question("Qual o nome do seu Heroi? ")
    let idade = readline.question("Qual a idade do seu Heroi? ")
    let classeHeroi = classe()
    
   let novoHeroi = new Heroi (nome, idade, classeHeroi)
   novoHeroi.escrever()

    var repet = readline.question("Nova classificacao? S/N\n")
    console.clear()

} while (repet.toUpperCase() !== "N")
