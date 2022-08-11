
const sendForm = () =>{
  let namelValue = document.getElementById("name").value;
  let phoneValue = document.getElementById("phone").value;
  let emailValue = document.getElementById("email").value;
  let messageValue = document.getElementById("message").value;

  let selectedContact = document.querySelector('input[name="contact"]:checked');
    if(!selectedContact){
        alert('Por favor seleccione una opcion de contacto');
    };

  console.log(`${namelValue}, ${phoneValue}, ${emailValue}, ${messageValue}, ${selectedContact.value}`) ;
  form.reset();
}
