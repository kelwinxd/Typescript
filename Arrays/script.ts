const numbers = [20,18,68,36,54,30]
const values = [56, 'Taxes',44, 'Product']

//filter numbers
function Bigger(data: number[]){
return    data.filter((n) => n > 30)
}

//filter typeofs alternative sintax
function FilterType(data: Array<number | string>){
   return data.filter((something) => typeof something === "number")
}

console.log(Bigger(numbers))
console.log(FilterType(values))