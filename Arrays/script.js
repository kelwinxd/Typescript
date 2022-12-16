"use strict";
const numbers = [20, 18, 68, 36, 54, 30];
const values = [56, 'Taxes', 44, 'Product'];
//filter numbers
function Bigger(data) {
    return data.filter((n) => n > 30);
}
//filter typeofs alternative sintax
function FilterType(data) {
    return data.filter((something) => typeof something === "number");
}
console.log(Bigger(numbers));
console.log(FilterType(values));
//Fetching with Array
async function FetchCourse() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    ShowCourse(data);
}
FetchCourse();
function ShowCourse(course) {
    course.forEach(course => {
        let color;
        if (course.nivel === 'iniciante') {
            color = 'blue';
        }
        else {
            color = 'red';
        }
        document.body.innerHTML += `

      <div style="text-align: center;">
      <h1>${course.nome}   </h1>
      <h3 style="color: ${color}"> ${course.nivel} </h3>
      </div>
      
      `;
    });
}
