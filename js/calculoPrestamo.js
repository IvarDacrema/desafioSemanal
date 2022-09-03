//variables
let cuotas = 0;
let cantidadPrestamo = 0;
let valorFinalPrestamo = 0;
let intereses = 0;
let cantidadIntereses = 0;
let valorCuota = 0;
//funciones
function sumaDineroFinal(){
    valorFinalPrestamo = cantidadPrestamo + intereses;
}

function calculoCuota(){
    valorCuota = valorFinalPrestamo/cuotas;
}

function eleccionInteres(){
    switch(cuotas){
        case 3:
            cantidadIntereses = 0.21;
            break;
        case 6:
            cantidadIntereses = 0.42;
            break;
        case 12:
            cantidadIntereses = 0.84;
            break;
        case 24:
            cantidadIntereses = 1.68;
            break;
        case 48:
            cantidadIntereses = 3.36;
            break;
    }
}

function controlCuotas(){
    while(cuotas != 3 && cuotas != 6 && cuotas != 12 && cuotas != 24 && cuotas != 48){
        alert("Error en eleccion de cuotas");
        cuotas = parseInt(prompt("Las opciones son 3, 6, 12, 24 y 48 cuotas"));
    }
}

function calculoItereses(){
    intereses = cantidadPrestamo * cantidadIntereses;
}

function controlCero(){
    while(cantidadPrestamo <= 0){
        alert("El monto tiene que ser mayor a cero");
        cantidadPrestamo = parseFloat(prompt("¿Cuanto es el dinero que usted quiere recibir?"));
    }
}

function pedidoPrestamo(){
    cantidadPrestamo = parseFloat(prompt("¿Cuanto es el dinero que usted quiere recibir?"));
    controlCero();
    alert("¿En cuantas cuota usted quiere devolver el prestamo?");
    cuotas = parseInt(prompt("Las opciones son 3, 6, 12, 24 y 48 cuotas"));
    controlCuotas();
    eleccionInteres();
    calculoItereses();
    sumaDineroFinal();
    calculoCuota();
    alert("Tu Prestamo a sido Calculado");
}

function aceptarTrato(){
    let validacion = prompt("¿Acepta el prestamo? Si/No");
    if(validacion.toLowerCase()=="si"){
        alert("su prestamo entrara en revision, espere una respuesta.");
        alert("Gracias")
    } else {
        alert("a rechazado el prestamo. Saludos")
    }
}
function muestra(){
    alert("Tu Prestamo por $" + cantidadPrestamo + " tiene un interes de $" + intereses + " en la cantidad de " + cuotas + " cuotas que elegiste."); 
    alert("Tus Cuotas seran de $" + valorCuota.toFixed(2));
    aceptarTrato();
}

//ejecucion

pedidoPrestamo();
muestra();