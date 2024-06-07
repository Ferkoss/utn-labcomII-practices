const inputAgregarTareas = document.getElementById("new-task")
const botonAgregarTareas = document.getElementById("add-button")
const tareasHacer = document.getElementById("incomplete-tasks")
const listaCompletada = document.getElementById("completed-tasks")
let arrayDatos = []
const body = document.getElementById("body")


function carga() {
    
    
    if (localStorage.getItem("datos")) {
        let storage = localStorage.getItem("datos")
        console.log(storage)
        alert(storage)
        if (storage.trim() != "") {
            arrayDatos = storage.split(",");
            console.log(arrayDatos)
            
            if (arrayDatos.length > 0) {
                for ( var i=0;i<arrayDatos.length;i++) {
                    agregarTarea(arrayDatos[i]);
                    console.log(arrayDatos[i])
                }
               alert(arrayDatos.length)
            
            }
        }
    }
}






/*function cargaInicial() {
  let storage = localStorage.getItem(tareas);
  console.log(storage)
  if (storage != "" && storage != undefined) {
    array_tareas = storage.split(",");
    console.log(array_tareas)
    if (array_tareas.length > 0) {
      for (let i = 0; i < array_tareas.length; i++) {
        agregarTarea(array_tareas[i]);
      }
    }
  } */



function manejarStorage(key, value, op) {
    if (op == "I") {
        arrayDatos.push(value);
        localStorage.setItem(key, arrayDatos);
    }
}



botonAgregarTareas.addEventListener("click", agregarTarea = () => {
    let li = document.createElement("li")
    tareasHacer.appendChild(li)

    let check = document.createElement("input")
    check.type = "checkbox"
    li.appendChild(check)
    check.addEventListener("change", () => {

    })

    let label = document.createElement("label")
    li.appendChild(label)
    label.innerText = inputAgregarTareas.value

    let input = document.createElement("input")
    li.appendChild(input)
    input.style.display = "none"

    btn = document.createElement("button")
    li.appendChild(btn)
    btn.classList.add("edit")



    i = document.createElement("i")
    i.classList.add("fas", "fa-pen")
    btn.appendChild(i)
    i.addEventListener("click", () => {
        if (input.style.display == "none") {
            label.style.display = "none"
            input.style.display = "inline"
            input.value = label.innerText

        }
        else {
            label.style.display = "inline"
            input.style.display = "none"
            label.innerText = input.value
        }
    })


    btn2 = document.createElement("button")
    li.appendChild(btn2)
    btn2.classList.add("delete")

    i2 = document.createElement("i")
    btn2.appendChild(i2)
    i2.classList.add("fas", "fa-trash-alt")
    i2.addEventListener("click", (e) => {
        li.remove()

    })
    manejarStorage("datos", label.innerText, "I")





})

/*function manejarStorage(key, value, op) {
  if (op == "I") {
    array_tareas.push(value);
    localStorage.setItem(key, array_tareas);
  }
}
let array_tareas = [];
const tareas = "cosas para hacer";
function cargaInicial() {
  let storage = localStorage.getItem(tareas);
  console.log(storage)
  if (storage != "" && storage != undefined) {
    array_tareas = storage.split(",");
    console.log(array_tareas)
    if (array_tareas.length > 0) {
      for (let i = 0; i < array_tareas.length; i++) {
        agregarTarea(array_tareas[i]);
      }
    }
  }
} */






/*parentElement*/
/*li.innerHTML+='<button class="edit"><i class="fas fa-pen"></i></button><button class="delete"><i class="fas fa-trash-alt"></i></button>'
    input.placeholder=botonAgregarTareas.value */

/* <li>
    <input type="checkbox">
    <label>Pagar cuentas</label>
    <input type="text">
    <button class="edit">
    <i class="fas fa-pen"></i>
    </button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </li> */



/*<button class="edit">
    <i class="fas fa-pen"></i>
    </button>
    <button class="delete">
    <i class="fas fa-trash-alt">
    </i></button> */