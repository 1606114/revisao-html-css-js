

console.log("PÁGINA ABERTA!")

function executar() {

    // Pegar valores dos inputs
    const inputTitulo = document.getElementById("inputTitulo")
    const inputDescricao = document.getElementById("inputDescricao")

    const titulo = inputTitulo.value
    const descricao = inputDescricao.value

    // Fazer chamada para cadastrar livro
    const url = "https://api-aula.up.railway.app/livros"
    const payload = {
        title: titulo,
        description: descricao
    }

    const fetchOptions = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(url, fetchOptions)

    // Mostrar resultado abaixo do form
    const elementoS = document.getElementById("sucesso")
    elementoS.style.display = "block"

    const elementoE = document.getElementById("erro")
    elementoE.style.display = "block"
}