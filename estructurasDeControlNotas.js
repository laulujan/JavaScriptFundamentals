
// IF

let width = 0;
let height = 0;

function isLandsCape(width, height){
    if (width > height) {
        console.log("is landscape")
    }else{
        (console.log("is portrait"))
    }
}

isLandsCape(200,50);

// IF WITH  BOOLEAN
let width = 0;
let height = 0;

function isLandsCape(width, height){
    if (width > height) {
        return true;
    }else{
        return false;
    }
}
console.log( isLandsCape(50, 200));

//SWITCH

function saludo(role) {
    switch(role) {
        case "Recursos Humanos":
            console.log("Hola compañero de ", role);
        break;
        case "IT":
            console.log("Hola compañero de ", role);
        break;
        case "Conta":
            console.log("Hola compañero de ", role);
        break;
        default:
            console.log("Hola invitado");
        
    }
}

saludo("IT");

/////////////////////////////////////////

function getPage(){
    //request
    const responseCode = 404;

    switch(responseCode){
        case 200:
            console.log("OK");
        break;
        case 404:
            console.log("NOT FOUND");
        break;
        case 500:
            console.log("Server error");
        break;
        default:
            console.log("We can't resolve the request")
    }
}
getPage();

// FOR LOOP FOR IN

let person = {
    name: "Ana",
    age: 30,
};

for(let key in person) {
    console.log(key);
}

let fruta = {
    color : "rojo",
    size: "chica",
    peso: 0.3,
};

console.log("mi manzana es: ");
for (let propiedad in fruta){
    if(propiedad !== "peso"){
        console.log(propiedad, "es", fruta[propiedad], "miomi");
    }else{
        console.log(propiedad, "es", fruta[propiedad], "miomi");
    }
}

// whith array

let numeros = [12,34,56,78,90];

for(let numero in numeros){
    console.log("index ", numero);
}

// FOR ON
for (let numero of numeros){
    console.log(numero);
}


// WHILE

let consumoMB = 6;


while(consumoMB > 2.5){
    checkTrafic(consumoMB);
    consumoMB --;
}

checkTrafic(consumoMB);

function checkTrafic(trafic) {
    console.log("checking traffic", trafic);
    if(trafic > 2.5){
        console.log("there is some traffic");
    }else{
        console.log("you can stop checking traffic");
    }
}


/////
let consumoMB = 0;

do {
    checkTrafic(consumoMB);
    consumoMB--;
} while(consumoMB > 2.5);

checkTrafic(consumoMB);

function checkTrafic(trafic) {
    console.log("checking traffic", trafic);
    if(trafic > 2.5){
        console.log("there is some traffic");
    }else{
        console.log("you can stop checking traffic");
    }
}

//BREAK AND CONTINUE

for(let i = 0; i < 10; i++) {
    if(i === 5)
    break;
    console.log( "index ", i);
}





