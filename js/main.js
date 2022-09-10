//variables globales inicio de sesion
let limiteErrores = 3;
let intentosContrasenha;
let usuarioEnter;
let contrasenhaEnter;

//corroborar vacio en los datos del usuario
function corroborarVacio(items){
    let error = 0;
    while(items==""){
        items = prompt("El fomrmulario no puede estar vacio.\n Introduzca nuevamente la información")
    }
}
const clientes = [];

//contructor de clientes
class Cliente{
    constructor(id, nombre, edad, dni, sueldo, contrasenha){
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sueldo = sueldo;
    this.contrasenha = contrasenha;
    }
}

//función crear contraseña
function crearContrasenha(contrasenha){
    this.contrasenha = contrasenha;
    let errores = 0;
    corroborarVacio(contrasenha);
    let corroborarContra = prompt("Repita la contraseña");
    while(contrasenha!=corroborarContra && errores<2){
        alert("Las contraseñas no coinciden");
        corroborarContra = prompt("Repita la contraseña");
        if(corroborarContra==""){
        corroborarContra = prompt("El fomrmulario no puede estar vacio.\n Introduzca nuevamente la información")
        }
        errores++;
    }
    if(errores>=2){
        alert("No puedes crear tu usuario --> contreñas no coinciden")
        return contrasenha = "bloqueado34785";//esto evita que el usuario se cree aunque no hagan bien la contraseña
    }         
}

//creamos el cliente
function crearCliente(){
    let usuario = prompt("Introduzca un Usuario");
    corroborarVacio(usuario);
    let contrasenha = prompt("Introduzca su Contraseña");
    let bloqueo = crearContrasenha(contrasenha);
    if(bloqueo != "bloqueado34785"){//para eviar que el programa siga creando el usuario sin la contraseña no se realiza bien.
    let edad = parseInt(prompt("Introduzca su Edad"));
    corroborarVacio(edad);
    let nDocumento = parseInt(prompt("Introduzca su Numero de Documento"));
    corroborarVacio(nDocumento);
    let salario = parseInt(prompt("Introduzca su sueldo mensual"))
    corroborarVacio(salario);
    usuario = new Cliente(clientes.length, usuario, edad, nDocumento, salario, contrasenha);
    alert("Usuario creado correctamente");
    clientes.push(usuario)
    } else {
        alert("Cliente no Creado")
    }
}

function iniciarSesion(clientes){
    let usuarioSesion = prompt("Introduzca su usuario");
    const aprobado = () => {
        clientes.some
    }
}

function inicioPrograma(){
    let eleccion = parseInt(prompt("¿Que desea Hacer? \n 1. Crear Cliente \n 2. Iniciar Sesion \n 3. Salir" ))
    do{   
        while(eleccion < 4 && eleccion > 0){
            if(eleccion==1){
                crearCliente();
                eleccion = parseInt(prompt("¿Que desea Hacer? \n 1. Crear Cliente \n 2. Iniciar Sesion \n 3. Salir" ))                }
            if(eleccion==2){
                iniciarSesion(clientes);
            }
            while(eleccion==3){
                alert("Gracias por tu Visita")
                eleccion = "salir";    
            }
        }
        if(eleccion == 0 || eleccion >= 4){
            alert("La Opción no es Correcta");
            eleccion = parseInt(prompt("¿Que desea Hacer? \n 1. Crear Cliente \n 2. Iniciar Sesion \n 3. Salir" ))
        }
    }while(eleccion == 0 || eleccion >= 4)
}

inicioPrograma();
console.log(clientes);
//corroborar usuario
function corroborarUsuario(usuario){
    for(let intentosUsuario=0; intentosUsuario<limiteErrores; intentosUsuario++){
        usuarioEnter = prompt("Introduzca su nombre de usuario");
        compararUsuario(usuario, intentosUsuario);
        if(usuario!=usuarioEnter){
            alert("Usuario Incorrecto");
            if(intentosUsuario==2){
                alert("Usuario Bloqueado");
            }
        };   
    };
}
// function compararUsuario(usuario, intentosUsuario){
//     if(usuario==usuarioEnter){
//         alert("Usuario Correcto")
//         intentosUsuario=3;
//     }
// }

// //corroborar contraseña
// function corroborarContrasenha(){
//     if(usuario==usuarioEnter){
//         for (intentosContrasenha=0; intentosContrasenha<limiteErrores; intentosContrasenha++){
//             contrasenhaEnter = prompt("Introduzca su contraseña");
//             if(contrasenha==contrasenhaEnter){
//                 alert("Contraseña Correcta")
//                 intentosContrasenha=3;
//             }
//             if(contrasenha!=contrasenhaEnter){
//                 alert("contraseña incorrecta");
//                 if(intentosContrasenha==2){
//                     alert("usuario Bloqueado")
//                 }
//             }
//         }
//     }
// }

// //comparacion final
// function controlFinal(){
//     if(usuario==usuarioEnter && contrasenha==contrasenhaEnter){
//         alert("Inicio de Sesión Satisfactorio")
//         alert("Bienvenido " + usuario)
//     } else {
//         alert("Usuario no encontrado")
//     }
// }




// //calculo de prestamos
// //variables
// let cuotas = 0;
// let cantidadPrestamo = 0;
// let valorFinalPrestamo = 0;
// let intereses = 0;
// let cantidadIntereses = 0;
// let valorCuota = 0;
// //funcionesgh´{}
// function sumaDineroFinal(){
//     valorFinalPrestamo = cantidadPrestamo + intereses;
// }

// function calculoCuota(){
//     valorCuota = valorFinalPrestamo/cuotas;
// }

// function eleccionInteres(){
//     switch(cuotas){
//         case 3:
//             cantidadIntereses = 0.21;
//             break;
//         case 6:
//             cantidadIntereses = 0.42;
//             break;
//         case 12:
//             cantidadIntereses = 0.84;
//             break;
//         case 24:
//             cantidadIntereses = 1.68;
//             break;
//         case 48:
//             cantidadIntereses = 3.36;
//             break;
//     }
// }

// function controlCuotas(){
//     while(cuotas != 3 && cuotas != 6 && cuotas != 12 && cuotas != 24 && cuotas != 48){
//         alert("Error en eleccion de cuotas");
//         cuotas = parseInt(prompt("Las opciones son 3, 6, 12, 24 y 48 cuotas"));
//     }
// }

// function calculoItereses(){
//     intereses = cantidadPrestamo * cantidadIntereses;
// }

// function controlCero(){
//     while(cantidadPrestamo <= 0){
//         alert("El monto tiene que ser mayor a cero");
//         cantidadPrestamo = parseFloat(prompt("¿Cuanto es el dinero que usted quiere recibir?"));
//     }
// }

// function pedidoPrestamo(){
//     cantidadPrestamo = parseFloat(prompt("¿Cuanto es el dinero que usted quiere recibir?"));
//     controlCero();
//     alert("¿En cuantas cuota usted quiere devolver el prestamo?");
//     cuotas = parseInt(prompt("Las opciones son 3, 6, 12, 24 y 48 cuotas"));
//     controlCuotas();
//     eleccionInteres();
//     calculoItereses();
//     sumaDineroFinal();
//     calculoCuota();
//     alert("Tu Prestamo a sido Calculado");
// }

// function aceptarTrato(){
//     let validacion = prompt("¿Acepta el prestamo? Si/No");
//     if(validacion.toLowerCase()=="si"){
//         alert("su prestamo entrara en revision, espere una respuesta.");
//         alert("Gracias")
//     } else {
//         alert("a rechazado el prestamo. Saludos")
//     }
// }
// function muestra(){
//     alert("Tu Prestamo por $" + cantidadPrestamo + " tiene un interes de $" + intereses + " en la cantidad de " + cuotas + " cuotas que elegiste."); 
//     alert("Tus Cuotas seran de $" + valorCuota.toFixed(2));
//     aceptarTrato();
// }

// //ejecucion

// pedidoPrestamo();
// muestra();