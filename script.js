

console.log("PÁGINA ABERTA!")

async function executar() {
    // Pegar valores dos inputs
    const elementTitulo = document.getElementById("inputTitulo")
    const elementDescricao = document.getElementById("inputDescricao")

    const titulo = elementTitulo.value
    const descricao = elementDescricao.value

    const elementoE = document.getElementById("erro")
    if (titulo == "" || descricao == "") {
        elementoE.style.display = "block"

        return // Finaliza a função inteira
    }

    elementoE.style.display = "none"
    const elementoS = document.getElementById("sucesso")
    elementoS.style.display = "block"

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

    console.log("ANTES DO FETCH")

    const response = await fetch(url, fetchOptions)
    const data = await response.json()

    console.log(data)

    console.log("DEPOIS DO FETCH")

    // // Mostrar resultado abaixo do form
    const elementoResultado = document.getElementById("resultado")
    elementoResultado.innerHTML = data
    elementoResultado.style.display = "block"
}