
//Objects inside TSC
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
 // Interface is to Objects and Type is to Primitive data
interface ValueReg {
  
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


//API and Fetch

async function fetchP(){
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json()
  console.log(data)
  showP(data)
}


interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: number | string;
  seguroAcidentes: boolean;
  empresaFabricante:{
    fundacao:number;
    nome:string;
  }
}

function showP(data: Product){
    document.body.innerHTML += `
    <div style="text-align: center; border: 2px solid gray;">  <h1> Nome:  ${data.nome}   </h1>
    <p style="font-size:30px "> Preço: ${data.preco} </p>
    <p style="font-size:25px "> Descrição: ${data.descricao} </p>
    <p style="font-size:30px "> Garantia: ${data.garantia}      </p>
    <p style="font-size:30px "> Seguro Acidente: ${data.seguroAcidentes}     </p>
    <p style="font-size:40px "> Empresa fabricante: ${data.empresaFabricante.nome} </p>
    <p style="font-size:30px "> Garantia: ${data.empresaFabricante.fundacao}               </p>
    
    </div>
    
    `
}

fetchP()



