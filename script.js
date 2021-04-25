var btn_nome = document.querySelector("#btn_nome")
btn_nome.addEventListener("click", registrarNome)

function registrarNome() {
    var nome = document.querySelector("#nome").value

    nomeRegistrado.innerHTML = `<p>Seja bem-vindo(a), <strong>${nome}</strong>!</p>`

    document.querySelector("#nome").value = ""
}

var btn_idade = document.querySelector("#btn_idade")
btn_idade.addEventListener("click", registrarIdade)

function registrarIdade() {
    var idade = document.querySelector("#idade").value

    idadeRegistrada.innerHTML = `<p>Você tem, <strong>${idade}</strong> anos !</p>`

    document.querySelector("#idade").value = ""
}