//variables globales creacion de usuario
let usuario;
let contrasenha;
let corroborarContra;
let errores = 0;

//variables globales inicio de sesion
let limiteErrores = 3;
let intentosUsuario;
let intentosContrasenha;
let usuarioEnter;
let contrasenhaEnter;

//funciones creacion de usuario
//funcion corroborar si el usuario es vacio
function corroborarVacioUsuario(){
    while(usuario===""){
        alert("El Usuario esta vacio");
        alert("Introduzca un usuario valido");
        usuario = prompt("Introduzca su Usuario");
    }
}

//funcion corroborar contraseña vacia
function corroborarVacioContrasenha(){
    while(contrasenha===""){
        alert("El contraseña esta vacia");
        alert("Introduzca una contraseña valida");
        contrasenha = prompt("Introduzca su contraseña");
    }
}

//funcion creacion de usuario
function crearUsuario(){
    alert("Creación de Usuario");
    usuario = prompt("Introduzca su Usuario");
    corroborarVacioUsuario();
}

//función crear contraseña
function crearContrasenha(){
    contrasenha = prompt("Introduzca su Contraseña");
    corroborarVacioContrasenha();
    corroborarContra = prompt("Repita la contraseña");
    while(contrasenha!=corroborarContra && errores<2){
        alert("Las contraseñas no coinciden");
        corroborarContra = prompt("Repita la contraseña");
        errores++;
    }
    if(errores==2){
        alert("No puedes crear tu usuario --> contreñas no coinciden")
    } else {
        alert("Usuario creado correctamente");
    }
}

//funciones inicio de sesion
//corroborar usuario
function corroborarUsuario(){
    for(intentosUsuario=0; intentosUsuario<limiteErrores; intentosUsuario++){
        usuarioEnter = prompt("Introduzca su nombre de usuario");
        compararUsuario();
        if(usuario!=usuarioEnter){
            alert("Usuario Incorrecto");
            if(intentosUsuario==2){
                alert("Usuario Bloqueado");
            }
        };   
    };
}

//compara usuario guardado con el que esta ingresando
function compararUsuario(){
    if(usuario==usuarioEnter){
        alert("Usuario Correcto")
        intentosUsuario=3;
    }
}

//corroborar contraseña
function corroborarContrasenha(){
    if(usuario==usuarioEnter){
        for (intentosContrasenha=0; intentosContrasenha<limiteErrores; intentosContrasenha++){
            contrasenhaEnter = prompt("Introduzca su contraseña");
            if(contrasenha==contrasenhaEnter){
                alert("Contraseña Correcta")
                intentosContrasenha=3;
            }
            if(contrasenha!=contrasenhaEnter){
                alert("contraseña incorrecta");
                if(intentosContrasenha==2){
                    alert("usuario Bloqueado")
                }
            }
        }
    }
}

//comparacion final
function controlFinal(){
    if(usuario==usuarioEnter && contrasenha==contrasenhaEnter){
        alert("Inicio de Sesión Satisfactorio")
        alert("Bienvenido " + usuario)
    } else {
        alert("Usuario no encontrado")
    }
}

//crear usuario y contraseña
crearUsuario();
crearContrasenha();

//inicio de sesion
corroborarUsuario();
corroborarContrasenha();
controlFinal();

//calculo de prestamos
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