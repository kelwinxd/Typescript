
//Objectis inside TSC
function Fillup(data: {
  nome: string;
  preco: number;
  carregador: boolean;
}){
document.body.innerHTML += `
<div style="text-align: center; font-size: 50px; border: 1px solid black"> <p style="font-weight: bold"> ${data.nome} </p>
<p> Preço:  ${data.preco}  </p>
<p> Inclui carregador: ${data.carregador ? 'Sim' : 'Não'} </p>
</div>

`
}

Fillup({nome: 'Iphone',
preco: 2000,
carregador: true
})

//Type sum up and restrict the objects 

type NumberOrString = string | number;
 // using it in a function
type ValueReg = {
  
    Nickname: string;
    Age: number;
    Genre: string
  
  
 };

function Register(reg:ValueReg ){
document.body.innerHTML += `
<div style="border: solid 1px black"> 
<p>Nickname: ${reg.Nickname} </p>
<p> Age:${reg.Age} </p>
<p> Genre: ${reg.Genre} </p>
</div>
`

}

Register({
  Nickname: 'Kel',
  Age: 24,
  Genre: 'M'
})

// even with categories

type Category = "JS" | "React" | "CSS";



