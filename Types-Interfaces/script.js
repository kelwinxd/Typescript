"use strict";
//Objects inside TSC
function Fillup(data) {
    document.body.innerHTML += `
<div style="text-align: center; font-size: 50px; border: 1px solid black"> <p style="font-weight: bold"> ${data.nome} </p>
<p> Preço:  ${data.preco}  </p>
<p> Inclui carregador: ${data.carregador ? 'Sim' : 'Não'} </p>
</div>

`;
}
Fillup({ nome: 'Iphone',
    preco: 2000,
    carregador: true
});
;
function Register(reg) {
    document.body.innerHTML += `
<div style="border: solid 1px black"> 
<p>Nickname: ${reg.Nickname} </p>
<p> Age:${reg.Age} </p>
<p> Genre: ${reg.Genre} </p>
</div>
`;
}
Register({
    Nickname: 'Kel',
    Age: 24,
    Genre: 'M'
});
//API and Fetch
async function fetchP() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    console.log(data);
    showP(data);
}
function showP(data) {
    document.body.innerHTML += `
    <div style="text-align: center; border: 2px solid gray;">  <h1> Nome:  ${data.nome}   </h1>
    <p style="font-size:30px "> Preço: ${data.preco} </p>
    
    
    </div>
    
    `;
}
fetchP();
