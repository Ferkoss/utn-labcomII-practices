const inpNombre=document.getElementById("nombre")
const inpContra=document.getElementById("contra")
const selectGenero=document.getElementById("select-genero")
const verContra=document.getElementById("verContra")
const login=document.getElementById("login")
const cont=document.getElementById("conteiner")
const final=document.getElementById("final")
const finIntentos=document.getElementById("finIntentos")
const tiempo=document.getElementById("tiempo")
let intentos=3






verContra.addEventListener("click",()=>{
    if(inpContra.type=="password")
        {
            inpContra.type="text"
        }
    else{
        inpContra.type="password" 
    }
})


login.addEventListener("click",()=>{
    if(validaciones()){
        
        intentos--
        if(intentos==0){
            let colorCont=cont.style.backgroundColor
            cont.style.backgroundColor="transparent"
            final.style.display="none"
            finIntentos.style.display="flex"
            tiempo.innerText="10"
            temporizador=setInterval(()=>{
                let tiemp =Number(tiempo.innerText)
                tiemp--
                tiempo.innerText=tiemp


                if(tiemp==0){
                cont.style.backgroundColor=colorCont
                clearInterval((temporizador))
                finIntentos.style.display="none"
                intentos=3
                }
            },1000)
            
        }

        else{
            
            final.style.display="block"
            final.setAttribute("class","error")
            final.innerHTML="Ingrese los datos Correctamente"
        }
        
    }
    else{
        final.style.display="block"
        final.setAttribute("class","bien")
        final.innerHTML="Bienvenido "+inpNombre.value
        
    }
})



selectGenero.addEventListener("change",()=>{
    cont.style.backgroundColor=selectGenero.value
})



function validaciones(){
    let error=false
    if(inpNombre.value==""){
        error=true
        
    }
    if(inpContra.value==""){
        error=true
    }
    if(selectGenero.value==""){
        error=true
    }
    
    return error
}