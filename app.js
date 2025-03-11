//array para almacenar los nombres
const lista_amigos = [];

const entrada_nombre = document.querySelector('.input-name');

//funcion agregar amigos
function agregarAmigo() {
    const nombre = entrada_nombre.value.trim();
    if (nombre != '') {
        lista_amigos.push(nombre);
        entrada_nombre.value = '';
        console.log(lista_amigos);
        actualizarListaAmigos();

    } else {
        alert('Por favor, inserte un nombre.');
    }
}


const lista_amigos_elemento = document.querySelector('.name-list');

//funcion para actualizar lista de amigos
function actualizarListaAmigos() {
    lista_amigos_elemento.innerHTML = "";

    for (let i = 0; i < lista_amigos.length; i++) {
        const amigo_elemento = document.createElement('li');
        amigo_elemento.textContent = lista_amigos[i];
        lista_amigos_elemento.appendChild(amigo_elemento);
    }
}