var tarefa = document.getElementById('tarefa');
var item = document.getElementById('item');
var listaTarefas = document.getElementById('listaTarefas');

function adicionar(){

    item.classList.remove('hidden');

    var icon = document.createElement('i');
    icon.classList.add('bi');
    icon.classList.add('bi-x-square-fill');

    var nomeTarefa = document.createElement('li');
    nomeTarefa.classList.add('nomeTarefa')
    
    nomeTarefa.innerText = tarefa.value;
    listaTarefas.appendChild(nomeTarefa);
    nomeTarefa.appendChild(icon);

    tarefa.value = null;    
    // novoNome.addEventListener("click", function(){
    //     novoNome.style.textDecoration = "line-through";
    // })
    icon.addEventListener("click", function(){
      listaTarefas.removeChild(nomeTarefa);
  })
}
