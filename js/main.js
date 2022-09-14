//array de clientes
const clientes = [];

//contructor de clientes
class Cliente{
    constructor(id, nombre, edad, dni, sueldo, contrasenha, prestamos){
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sueldo = sueldo;
    this.contrasenha = contrasenha;
    this.prestamos = prestamos;
    }
}

//funcion de corroborar errores
function corroborarVacio(items){
    while(items==""){
        items = prompt("El formulario no puede estar vacio.\n Introduzca nuevamente la información")
    }
}

//funcion que verifica que el pedido de prestamo es mayor a cero
function controlCero(cantidadPrestamo){
    while(cantidadPrestamo <= 0){
        alert("El monto tiene que ser mayor a cero");
        cantidadPrestamo = parseFloat(prompt("¿Cuanto es el dinero que usted quiere recibir?"));
    }
}

//pregunta es cuantas cuotas quiere devolver el prestamo
function controlCuotas(cuotas){
    while(cuotas != 3 && cuotas != 6 && cuotas != 12 && cuotas != 24 && cuotas != 48){
        alert("Error en eleccion de cuotas");
        cuotas = parseInt(prompt("Las opciones son 3, 6, 12, 24 y 48 cuotas"));
    }
}

function eleccionInteres(cuotas){
    switch(cuotas){
        case 3:
            return 0.21;
            break;
        case 6:
            return 0.42;
            break;
        case 12:
            return 0.84;
            break;
        case 24:
            return 1.68;
            break;
        case 48:
            return 3.36;
            break;
    }
}

function calculoItereses(cantidadPrestamo, cantidadIntereses){
    return cantidadPrestamo * cantidadIntereses;
}

function sumaDineroFinal(cantidadPrestamo, intereses){
    return cantidadPrestamo + intereses;
}

function calculoCuota(valorFinalPrestamo, cuotas){
    return valorFinalPrestamo/cuotas;
}

//muestra lista de los clientes
function muestraClientes(clientes){
    clientes.forEach((cliente) => {console.log(`Nombre: ${cliente.nombre} y ID: ${cliente.id}`)});
}

//función crear contraseña
function crearContrasenha(contrasenha){
    this.contrasenha = contrasenha;
    let errores = 0;
    corroborarVacio(contrasenha);
    let corroborarContra = prompt("Repita la contraseña");
    while(contrasenha!=corroborarContra && errores<2 && corroborarContra==""){
        alert("Las contraseñas no coinciden");
        corroborarContra = prompt("Repita la contraseña");
        errores++;
    }
    if(errores>=2){
        alert("No puedes crear tu usuario --> contreñas no coinciden")
        return contrasenha = "bloqueado34785";//esto evita que el usuario se cree aunque no hagan bien la contraseña
    }         
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

function muestra(cantidadPrestamo, intereses, cuotas, valorCuota){
    alert(`Tu Prestamo por $ ${cantidadPrestamo} tiene un interes de $ ${intereses} en la cantidad de ${cuotas} cuotas cuotas que elegiste.`); 
    alert(`Tus Cuotas seran de $ ${valorCuota.toFixed(2)}`);
    aceptarTrato();
}

function pedidoPrestamo(){
    let cantidadPrestamo = parseFloat(prompt("¿Cuanto es el dinero que usted quiere recibir?"));
    controlCero(cantidadPrestamo);
    alert("¿En cuantas cuota usted quiere devolver el prestamo?");
    let cuotas = parseInt(prompt("Las opciones son 3, 6, 12, 24 y 48 cuotas"));
    controlCuotas(cuotas);
    let cantidadIntereses = eleccionInteres(cuotas);
    let intereses = calculoItereses(cantidadPrestamo, cantidadIntereses);
    let valorFinalPrestamo = sumaDineroFinal(cantidadPrestamo, intereses);
    let valorCuota = calculoCuota(valorFinalPrestamo, cuotas);
    alert("Tu Prestamo a sido Calculado");
    muestra(cantidadPrestamo, intereses, cuotas, valorCuota)
}

function menuOpciones(){
    let menu = prompt("1. Prestamo\n2. Inversiones(Todavia no esta programado)")
    if(menu==1){
        pedidoPrestamo();
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
    usuario = new Cliente(clientes.length, usuario, edad, nDocumento, salario, contrasenha, 0);
    alert("Usuario creado correctamente");
    clientes.push(usuario)
    } else {
        alert("Cliente no Creado")
    }
}

//funcion de iniciar sesion
function iniciarSesion(clientes){
    let usuarioSesion = prompt("Introduzca su usuario");
    let usuarioEncontrado = clientes.find((cliente) => cliente.nombre.toLowerCase()==usuarioSesion.toLowerCase())
    if(usuarioEncontrado==undefined){
        alert("No esta registrado en nuestra base de datos.\nGracias por su Visita")
    } else {
        alert("Usuario Correcto");
        corroborarContraSesion(usuarioEncontrado);//corrabora la contraseña en el inicio de sesion
        function corroborarContraSesion(){
            let intentosFallidos =0;
            let contrasenhaSesion = prompt("Introduzca su Contraseña")
            const contrasenhaOk = (contrasenhaSesion===usuarioEncontrado.contrasenha)
            if(contrasenhaOk){
                alert("Contraseña Correcta")
                menuOpciones()
            } else {
                while(contrasenhaSesion != usuarioEncontrado.contrasenha && intentosFallidos<2){
                    alert("Contraseña no coinciden");
                    contrasenhaSesion = prompt("Introduzca su Contraseña");
                    intentosFallidos++;
                }
            }
        }
    }
}

//funcion de iniciar sesion
function inicioPrograma(){
    let eleccion = parseInt(prompt("¿Que desea Hacer? \n 1. Crear Cliente \n 2. Iniciar Sesion \n 3. Lista de Clientes \n 4. Salir"))
    do{   
        while(eleccion < 5 && eleccion > 0){
            if(eleccion==1){
                crearCliente();
                eleccion = parseInt(prompt("¿Que desea Hacer? \n 1. Crear Cliente \n 2. Iniciar Sesion \n 3. Lista de Clientes \n 4. Salir"))
            }
            if(eleccion==2){
                iniciarSesion(clientes);
                eleccion = parseInt(prompt("¿Que desea Hacer? \n 1. Crear Cliente \n 2. Iniciar Sesion \n 3. Lista de Clientes \n 4. Salir"))
            }
            if(eleccion==3){
                muestraClientes(clientes);
                eleccion = parseInt(prompt("¿Que desea Hacer? \n 1. Crear Cliente \n 2. Iniciar Sesion \n 3. Lista de Clientes \n 4. Salir"))
            }
            while(eleccion==4){
                alert("Gracias por tu Visita")
                eleccion = "salir";    
            }
        }
        if(eleccion == 0 || eleccion >= 5){
            alert("La Opción no es Correcta");
            eleccion = parseInt(prompt("¿Que desea Hacer? \n 1. Crear Cliente \n 2. Iniciar Sesion \n 3. Salir" ))
        }
    }while(eleccion == 0 || eleccion >= 5)
}

inicioPrograma();