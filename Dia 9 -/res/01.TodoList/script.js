// ========================================
// FUNCIONALIDAD DE AÑADIR TAREAS
// ========================================

//declaracion de constantes para leer los elementos
//principales de la aplicacion
const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("list");

//funcion para añadir una tarea
function addTask() {
  //raw es el valor de input (texto ingresado)
  const raw = input.value;
  //el texto se normaliza y luego se mostrara
  const text = normalizeText(raw);
  //si el texto es vacio, aparece una alerta
  if (!text) {
    alert("ingrese una tarea");
    return;
  }

  //si el input no está vacio, entonces se crea un li(lista)
  //donde se encontrarán las tareas
  const li = document.createElement("li");

  //se crea un “contenedor de texto” para la tarea nueva,
  //y se rellena con lo que el usuario escribe
  //para luego poder añadirlo al <li> que representa la tarea
  //completa en tu lista.
  const span = document.createElement("span");
  span.textContent = text;

  /**
   * deleteButton
   * */

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.style.marginLeft = "10px";
  deleteButton.style.backgroundColor = "red";
  deleteButton.addEventListener("click", () => li.remove());

  /**
   * completeButton
   * */

  const completeButton = document.createElement("button");
  completeButton.textContent = "Marcar como Completado";
  completeButton.style.marginLeft = "10px";
  completeButton.style.backgroundColor = "green";
  //llamamos a la funcion de tarea completada
  completeButton.addEventListener("click", () => taskCompleted(li));

  //ahora agregamos el li y span a traves de un childappend
  //para que se visualice en el DOM
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  list.appendChild(li);

  input.value = "";
  input.focus();
}

//eventListener para añadir una tarea
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

//eventListener para añadir tarea con click
add.addEventListener("click", addTask);

// ================================================
// FUNCIONALIDAD 2 (PRUEBAS DIA 1 13/08) & (14/08)
// ================================================

//funcion para normalizar textos
function normalizeText(text) {
  //si el tipo de texto no es string, retorna null
  if (typeof text !== "string") return null;
  //de lo contrario, trim se encarga de limpiar los espacios y normaliza el texto
  const normalized = text.trim();
  // si está vacío después de normalizar, devolvemos null para indicar "inválido"
  if (normalized === "") return null;

  // texto válido: lo devolvemos ya normalizado
  return normalized;
}

//funcion para verificar que un texto esta vacio
function isEmptyText(text) {
  //usa la funcion de normalizeText para ver si el texto está vacio
  const normalizeText = normalizeText(text);
  //retornamos null para indicar si es invalido
  // true = está vacío / inválido, false = tiene contenido
  return normalized === null;
}

//funcion para marcar tarea como completada
function taskCompleted(liElement) {
  //si no se encuentra el liElement, entonces, se vuelve a verificar
  if (!liElement) return;

  //creamos un span para seleccionarlo con un querySelector, igualmente
  //si no se encuentra, se vuelve a verificar
  const span = liElement.querySelector("span");
  if (!span) return;

  //creamos una constante para definir cuando una tarea está completada
  const completed = span.classList.toggle("completado");

  //actuaizacion de datased (estado completado)
  liElement.dataset.completed = completed ? "true" : "false";

  //actualizar boton dentro del li (que ya existe)
  const completeButton = liElement.querySelector(".completeButton");
  if (completeButton) {
    //si el boton existe y esta completado, entonces se muestra un mensaje
    completeButton.textContent = completed
      ? "Desmarcar"
      : "Marcar como Completado";
    completeButton.setAttribute("aria-pressed", String(completed));
  }
}

// ================================================
// FUNCIONALIDAD 3 (PRUEBAS DIA 2 14/08)
// ================================================

/**
 * LOCAL STORAGE
 * */

function saveTasks() {}

function loadTasks() {}
