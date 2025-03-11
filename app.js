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

    } else {
        alert('Por favor, inserte un nombre.');
    }
}
