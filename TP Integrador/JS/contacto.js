const btn = document.getElementById('button');
const limpiar=document.getElementById("limpiar")
const nombre=document.getElementById("from_name")
const mail=document.getElementById("email_id")
const mensaje=document.getElementById("message")




document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_l0x5k8k';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});








limpiar.addEventListener("click",()=>{
    nombre.value=""
    mail.value=""
    mensaje.value=""
})