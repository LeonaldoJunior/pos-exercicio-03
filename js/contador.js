
const botaoIncrementa = document.querySelector('#incrementar');
const botaoDecrementa = document.querySelector('#decrementar');

botaoIncrementa.addEventListener('click', function(){
    alteraValor(1);
});

botaoDecrementa.addEventListener('click', function(){
    alteraValor(-1)
});


const output = document.querySelector('output');

let contagem = 0;


function alteraValor(dif){
    contagem = contagem + dif;

    output.innerHTML = contagem;

    if(contagem > 0){
        output.classList.add('text-success');
    } else if(contagem < 0 ){
        output.classList.add('text-danger');
    } else{
        output.classList.remove('text-success');
        output.classList.remove('text-danger');
    } 
}