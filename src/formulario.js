function validarFormulario(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let mensagem = document.getElementById('mensagem');

    if (nome === "" && senha === "" && email === "") {
        mensagem.innerHTML = "Preencha todos os campos";
        mensagem.classList.add('erro');
        return false;
    }else if (nome === ""){
        mensagem.innerHTML = "Preencha o campo nome";
        mensagem.classList.add('erro');
        return false;
    }else if (senha === ""){
        mensagem.innerHTML = "Preencha o campo senha";
        mensagem.classList.add('erro');
        return false;
    }else if(email === ""){
        mensagem.innerHTML = "Preencha o campo email";
        mensagem.classList.add('erro');
        return false;
    }else{
        mensagem.innerHTML = "Login efetuado com sucesso";
        mensagem.classList.remove('erro');
        mensagem.style.color = "#0b6e07";
        return true;
    };
};