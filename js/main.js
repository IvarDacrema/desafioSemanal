$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

//contructor de clientes
class Cliente{
    constructor(id, usuario, contrasenha, email, telefono){
    this.id = id;
    this.usuario = usuario;
    this.contrasenha = contrasenha;
    this.email = email;
    this.telefono = telefono;
    }
}

let clientes = []
if(localStorage.getItem(`clientes`)){
    clientes = JSON.parse(localStorage.getItem(`clientes`))
} else {
    localStorage.setItem(`clientes`, JSON.stringify(clientes))
}

let botonRegistro = document.getElementById("botonRegistro")
botonRegistro.addEventListener("click", ()=>{
    crearCliente(clientes)
})

function corroborarNumeros(input){
    if(isNaN(input)){
        return true
    } else {
        return false
    }
}
function corroborarVacio(items){
    if(items===""){
        return true
    } else {
        return false
    }
    
}
function crearCliente(clientes){
    let usuario = document.getElementById("usuarioInput");
    let contrasenha = document.getElementById("contrasenhaInput");
    let emailInput = document.getElementById("emailInput")
    let telefonoInput = document.getElementById("telefonoInput")
    if(corroborarVacio(usuario.value) || corroborarVacio(contrasenha.value)|| corroborarVacio(emailInput.value)|| corroborarVacio(telefonoInput.value)){
        alert("datos vacios")
    }else if(corroborarNumeros(parseInt(telefonoInput.value))){
        let errorTelefono = document.getElementById("avisoTelefono")
        errorTelefono.innerText = ""
        let aviso = document.createElement("h5")
        aviso.innerText = "telefono no puede contener letras o caracteres especiales";
        errorTelefono.append(aviso)
    }else{
        let nuevoCliente = new Cliente(clientes.length, usuarioInput.value, contrasenhaInput.value, emailInput.value, telefonoInput.value);
        clientes.push(nuevoCliente)
        localStorage.setItem(`clientes`, JSON.stringify(clientes))
        usuario.value = ""
        contrasenha.value = ""
        emailInput.value = ""
        telefonoInput.value = ""
    }
}

let botonInicio = document.getElementById(`botonInicio`);

botonInicio.addEventListener("click", ()=>{
    iniciarSesion(clientes)
})

function iniciarSesion(clientes){
    let errores
    let ingresoUsuario = document.getElementById(`ingresoUsuario`);
    let ingresoContrasenha = document.getElementById(`ingresoContrasenha`);
    let usuarioEncontrado = clientes.find((cliente) => cliente.usuario.toLowerCase()==ingresoUsuario.value.toLowerCase())
    let contrasenhaEncontrada = clientes.find((cliente)=> cliente.contrasenha===ingresoContrasenha.value);
    if(usuarioEncontrado && contrasenhaEncontrada){
        alert("inicio de sesion")
        ingresoUsuario.value = ""
        ingresoContrasenha.value = ""
    }else{
        alert("inicio de sesion fallido")
    }   
}