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

function obtenerListaUsuario(){
    let clientes = JSON.parse(localStorage.getItem("clientes"))
    if(clientes==null){
        clientes = [
            [1, "ivar", 123456, "ivar.m.dacrema@lalalan.com", 2634212121]
        ]
    }
    return clientes;
}