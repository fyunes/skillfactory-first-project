/* ****************** FORM VALIDATIONS *******************/
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input:not([type="radio"])');

const rexp = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/
}

const fieldsFalseTrue = {
	name: false,
	email: false,
	phone: false,
}

const formValidate = (event) => {
	switch (event.target.name) {
		case "name":
			validateField(rexp.name, event.target, 'name');
		break;
		case "email":
			validateField(rexp.email, event.target, 'email');
		break;
		case "phone":
			validateField(rexp.phone, event.target, 'phone');
		break;
	}
}

const validateField = (expression, input, area) => {
	if(expression.test(input.value)){
		document.getElementById(`field-${area}`).classList.remove('container-form-incorrect');
		document.getElementById(`field-${area}`).classList.add('container-form-correct');
		document.querySelector(`#field-${area} i`).classList.add('fa-check-circle');
		document.querySelector(`#field-${area} i`).classList.remove('fa-times-circle');
		document.querySelector(`#field-${area} .input-error`).classList.remove('input-error-active');
		fieldsFalseTrue[area] = true;
	} else {
		document.getElementById(`field-${area}`).classList.add('container-form-incorrect');
		document.getElementById(`field-${area}`).classList.remove('container-form-correct');
		document.querySelector(`#field-${area} i`).classList.add('fa-times-circle');
		document.querySelector(`#field-${area} i`).classList.remove('fa-check-circle');
		document.querySelector(`#field-${area} .input-error`).classList.add('input-error-active');
		fieldsFalseTrue[area] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', formValidate);
	input.addEventListener('blur', formValidate);
});

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if(fieldsFalseTrue.name && fieldsFalseTrue.email && fieldsFalseTrue.phone){
		form.reset();

		document.getElementById('success-message-form').classList.add('success-message-form-active');
		setTimeout(() => {
			document.getElementById('success-message-form').classList.remove('success-message-form-active');
		}, 4000);

		document.querySelectorAll('.container-form-correct').forEach((icon) => {
			icon.classList.remove('container-form-correct');
		});
	} else {
		document.getElementById('empty-message-form').classList.add('empty-message-form-active');
    setTimeout(() => {
			document.getElementById('empty-message-form').classList.remove('empty-message-form-active');
		}, 4000);
	}
});

/* ****************** MESSAGE IN THE DOM *******************/

const sendForm = () =>{
  let nameValue = document.getElementById("name").value;
  let phoneValue = document.getElementById("phone").value;
  let emailValue = document.getElementById("email").value;
  let messageValue = document.getElementById("message").value;
  let selectedContact = document.querySelector('input[name="contact"]:checked');

  console.log(`Message sent by: "${nameValue}"`);
  console.log(`Phone: " ${phoneValue} "`);
  console.log(`Email: " ${emailValue} "`);
  console.log(`Message: " ${messageValue} "`);
  console.log(`Contact through: "${selectedContact.value}"`)
  /* form.reset(); // Reset form in validation js code*/

  let body = ``;
  body += `
    <div class="portal-img">
      <img class="portal-img" src="../assets/icons/pngfind.png">
    </div> 
    <img class="img-title" src="../assets/icons/message.png" alt="Image title message received ">
    <div class="background-mssg">
      <h3 class="text-dimension"> From: Dimensión C-137</h3>
      <div id="text-form">
        <p class = "label-message">Message sent by:</p>
        <p class = "text-message">${nameValue}</p>
        <p class = "label-message">Phone:</p>
        <p class = "text-message">${phoneValue}</p>
        <p class = "label-message">Email:</p>
        <p class = "text-message">${emailValue}</p>
        <p class = "label-message">Message:</p>
        <p class = "text-message">${messageValue}</p>
        <p class = "label-message">Contact through:
        <p class = "text-message">${selectedContact.value}</p>
    </div>
  `;
  document.getElementById('message-area').classList.add('message-area-active');
  document.getElementById("received-message").innerHTML = body;
};