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

function mostrarPop(mensaje){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    })
}

let clientes = []

const cargarClientes = async () => {
    const response = await fetch(`../clientes.json`)
    const data = await response.json()
    for (let cliente of data){
        let clienteNuevo = new Cliente(cliente.id, cliente.usuario, cliente.contrasenha, cliente.email, cliente.telefono)
        clientes.push(clienteNuevo)
    }
}

cargarClientes();

clientes = localStorage.getItem(`clientes`) ? JSON.parse(localStorage.getItem(`clientes`)) : localStorage.setItem(`clientes`, JSON.stringify(clientes))

let botonRegistro = document.getElementById("botonRegistro")
botonRegistro.addEventListener("click", ()=>{
    crearCliente(clientes)
})

function crearCliente(clientes){
    let usuario = document.getElementById("usuarioInput");
    let contrasenha = document.getElementById("contrasenhaInput");
    let emailInput = document.getElementById("emailInput")
    let telefonoInput = document.getElementById("telefonoInput")
    //control de que las casillas no esten vacias
    if(usuario.value==="" ? true : false || contrasenha.value==="" ? true : false || emailInput.value==="" ? true : false || telefonoInput.value==="" ? true : false){
        alert("datos vacios")
    //corrobora que el numero de telefono sean numeros
    }else if(isNaN(parseInt(telefonoInput.value)) ? true : false){
        let errorTelefono = document.getElementById("avisoTelefono")
        errorTelefono.innerText.remove
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
        mostrarPop('USUARIO CREADO CORRECTAMENTE');
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
        mostrarPop(`INICIO DE SESION SATISFACTORIO`)
        ingresoUsuario.value = ""
        ingresoContrasenha.value = ""
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'NO FUE POSIBLE INICIAR SESION'
        })
    }   
}