
function addTarefa(){

    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value

    let listatarefa = document.getElementById("listatarefa")
    let novatarefa = document.createElement("li")

    novatarefa.textContent = tarefa
    novatarefa.classList.add("tarefa")

    listatarefa.appendChild(novatarefa)

    inputTarefa.value = ""

}
