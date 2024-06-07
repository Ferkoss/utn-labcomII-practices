const progreso=document.getElementById("progreso")
const BTNcalc=document.getElementById("calc")
const resultado=document.getElementById("result")

const uno=document.getElementById("uno")
const  dos=document.getElementById("dos")
const  tres=document.getElementById("tres")
const  cuatro=document.getElementById("cuatro")
const  cinco=document.getElementById("cinco")
const  seis=document.getElementById("seis")
const  siete=document.getElementById("siete")
const  ocho=document.getElementById("ocho")
const  nueve =document.getElementById("nueve")
const  cero =document.getElementById("cero")
const mas=document.getElementById("mas")
const menos=document.getElementById("menos")
const por=document.getElementById("por")
const dividir=document.getElementById("dividir")
const del=document.getElementById("del")

let valorA=""
let valorB=""
let banderaOperador=false
let operador=true
function progresar(a){
    progreso.innerHTML+=a
    if(!banderaOperador)
        {
            valorA+=a
        }
    else{
            valorB+=a
        }
}

function operadores(operad){
            progreso.innerHTML+=operad
            operador=operad
            banderaOperador=true
}


uno.addEventListener("click",()=>{progresar(uno.value)})
dos.addEventListener("click",()=>{progresar(dos.value)})
tres.addEventListener("click",()=>{progresar(tres.value)})
cuatro.addEventListener("click",()=>{progresar(cuatro.value)})
cinco.addEventListener("click",()=>{progresar(cinco.value)})
seis.addEventListener("click",()=>{progresar(seis.value)})
siete.addEventListener("click",()=>{progresar(siete.value)})
ocho.addEventListener("click",()=>{progresar(ocho.value)})
nueve.addEventListener("click",()=>{progresar(nueve.value)})
cero.addEventListener("click",()=>{progresar(cero.value)})
mas.addEventListener("click",()=>{operadores(mas.value)})
menos.addEventListener("click",()=>{operadores(menos.value)})
por.addEventListener("click",()=>{operadores(por.value)})
dividir.addEventListener("click",()=>{operadores(dividir.value)})




del.addEventListener("click",()=>{
    progreso.innerHTML=""
    valorA=""
    valorB=""
    banderaOperador=false
    operador=true
})



BTNcalc.addEventListener("click",()=>{
    let resultadoFinal=0
    alert(operador)
    alert(valorA)
    alert(valorB)
    switch(operador){
        case "+":
            resultadoFinal=Number(valorA)+Number(valorB)
        break
        case "-":
            resultadoFinal=Number(valorA)-Number(valorB)
        break
        case "*":
            resultadoFinal=Number(valorA)*Number(valorB)
        break
        case "%":
            resultadoFinal=Number(valorA)/Number(valorB)
        break
        default:alert("error")
        
    }
    resultado.innerText=resultadoFinal
})


progreso.innerHTML+=num
