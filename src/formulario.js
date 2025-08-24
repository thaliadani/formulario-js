const botaoEnviar = document.querySelector("#enviar");
const nome = document.querySelector("#nome");
const senha = document.querySelector("#senha");

function enviarForm(event){
    event.preventDefault();
    console.log("Nome: " + nome.value);
    console.log("Senha: " + senha.value);
}

botaoEnviar.addEventListener("click", enviarForm);