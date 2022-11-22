"use strict";
//Objectis inside TSC
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
    carregador: false
});
function Register(reg) {
    document.body.innerHTML += `
<div style="border: solid 2px black"> 
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


