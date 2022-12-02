caixaDias = document.querySelector("#caixa-dias");
caixaHoras = document.querySelector("#caixa-horas");
caixaMinutos = document.querySelector("#caixa-minutos");
caixaSegundos = document.querySelector("#caixa-segundos");

let segundos = 0; 
let minutos = 0; 
let horas = 0;  
let dias = 0;      

const refreshIntervalId = setInterval(function(){
    calculaDiferenca();
    exibe();
},1000);


function parar(){
    clearInterval(refreshIntervalId);
}


function calculaDiferenca(){
    let dataAtual = new Date();
    // let dataAlvo = new Date();
    // dataAlvo = new Date("Fri Dec 02 2022 18:13:02 GMT-0300 (Horário Padrão de Brasília)");
    let dataAlvo = new Date(2023, 0, 1, 0, 0, 0);
    
    const diferencaMili   = (dataAlvo - dataAtual) / 1000 ;
    
    segundos = Math.floor(diferencaMili % 60);
    minutos = Math.floor(diferencaMili / 60 % 60);
    horas = Math.floor(diferencaMili / 60 / 60 % 24);
    dias = Math.floor(diferencaMili / 60 / 60 / 24);

    if(diferencaMili <= 0){  
        segundos = 0; 
        minutos = 0; 
        horas = 0; 
        dias = 0; 
        alteraClasse();
        parar();       
    }
}

function alteraClasse(){
    caixaDias.classList.remove('bg-dark');
    caixaHoras.classList.remove('bg-dark');
    caixaMinutos.classList.remove('bg-dark');
    caixaSegundos.classList.remove('bg-dark');
    
    caixaDias.classList.add('bg-success');
    caixaHoras.classList.add('bg-success');
    caixaMinutos.classList.add('bg-success');
    caixaSegundos.classList.add('bg-success');   
}

function exibe(){
    caixaDias.innerHTML = `<h1>${dias}</h1>` ;
    caixaHoras.innerHTML = `<h1>${horas}</h1>` ;
    caixaMinutos.innerHTML = `<h1>${minutos}</h1>` ;
    caixaSegundos.innerHTML = `<h1>${segundos}</h1>` ;
}