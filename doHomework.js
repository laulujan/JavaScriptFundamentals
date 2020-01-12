// 1.- Crear una función que se llame doHomeWork, esta función va a recibir como parámetro una función. 
// 2.- Dentro de la funcion doHomeWork cree un loop que imprima los números del 1 al 100, terminando el loop mande 
//  a llamar la funcion que recibe como parametro. 
// 3.- La función que recibe como parámetro debe de enviar una alerta que diga: The homework has been done!

function doHomework(fn){
    for( let i = 1; i <= 100; i++){
        console.log(i);
    }

    fn();
    
}
function funcfn(){
    alert("The homework has been done!")
}

doHomework(funcfn);