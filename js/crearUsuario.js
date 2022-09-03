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
    }
}

//crear usuario y contraseña
crearUsuario();
crearContrasenha();

//inicio de sesion
corroborarUsuario();
corroborarContrasenha();
controlFinal();
