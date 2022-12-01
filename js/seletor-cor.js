const botao = document.querySelector('#visualizar');
botao.addEventListener(
    'click', 
    function(){
        const corDigitada = document.getElementById('corInput').value;

        const body = document.querySelector('body');
        body.style.backgroundColor = corDigitada;

        if(body.style.backgroundColor !== corDigitada){
            botao.innerHTML = "Falha";
            alert('Por gentiliza, use cores do css')
        }
        else{
            botao.innerHTML = "Sucesso";    
        }

    }
);

