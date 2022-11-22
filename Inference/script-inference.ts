const produto: string = "PS4"


//Objeto no TSC
const Jogador: {
    nome: string, /*Não é necessário colocar aqui*/
    altura: number

} = {
    nome: "Lebron",
    altura: 2.06,

}
//Retornar uma string na função 
function multi(a: number, b: number) :string /* não é necessário colocar o tipo
pois o TSC já infere*/{
    return `sua multiplicação resultou: ${a * b}`
}

function AnotarAltura(player: {nome: string; altura: number}){
    Jogador.nome + Jogador.altura ; ' m';
    return player;
}

const Altura1 = AnotarAltura(Jogador)
console.log(Altura1);
