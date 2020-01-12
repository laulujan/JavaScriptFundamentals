/* FUNCIONES SON OBJETOS DE 1ERA CLASE
SE UTILIZAN PARA REDUCIR CODIGO, REUTILIZARLO 

-Maneras de declarar funciones:
** Function declaration
*/

function(move){

};

// **Function expression
//named
let movement = function move(){

};

//anonymous
let run = function(){

};

//ARROW FUNCTIONS

let walk = () => move();
let wakk = () => {};
// ejemplo
let saludo = () => console.log("hola");
saludo();
// ejemplo 2
let ageCalculator = function calculator(birthday, actualYear){
    let result = actualYear - birthday;
    return result;
};

let age = ageCalculator(1988, 2020);
console.log(age);

//ejemplo 3

let isMayorDeEdad = (age) => {
    if(age >= 18)
        console.log("es mayor");
    else
        console.log("es menor");
    ;
}
isMayorDeEdad(age);

//ARGUMENTS
function sum(a,b){
    return a + b;
};

console.log(sum(5,6));

// ==================

function sum(){
    console.log(arguments);
    let result = 0;
    for(let param of arguments){
        result += param;
    }
    return result;
};
console.log(sum(1,2,3,4));

//================== REST=============solo para funciones
function exponente(potencia, ...args){
    console.log(args);
}
console.log(exponente);

//============= SPREAD================ OBJETOS Y ARRAYS

let pepito = {
    gender: "male",
    eyes: "brown",
    height: "1.9",
    skin: "brown",
};


let pepita = {
    ... pepito,
    gender: "female",
};

console.log(pepito, pepita);

//===========

function sum(first, ...args){
    let result = first;
    for (let value of args)
        result += value;
    
    return result;
}
console.log(sum(1,2,3,4));

//==========================

function exponent(potencia = 2, value1 = 1, ...values){
    console.log("exponent")
    console.log(potencia);
    console.log(value1);
    console.log(values);
}

exponent(3, 5, 6, 7);

//=========================

function getTotalPayment(monto, interes = 3.5, years = 4) {
   let montoConInteres = (monto * interes / 100) + monto;
   let totalPerYear = montoConInteres / years;
   return totalPerYear;
}
console.log(getTotalPayment(1000));


// ==============HOIST AND KEYWORD THIS============
//HOISTING=======es el tiempo que en compilacion se da de almacenamiento o prioridad a las declaraciones
//primer ejemplo HOISTING
run ();
function run () {
    console.log("running");
};

move();

let move = function walk(){
    console.log("walking");
};

//==========KEYWORD THIS===
let persona = {
    name : "lau",
    move : function () {
        console.log("I can move");
        console.log(this.name);
    },

}
persona.move();

/////////////////////////////
function x (){
    let x = "x";
    console.log(x, this);
    function y (){
        let y = "y";
        console.log(y, this);
        function z(){
            let z = "z";
            console.log(z, this);

        }
        z();
    }
    y();
}

x();

///////////////////

var documentName = "Javascirpt fundamentals";
function exampleThis(){
    console.log(this.documentName);
}
exampleThis();

// ================SCOPE AND CLOSURES============
//SCOPE GLOBAL
let x = 5;
function oneFunctionScope(){
    let x = 10;

}
console.log(x);
//SCOPE LOCAL
function oneFunctionScope(){
    let x = 10;
    for(let i = x; i > 0; i--){
        let x = 8;
        console.log(x, "index", i);
    }
    console.log(x);

}
oneFunctionScope();


function oneFunctionScope(){
    let x = 10;
    function loop(){
        console.log(x, "index");
    }
    loop();
    console.log(x)
}
oneFunctionScope();

////////////////////////CALL BACKS/////////////////
let ageCalculator = (birhYear, actualYear) => actualYear - birhYear;

let isNotUnderAge = function ( fn) {
    let age = fn(1987, 2020);

    if (age > 18){
        console.log("is not under age");
    }else{
        console.log("es menor de edad");
    }
}
isNotUnderAge(ageCalculator);

//==========================================
function saludo (name){
    alert("hola " + name)
};

function getName(fn){
    let name = prompt("please enter your name");
    fn(name);
}

getName(saludo);

//EVENTOS EN JS en la ventana/browser, en css, DOM, Clic, mouse, typing
function setColor(){
    let body = document.getElementsByTagName('body');
    document.body.style.backgroundColor = 'red';
}

function changeLetterColor(){
    let element = document.getElementById('contenedor');
    element.style.color = 'blue';
}

function normalColor(){
    let elem = document.getElementById('contenedor');
    elem.style.color = 'black';
}

function enviar(){
    alert("la info se ha enviado con exito");
}

window.onload = () => alert("Hola event");

function save(){
    let inputValue = document.getElementById('name').value;
    alert("el nombre ha sido guardado" + inputValue);
}


/////////////////html part//////////////
<body>
    <div id="contenedor" onmouseover="changeLetterColor()" onmouseout="normalColor()">
         <h1>soy un div contenedor</h1>
    </div>
    <button onclick=setColor() id="boton">Boton</button>
    <form onsubmit="enviar()">
        <input type="text" id="name"/>
        <button type="submit">submit</button>

    </form>
</body>

////////////////////////////////////////////////////////
//funcion change color
function changeColor(){
    let element = document.getElementsByClassName("styleClass");
    element[0].style.backgroundColor = "green";
    element[4].style.backgroundColor = "green";
}
//html
<body>
    <div class="styleClass"></div>
    <br/>
    <div class="styleClass"></div>
    <br/>
    <div class="styleClass"></div>
    <br/>
    <div class="styleClass"></div>
    <br/>
    <div class="styleClass"></div>
    <br/>
    <button onclick="changeColor()">change it</button>
</body>

//=============================

function save(){
    // alert("save");
    let element = document.getElementById('name').value;
    console.log(element);
    if (element !== "laura"){
        alert("no puedo enviar, escribe laura");
        return;
    }

}