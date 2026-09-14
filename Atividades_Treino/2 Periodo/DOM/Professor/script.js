const input = document.getElementById('inputTarefa')
const btnAdicionar = document.getElementById('btnAdicionar')
const lista = document.getElementById ('lista')

btnAdicionar.addEventListener("click",() => {
    const texto = input.ariaValueMax
    if(texto == ""){
        alert("Digite Uma Tarefa")
        return
    }
    const li = document.createElement('li')
    const span = document.createElement('span')
    const btnRemover = document.createElement("button")    
    span.textContent = texto
    btnRemover.textContent = "Remover"
})