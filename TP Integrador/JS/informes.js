const tablaDatos = document.getElementById("cont-datos-tabla")
const seleccionMoneda = document.getElementById("seleccion-moneda")
console.log(tablaDatos)
const colores = ["black", "blue", "green", "red", "gold", "orange", "brown", "chocolate", "blueviolet", "slateblue", "goldenrod"]
let objDatasets = []
let arrayDatos = []
let monedas = []


function recarga() {
    if (localStorage.getItem("datos")) {


        for (let dato of localStorage.getItem("datos").split(",")) {
            arrayDatos.push(dato.split("/"))
        }

        console.log(arrayDatos)
        console.log(unificarDatos(0))
        console.log(ordenarNombresAlfabeticamente(unificarDatos(0)))
        monedas = ordenarNombresAlfabeticamente(unificarDatos(0))
        escribirDatos()
    }

    grafico()
}

function unificarDatos(numDato) {
    let datoUnificado = []
    for (let dato of arrayDatos) {

        if (!(datoUnificado.includes(dato[numDato]))) {
            datoUnificado.push(dato[numDato])
        }
    }
    return datoUnificado
}



function ordenarNombresAlfabeticamente(nombres) {
    let nombreMayor
    let aux = nombres
    let nombresOrdenados = []
    for (let i = 0; i < nombres.length; i++) {
        nombreMayor = aux[0]
        for (let nombre of aux) {
            if (nombre > nombreMayor) {
                nombreMayor = nombre
            }
        }
        nombresOrdenados.unshift(nombreMayor) //es como el push pero lo agrega al principio
        aux = eliminarElemento(aux, nombreMayor)
    }
    return nombresOrdenados
}






function escribirDatos() {
    for (let moneda of monedas) {
        let divMoneda = document.createElement("div")
        divMoneda.classList.add("moneda")
        divMoneda.innerHTML = `<p>${moneda}</p>`
        tablaDatos.appendChild(divMoneda)
        divMoneda.setAttribute("data-moneda", moneda)

        let divVacio = document.createElement("div")
        divVacio.classList.add("datos")
        tablaDatos.appendChild(divVacio)
        divVacio.setAttribute("data-moneda", moneda)

        let divFecha = document.createElement("div")
        divFecha.classList.add("datos")
        tablaDatos.appendChild(divFecha)
        divFecha.setAttribute("data-moneda", moneda)

        let divCompra = document.createElement("div")
        divCompra.classList.add("datos")
        tablaDatos.appendChild(divCompra)
        divCompra.setAttribute("data-moneda", moneda)

        let divVenta = document.createElement("div")
        divVenta.classList.add("datos")
        tablaDatos.appendChild(divVenta)
        divVenta.setAttribute("data-moneda", moneda)

        let divIcono = document.createElement("div")
        divIcono.classList.add("datos")
        tablaDatos.appendChild(divIcono)
        divIcono.setAttribute("data-moneda", moneda)

        let monedaAnterior = null

        for (let datos of arrayDatos) {



            if (moneda == datos[0]) {


                divFecha.innerHTML += `<p>${datos[3]}</p>`
                divCompra.innerHTML += `<p>$${datos[1]}</p>`
                divVenta.innerHTML += `<p>$${datos[2]}</p>`

                icono = document.createElement("i")
                if (monedaAnterior) {
                    if (Number(datos[2]) > Number(monedaAnterior)) {
                        icono.classList.add("fa-solid", "fa-circle-up")
                        icono.style.color = "green"
                    }
                    else if (Number(datos[2]) < Number(monedaAnterior)) {
                        icono.classList.add("fa-regular", "fa-circle-down")
                        icono.style.color = "red"
                    }
                    else {
                        icono.classList.add("fa-solid", "fa-equals")
                    }

                }
                else {
                    icono.classList.add("fa-solid", "fa-equals")
                }

                divIcono.appendChild(icono)

                monedaAnterior = datos[2]

            }
        }

    }
}


function grafico() {
    /****************************************************************************/
    /*Gráfica con varias líneas*/
    //Axis X
    const etiquetas = ordenarFechas(unificarFechas());


    //Datos
    let asignarNull = true
    let arrayDataset = []
    for (let moneda of monedas) {
        let nuevoArrayData = [moneda]

        for (let fecha of etiquetas) {


            for (let dato of arrayDatos) {



                if (dato[0] == moneda && dato[3] == fecha) {
                    nuevoArrayData.push(dato[2])
                    asignarNull = false

                }


                /*else if (dato[3]!=fecha && dato[0] == moneda ) {
                    nuevoArrayData.push(null)
                }*/
            }

            if (asignarNull) {
                nuevoArrayData.push(null)
            }
            asignarNull = true
        }

        arrayDataset.push(nuevoArrayData)
    }

    console.log(arrayDataset)

    let ctx = document.getElementById("miGrafica").getContext("2d");


    let cont = 0
    for (let dataSet of arrayDataset) {

        objDatasets.push(

            {
                label: dataSet[0],
                data: dataSet.slice(1),
                borderColor: colores[cont],
                fill: false

            }
        )
        cont += 1
    }

    datosGrafico = new Chart(ctx, {
        type: "line",
        data: {
            labels: etiquetas,
            datasets: objDatasets
        }
    });
}









seleccionMoneda.addEventListener("change", () => {

    for (let moneda of document.querySelectorAll(".datos, .moneda")) {

        if (seleccionMoneda.value == moneda.getAttribute("data-moneda") || seleccionMoneda.value == "todas") {
            moneda.style.display = "flex"
        }
        else {
            moneda.style.display = "none"
        }


        for (let dataset of objDatasets) {
            if (dataset.label == seleccionMoneda.value) {
                datosGrafico.data.datasets = [dataset]
                
            }
            
        }
        if(seleccionMoneda.value == "todas"){
            datosGrafico.data.datasets=objDatasets
        }
    }






    datosGrafico.data.datasets

})









/*{
label: "Euro",
data: datosLinea3,
borderColor: "red",
fill: false
} */


/*//Porción de código que se repite por cada ítem que se requiere dibujar
{ //Ejemplo de gráfica con relleno
label: "Dolar Blue",
data: datosLinea1,
borderColor: "rgba(54, 162, 235, 1)",
backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
borderWidth: 1,
fill: true
},
{
label: "Dolar Oficial",
data: datosLinea2,
borderColor: "green",
borderWidth: 1,
fill: false
},
{
label: "Euro",
data: datosLinea3,
borderColor: "red",
fill: false
} */



//USD Dolar Oficial/890.5/930.5/2024-06-28,USD bolsa/1338.5/1348.6/2024-06-29,USD tarjeta/1424.8/1488.8/2024-06-28,USD cripto/1358/1410/2024-06-29,USD mayorista/888.72/928.64/2024-06-29,USD contadoconliqui/1347/1349.8/2024-06-29,USD blue/1345/1365/2024-06-29,EUR Euro Oficial/975.95/977.39/2024-06-29,BRL Real Brasileño/162.85/163.06/2024-06-29,CLP Peso Chileno/96.79/96.97/2024-06-29,UYU Peso Uruguayo/23.09/23.14/2024-06-29,USD Dolar Oficial/890.5/930.5/2024-06-30,USD Dolar Oficial/890.5/1000/2024-05-31


/*<i class="fa-solid fa-equals"></i>*/
/*<div class="moneda">
                        <p>Dolar Blue</p>
                    </div>
                    <div class="datos"></div>
                    <div class="datos">
                        <p>15/04/2024</p>
                        <p>15/04/2024</p>
                        <p>15/04/2024</p>
                        <p>15/04/2024</p>
                        <p>15/04/2024</p>
                    </div>
                    <div class="datos">
                        <p>$10000000</p>
                        <p>$10000000</p>
                        <p>$10000000</p>
                        <p>$10000000</p>
                        <p>$10000000</p>
                    </div>
                    <div class="datos">
                        <p>$10000000</p>
                        <p>$10000000</p>
                        <p>$10000000</p>
                        <p>$10000000</p>
                        <p>$10000000</p></div>
                    <div class="datos">
                        <i class="fa-solid fa-circle-up"></i>
                        <i class="fa-regular fa-circle-down"></i>
                        <i class="fa-solid fa-circle-up"></i>
                        <i class="fa-regular fa-circle-down"></i>
                        <i class="fa-solid fa-circle-up"></i>
                        
                    </div>*/