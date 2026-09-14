const titulo = document.querySelector('#titulo')
const botao = document.querySelector('.Adicionar')
const input = document.querySelector('.input_moderno')
const remover = document.querySelector('.Remover')
titulo.textContent = "EuSouDylan"
botao.style.color = "black"
botao.style.fontSize = "30px"
remover.style.color = "black"
remover.style.fontSize = "30px"
input.style.fontSize = "30px"
botao.addEventListener("click", () => {
    const Texto = document.createElement('p')
    Texto.textContent = input.value
    Texto.style.color = "black"
    Texto.style.padding = "5px"
    Texto.style.border = "2px solid black"
    Texto.style.width = "100px"
    botao.style.backgroundColor = "green"
    if(Texto.textContent == ""){
        alert("ESCREVE ALGUMA COISA")
    }
    else{
        document.body.appendChild(Texto)
    }
    remover.addEventListener("click", () => {
    Texto.remove()
    remover.style.backgroundColor = "green"
        setTimeout(() => {
        remover.style.backgroundColor = ""
    }, 100);
})
    setTimeout(() => {
        botao.style.backgroundColor = ""
    }, 100);
})
