var tarefa = document.getElementById('tarefa');
var item = document.getElementById('item');
var listaTarefas = document.getElementById('listaTarefas');

function adicionar(){

    item.classList.remove('hidden');

    var btnCampo = document.createElement('div');
    btnCampo.classList.add('btnCampo');

    var iconCheck = document.createElement('i');
    iconCheck.classList.add('bi');
    iconCheck.classList.add('bi-check-square-fill');
    iconCheck.classList.add('check');

    var iconDelete = document.createElement('i');
    iconDelete.classList.add('bi');
    iconDelete.classList.add('bi-x-square-fill');
    iconDelete.classList.add('delete');


    var nomeTarefa = document.createElement('li');
    nomeTarefa.classList.add('nomeTarefa')
    
    nomeTarefa.innerText = tarefa.value;
    listaTarefas.appendChild(nomeTarefa);
    nomeTarefa.appendChild(btnCampo);
    btnCampo.appendChild(iconCheck);
    btnCampo.appendChild(iconDelete);


    tarefa.value = null;    


    iconCheck.addEventListener("click", function(){
      nomeTarefa.style.textDecoration = "line-through";
      nomeTarefa.style.color = "#696969"
  })
    iconDelete.addEventListener("click", function(){
      listaTarefas.removeChild(nomeTarefa);
  })
}
