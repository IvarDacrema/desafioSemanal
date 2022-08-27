//Crear Usuario
let errores = 0;
alert("Creación de Usuario");
let usuario = prompt("Introduzca su Nombre");
let contrasenha = prompt("Introduzca su Contraseña");
let corroborarContrasenha = prompt("Repita la contraseña");
while(contrasenha!=corroborarContrasenha && errores<2){
    alert("Las contraseñas no coinciden");
    corroborarContrasenha = prompt("Repita la contraseña");
    errores++;
}
if(errores==2){
    alert("No puedes crear tu usuario --> contreñas no coinciden")
} else {
    alert("Usuario creado correctamente");
//inicio de sesion
let limiteErrores = 3;
let intentosUsuario;
let intentosContrasenha;
let usuarioEnter;
let contrasenhaEnter;
alert("Inicio de Sesión");
//corroboro que usuario sea correcto
for(intentosUsuario=0; intentosUsuario<limiteErrores; intentosUsuario++){
    usuarioEnter = prompt("Introduzca su nombre de usuario");
    if(usuario==usuarioEnter){
        alert("Usuario Correcto")
        intentosUsuario=3;
    }
    if(usuario!=usuarioEnter){
        alert("Usuario Incorrecto");
        if(intentosUsuario==2){
            alert("Usuario Bloqueado");
        }
    };   
};
//corroboro que contraseña sea correcta
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
if(usuario==usuarioEnter && contrasenha==contrasenhaEnter){
    alert("Inicio de Sesión Satisfactorio")
}
}