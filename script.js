function addTarefa(){
        
    let inputTarefa=document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
    document.getElementById("tarefas").textContent = tarefa;

    let listatarefa=document.getElementById("listatarefa")
    let novatarefa= document.createElement("li")

    listatarefa.appendChild(novatarefa)
    inputTarefa.value = novatarefa

    inputTarefa.value=""

}