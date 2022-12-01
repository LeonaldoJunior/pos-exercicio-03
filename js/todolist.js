const botaoAdicionar = document.querySelector('#adicionar');

botaoAdicionar.addEventListener('click', function(){
    const divContainer = document.querySelector('#lista-tarefas');

    const novaRow = document.createElement('div');
    novaRow.classList.add('row');

    novaRow.innerHTML = `
        <div class="col d-flex">
            <input 
                type="checkbox" 
                class="mr-2" 
            >
            <input 
                type="text" 
                class="flex-grow-1 form-control"
                placeholder="Digite aqui a tarefa..." 
            >
            <button
                type="button"
                class="btn btn-danger text-center"
            >
                <i class="bi bi-trash-fill"></i>
            </button>
        </div>
    `

    divContainer.appendChild(novaRow);

    const checkbox = novaRow.querySelector('input[type="checkbox"]');
    const caixa = novaRow.querySelector('input[type="text"]');
    const botao = novaRow.querySelector('button');

    checkbox.addEventListener('change', function(event){
        caixa.disabled = event.target.checked;
    })

    botao.addEventListener('click', function(event){
        divContainer.removeChild(novaRow); 
    })

});