const tarefas = [
    'estudar pra prova',
    'lavar a louça',
    'arrumar  casa',
    'reunião da escola'
]

function mostrarTarefas(listaTarefas) {
    const ul = document.querySelector('#taskList')
    ul.innerHTML = ''
    listaTarefas.forEach(tarefa => {
        const li = `<li>${tarefa}</li>`
        ul.innerHTML += li
    })

}
function filtrarTarefas() {
    const textoFiltrado = document.querySelector('#searchInput').value
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.includes
        (textoFiltrado))
        mostrarTarefas(tarefasFiltradas)

}

mostrarTarefas(tarefas)