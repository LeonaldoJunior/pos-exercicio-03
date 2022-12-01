
const botaoIniciar = document.querySelector('#iniciar');
const botaoPausar = document.querySelector('#pausar');
const botaoParar = document.querySelector('#parar');

botaoIniciar.addEventListener('click', function(){
    alteraEstado('INICIAR');
});

botaoPausar.addEventListener('click', function(){
    alteraEstado('PAUSAR');
});

botaoParar.addEventListener('click', function(){
    alteraEstado('PARAR');
});


const output = document.querySelector('output');

let contagem = 0;
let estado = 'PARADO';

/**
 * Computa o novo estado da aplicacao baseado na ação especificada.
 * @param {*} acao INICIAR ou PAUSAR ou PARAR 
 */
function alteraEstado(acao){
    switch(estado){
        
        case 'PARADO':
            switch(acao){
                case 'INICIAR':
                    estado = 'RODANDO';
                    break;
                case 'PARAR':
                    estado = 'PARADO';
                    contagem = 0;
                    break;                                  
            }
            break;

        case 'RODANDO':
            switch(acao){
                case 'PAUSAR':
                    estado = 'PARADO';
                    break;
                case 'PARAR':
                    estado = 'PARADO';
                    contagem = 0;
                    break;                                 
            }
            break;
        }
}

setInterval(
    function(){
        if(estado === 'RODANDO'){
            contagem += 100;
        }
        output.innerHTML = `${(contagem / 1000).toFixed(1)}`
    },
    100,
)