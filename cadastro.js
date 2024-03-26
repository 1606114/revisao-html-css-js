

console.log("PÁGINA DE CADASTRO ABERTA!")

// REFATORAÇÃO -> mudar o nosso codigo para melhor

async function executar() {
    limparTela()

    const titulo = pegarValorTextual("inputTitulo")
    const descricao = pegarValorTextual("inputDescricao")

    if (titulo == "" || descricao == "") {
        mostrarErro()
        return
    }

    const elementoS = document.getElementById("sucesso")
    elementoS.style.display = "block"

    // Fazer chamada para cadastrar livro
    const data = await chamadaDeApi()

    // // Mostrar resultado abaixo do form
    const elementoResultado = document.getElementById("resultado")
    elementoResultado.innerHTML = data
    elementoResultado.style.display = "block"
}

async function chamadaDeApi() {
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

    const response = await fetch(url, fetchOptions)
    const data = await response.json()

    return data
}

function limparTela() { // função
    const elementoErro = document.getElementById("erro")
    elementoErro.style.display = "none"

    const elementoSucesso = document.getElementById("sucesso")
    elementoSucesso.style.display = "none"

    const elementoResultado = document.getElementById("resultado")
    elementoResultado.style.display = "none"
}

function pegarValorTextual(idDoInput) {
    const elemento = document.getElementById(idDoInput)
    const valor = elemento.value

    return valor
}

function mostrarErro() {
    const elemento = document.getElementById("erro")
    elemento.style.display = "block"
}