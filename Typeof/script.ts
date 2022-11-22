const nome: string = "Kelwin"

//To avoid errors, its reasonable use typeof guard

if(nome === "string"){
    nome.toLowerCase();
} else {
    console.log(`${nome} it's not a phrase`)
}

const data = {
  Person: 'Luka',
  Money: 1200
}
//Optional Chainning it's more simple
const ShowSalary = data?.Money

console.log(ShowSalary)


//transforming string into number
function toNumber(value: string | number){
    if(typeof value === "number"){
        return value
    } else if(typeof value === "string"){
        return Number(value)
    } else {
        throw "The value should be a number or a string"
    }
}

console.log(toNumber("1545"))




//exercicies
function BecomeNum(value: number | string){
    if(typeof value === "number"){
        return Number(value)
    }else if(typeof value === "string"){
        return Number(value)
    }else {
        throw "Tipos de dados errados"
    }
}

console.log(BecomeNum("25455"))
