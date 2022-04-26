function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}
function EditarItem(){
      console.log(this.parentElement)
      this.parentElement.edit()

}
function CriarBotaoEditar(){
    var botao_Editar = document.createElement('button')
    botao_Editar = classList.add ("btn, btn-secundary")
    botao_Editar.innerHTML = "Editar"
    botao_Editar.type = "button"
    botao_Editar.addEventListener("click", EditarItem);

    return botao_Editar
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
    novo_item_lista.appendChild(CriarBotaoDelete())
    lista.appendChild (novo_item_lista)
    novo_item_lista.appendChild(CriarBotaoDelete)
    novo_item_lista.appendChild(CriarBotaoEditar)
    document.getElementById("item").value = ""

}