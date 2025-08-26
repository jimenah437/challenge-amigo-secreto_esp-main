// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == '') {
        alert("Por favor, inserte un nombre.");
    }
    else {
        amigos.push(amigo)
    }
    // Restablecer el campo de texto a cadena vacia
    document.querySelector('#amigo').value = '';
    mostrarAmigo();
}

function mostrarAmigo() {
    listaAmigos.innerHTML = '';
    for (var amigo of amigos) {
        var li = document.createElement("li");
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(amigo));
        document.querySelector("#listaAmigos").appendChild(li).appendChild(p);
    }
}

function sortearAmigo() {
    let cantidad = amigos.length;
    if (cantidad < 1) alert("No hay amigos para sortear.");
    let indice = Math.floor(Math.random() * cantidad)
    let seleccionado = amigos[indice]
    resultado.innerHTML = '';
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(seleccionado));
    document.querySelector("#resultado").appendChild(li).appendChild(p);
}

