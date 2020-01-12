// Madame zazu
let city;
let children;
let husband;
let work;
let award;
let age;

function madameZazu(city, children, husband, work, award, age){
    console.log("When you have ", age, " years old, you will live in ", city, "you will have ", children, 
    " children with ", husband, "husbands, you will work as a ", work, " and won the ", award, "award");
    
}
madameZazu("Moscow", 4, 2, "CEO", "NOBEL", 30);

//string interpolation

function madameZazu(city, children, husband, work, award, age){
    console.log(`When you have ${age} years old you will live in ${city} you will have ${children} 
    children with  ${husband} husbands, you will work as a  ${work} and won the  ${award} award`);
    
}
madameZazu("Moscow", 4, 2, "CEO", "NOBEL", 30);

// Calculadora de edad
const actualYear = 2020;
let birthYear;

function guessAge(actualYear, birthYear){
    let age = actualYear - birthYear;
    return age;
}

console.log(guessAge(actualYear, 1987));


// Calculadora de figuras geometricas.
// que imprima un stars, seguida del numero de asteriscos
for(let i = 0; i <=10; i++){
    console.log("stars: ", "*".repeat(i));
}

let stars = '';
for(let i = 0; i <=10; i++){

    console.log("stars: ", i, stars);
    stars += '*';
}

//while
let i = 0;
stars = '';
while(i<=10){
    console.log("stars: ", i, stars);
    stars += '*';
    i++;
}

// do while

stars = '';
i = 0;

do {
    console.log("stars: ", i, stars);
    stars += '*';
    i++;
} while(i <=10);

// intercambiando variables 
let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

let c = a;

a = b;
b = c;

console.log(b);
console.log(a);