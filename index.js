//Declaração de variáveis

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const errorNodes = document.querySelectorAll(".error");
const message = document.querySelector("#experience");

//Validação de dados

function validateForm() {
  clearMessages();

  let sucess = document.querySelector(".form");
  let errorFlag = false;
  //Exibir erro se nome não for preenchido
  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Please, write  your  name";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }
  //Exibir erro se nome email for invalido
  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Format  invalid for email addres";
    email.classList.add("error-border");
    errorFlag = true;
  }
  //Exibir erro se textarea não for preenchido
  if (message.value.length < 1) {
    errorNodes[2].innerText = "Please write a message";
    message.classList.add("error-border");
    message.classList.add("error-message");
    errorFlag = true;
  }
  //Exibir saudação de sucesso quando não houverem erros
  if (!errorFlag) {
    sucess.innerHTML = "We receive your message! We will get back to you soon!";
    sucess.classList.add("form-center");
    concluido.classList.add("button-margin");
  }
}

//Limpar a mensagem de erro

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

//Validação de formato de email

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
