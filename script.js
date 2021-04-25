var btn_nome = document.querySelector("#btn_nome")
btn_nome.addEventListener("click", registrarNome)

function registrarNome () {
    var nome = document.querySelector("#nome").value
    nomeRegistrado.innerHTML = `<p>Seja bem-vindo(a), <strong>${nome}</strong>!</p>`
    document.querySelector("#nome").value = ""
}

