
# JavaScript DOM Cheatsheet

Este cheatsheet cubre las funciones principales de JavaScript para manipular el DOM, usando un caso práctico de un TODO LIST.

## 1. Selección de Elementos

### `document.getElementById(id)`
Selecciona un elemento por su `id`.

```javascript
const addButton = document.getElementById("addButton");
```

### `document.getElementsByClassName(className)`
Selecciona elementos por su clase.

```javascript
const listItems = document.getElementsByClassName("todo-item");
```

### `document.getElementsByTagName(tagName)`
Selecciona elementos por su nombre de etiqueta.

```javascript
const allButtons = document.getElementsByTagName("button");
```

### `document.querySelector(selector)`
Selecciona el primer elemento que coincide con el selector CSS.

```javascript
const todoList = document.querySelector(".todo-list");
```

### `document.querySelectorAll(selector)`
Selecciona todos los elementos que coinciden con el selector CSS.

```javascript
const allTodos = document.querySelectorAll(".todo-item");
```

## 2. Manipulación de Contenido

### `element.innerHTML`
Obtiene o establece el contenido HTML de un elemento.

```javascript
todoList.innerHTML = "<li>Nuevo Todo</li>";
```

### `element.textContent`
Obtiene o establece el contenido de texto de un elemento.

```javascript
todoList.textContent = "Mis pendientes";
```

### `element.setAttribute(attribute, value)`
Establece un valor para un atributo específico de un elemento.

```javascript
addButton.setAttribute("disabled", "true");
```

### `element.getAttribute(attribute)`
Obtiene el valor de un atributo específico de un elemento.

```javascript
const buttonType = addButton.getAttribute("type");
```

## 3. Manipulación de Estilos

### `element.style.property`
Modifica el estilo en línea de un elemento.

```javascript
todoList.style.backgroundColor = "#f0f0f0";
```

### `element.classList.add(className)`
Agrega una clase a un elemento.

```javascript
todoList.classList.add("active");
```

### `element.classList.remove(className)`
Elimina una clase de un elemento.

```javascript
todoList.classList.remove("active");
```

### `element.classList.toggle(className)`
Alterna la clase (si está, la elimina; si no está, la agrega).

```javascript
todoList.classList.toggle("highlight");
```

## 4. Creación y Eliminación de Elementos

### `document.createElement(tagName)`
Crea un nuevo elemento HTML.

```javascript
const newTodo = document.createElement("li");
newTodo.textContent = "Nuevo Todo";
```

### `parentElement.appendChild(childElement)`
Agrega un hijo al final de un elemento padre.

```javascript
todoList.appendChild(newTodo);
```

### `parentElement.insertBefore(newElement, referenceElement)`
Inserta un nuevo elemento antes de un elemento de referencia en el padre.

```javascript
todoList.insertBefore(newTodo, todoList.children[0]);
```

### `element.remove()`
Elimina un elemento del DOM.

```javascript
newTodo.remove();
```

### `element.removeChild(childElement)`
Elimina un hijo de un elemento específico.

```javascript
todoList.removeChild(newTodo);
```

## 5. Eventos

### `element.addEventListener(event, function)`
Asocia una función a un evento específico de un elemento.

```javascript
addButton.addEventListener("click", function() {
    const newTodo = document.createElement("li");
    newTodo.textContent = "Nuevo Todo";
    todoList.appendChild(newTodo);
});
```

### `element.removeEventListener(event, function)`
Elimina un controlador de eventos de un elemento.

```javascript
addButton.removeEventListener("click", myClickHandler);
```

## 6. Navegación del DOM

### `element.parentNode`
Obtiene el nodo padre de un elemento.

```javascript
const parent = newTodo.parentNode;
```

### `element.children`
Obtiene una colección de todos los elementos hijos de un elemento.

```javascript
const children = todoList.children;
```

### `element.firstChild`
Obtiene el primer nodo hijo de un elemento.

```javascript
const firstChild = todoList.firstChild;
```

### `element.lastChild`
Obtiene el último nodo hijo de un elemento.

```javascript
const lastChild = todoList.lastChild;
```

## 7. Manejo de Formularios

### `form.submit()`
Envía un formulario.

```javascript
form.submit();
```

### `form.reset()`
Restablece un formulario a sus valores iniciales.

```javascript
form.reset();
```

### `form.elements`
Obtiene todos los elementos dentro de un formulario.

```javascript
const formElements = form.elements;
```

## 8. Manipulación de Clases

### `element.classList.contains(className)`
Verifica si un elemento tiene una clase específica.

```javascript
if (todoList.classList.contains("highlight")) {
    console.log("Tiene la clase");
}
```

### `element.classList.replace(oldClass, newClass)`
Reemplaza una clase por otra en un elemento.

```javascript
todoList.classList.replace("active", "inactive");
```

## 9. Animaciones y Transiciones

### `element.animate(keyframes, options)`
Realiza una animación en un elemento.

```javascript
todoList.animate([
  { transform: 'scale(1)' },
  { transform: 'scale(1.1)' },
  { transform: 'scale(1)' }
], {
  duration: 300,
  iterations: 1
});
```

### `element.style.transition`
Aplica transiciones de CSS en los estilos de un elemento.

```javascript
todoList.style.transition = "background-color 0.5s ease";
```

## 10. Cookies y Almacenamiento

### `document.cookie`
Obtiene o establece cookies en el navegador.

```javascript
document.cookie = "todoListCompleted=true";
```

### `localStorage.setItem(key, value)`
Guarda un valor en el almacenamiento local.

```javascript
localStorage.setItem("todos", JSON.stringify(todosArray));
```

### `localStorage.getItem(key)`
Recupera un valor del almacenamiento local.

```javascript
const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
```

## 11. Acceso al DOM de un iFrame

### `iframe.contentDocument`
Accede al documento dentro de un `<iframe>`.

```javascript
const iframeContent = iframe.contentDocument;
```
