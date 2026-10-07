module.exports = {
  adicionarTarefa,
  editarTarefa,
  excluirTarefa
};


let tarefas = []

function adicionarTarefa(vetor, tarefa) {
  vetor.push(tarefa);
  return vetor;
}
function editarTarefa(vetor, index,novaTarefa){
   if (index < 0 || index>= vetor.length) {
    return vetor;
  }
  vetor[index] = novaTarefa; 
  return vetor;
}

function excluirTarefa(vetor, index){
  if (index < 0 || index>= vetor.length) {
    return vetor;
  }

  return vetor.filter((tarefa, i) => i !== index);

}