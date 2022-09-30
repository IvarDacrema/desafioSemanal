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
    crearUsuario(clientes)
})

function crearUsuario(clientes){
    let usuarioInput = document.getElementById("usuarioInput")
    let contrasenhaInput = document.getElementById("contrasenhaInput")
    let emailInput = document.getElementById("emailInput")
    let telefonoInput = document.getElementById("telefonoInput")
    let nuevoCliente = new Cliente(clientes.length, usuarioInput.value, contrasenhaInput.value, emailInput.value, telefonoInput.value);
    clientes.push(nuevoCliente)
    localStorage.setItem(`clientes`, JSON.stringify(clientes))
    console.log(clientes)
}


let botonInicio = document.getElementById(`botonInicio`);

botonInicio.addEventListener("click", ()=>{
    iniciarSesion(clientes)
})

function iniciarSesion(clientes){
    let ingresoUsuario = document.getElementById(`ingresoUsuario`);
    let ingresoContrasenha = document.getElementById(`ingresoContrasenha`);
    let usuarioEncontrado = clientes.find((cliente) => cliente.usuario.toLowerCase()==ingresoUsuario.value.toLowerCase())
    let contrasenhaEncontrada = clientes.find((cliente)=> cliente.contrasenha===ingresoContrasenha.value);
    if(usuarioEncontrado && contrasenhaEncontrada){
        alert("inicio de sesion")
    }else{
        alert("error en algun dato")
    }   
}