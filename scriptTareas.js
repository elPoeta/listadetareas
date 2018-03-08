const tarea = document.querySelector('#tarea');
const filtrar = document.querySelector('#filtro');
const listaTareas = document.querySelector('.coleccion');
const agregarTareaBtn = document.querySelector('#tarea-form');
const limpiarTareasBtn = document.querySelector('.limpiar-tareas');

cargarEventos();

function cargarEventos() {

    agregarTareaBtn.addEventListener('submit', agregarTarea);
    listaTareas.addEventListener('click', eliminarTarea);
    limpiarTareasBtn.addEventListener('click', borrarTareas);
    filtrar.addEventListener('keyup', filtrarTarea);
}



function agregarTarea(e) {
    agregarLista();
    e.preventDefault();
}

function agregarLista() {
    const li = document.createElement('li');
    li.className = 'coleccion-item';
    li.appendChild(document.createTextNode(tarea.value));
    const link = document.createElement('a');
    link.className = 'borrar-item secondary-content';
    link.innerHTML = '<i class="tiny material-icons rojo">remove_circle</i>';
    li.appendChild(link);
    listaTareas.appendChild(li);
    tarea.value = '';
}

function eliminarTarea(e) {
    if (e.target.parentElement.classList.contains('borrar-item')) {
        if (confirm('Esta Seguro?')) {
            e.target.parentElement.parentElement.remove();
        }
    }

}

function filtrarTarea(e) {
    const texto = e.target.value.toLowerCase();
    document.querySelectorAll('.coleccion-item').forEach(function(tarea) {
        const item = tarea.firstChild.textContent;
        if (item.toLowerCase().indexOf(texto) != -1) {
            tarea.style.display = 'block';
        } else {
            tarea.style.display = 'none';
        }
    });
}

function borrarTareas(e) {
    while (listaTareas.firstChild) {
        listaTareas.removeChild(listaTareas.firstChild);
    }

}