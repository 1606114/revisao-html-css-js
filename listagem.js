
console.log("PÁGINA DE LISTAGEM ABERTA!")

async function executar() {
    const livros = await buscarLivrosEmAPI()
    // 2 - Mostrar estes livros na tela
    mostrarLivrosNaTela(livros)
}

async function buscarLivrosEmAPI() {
    const response = await fetch("https://api-aula.up.railway.app/livros")
    const livros = await response.json()

    return livros
}

function mostrarLivrosNaTela(parametrosLivros) {
    const divResultados = document.getElementById("resultado")

    let livrosEmTexto = ""

    for (let contador = 0; contador < parametrosLivros.length; contador++) {
        livrosEmTexto += `
            <div class="livro">
                <p>ID: ${parametrosLivros[contador].id}</p>
                <p>Título: ${parametrosLivros[contador].title}</p>
                <p>Descrição: ${parametrosLivros[contador].description}</p>
            </div>
        `
    }

    divResultados.innerHTML = livrosEmTexto
}
