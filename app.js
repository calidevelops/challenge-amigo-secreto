//array para almacenar los nombres
const lista_amigos = [];

const entrada_nombre = document.querySelector('.input-name');

//funcion para agregar amigos
function agregarAmigo() {
    const nombre = entrada_nombre.value.trim();

    if (nombre != '') {
        lista_amigos.push(nombre);
        entrada_nombre.value = '';
        actualizarListaAmigos();
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

const lista_amigos_elemento = document.querySelector('.name-list');

//funcion para actualizar lista de amigos
function actualizarListaAmigos() {
    limpiarLista(lista_amigos_elemento);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < lista_amigos.length; i++) {
        fragment.appendChild(agregarElementoAmigo(lista_amigos[i]));
    }

    lista_amigos_elemento.appendChild(fragment);
}

const lista_resultado_elemento = document.querySelector('.result-list');

//funcion para sortear amigos
function sortearAmigo() {
    limpiarLista(lista_resultado_elemento);
    const total_amigos = lista_amigos.length;

    if (total_amigos > 0) {
        const indice_aleatorio = Math.floor(Math.random() * total_amigos);
        const amigo_sorteado = lista_amigos[indice_aleatorio];
        lista_resultado_elemento.appendChild(agregarElementoAmigo(amigo_sorteado));
    }
}

//funcion para crear elemento amigo (li)
function agregarElementoAmigo(nombreAmigo) {
    const amigo_elemento = document.createElement('li');
    amigo_elemento.textContent = nombreAmigo;
    return amigo_elemento;
}

//funcion para limpiar lista
function limpiarLista(listaElemento) {
    listaElemento.innerHTML = "";
}
