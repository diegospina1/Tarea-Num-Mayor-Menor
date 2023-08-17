'use strict';

const envio = document.getElementById('enviar');
const listaNum = document.getElementById('lista_num');

let btnConfirmar2;

btnConfirmar2 = document.createElement('button');
btnConfirmar2.type = 'button';
btnConfirmar2.textContent = "Confirmar";

envio.addEventListener('click', (event) => {
    let cantNum = document.getElementById('cantNumeros').value;
    cantNum = parseInt(cantNum);
    if((cantNum >= 0) && (cantNum <= 20)){
        for(let i = 0; i < cantNum; i++){
            const div = document.createElement('div');
            const input = document.createElement('input');
            input.setAttribute('type','number');
            input.id = 'valor';
            input.step = 1;
            div.appendChild(input);
            listaNum.appendChild(div);
        }
        listaNum.appendChild(btnConfirmar2);
    }
});


btnConfirmar2.onclick = function () {
    let arrayInput = document.querySelectorAll('#valor');
    let listaFinal = [];
    
    
    arrayInput.forEach(e => {
        parseInt(e.value);
        if(parseInt(e.value) || parseInt(e.value) == 0){
            let valor = e.value;
            listaFinal.push(parseInt(valor));
        }
    })
    console.log(listaFinal);

    let maximo = listaFinal[0];
    let minimo = listaFinal[0];

    for(let i= 0; i < listaFinal.length; i++){
        if(maximo < listaFinal[i]){
            maximo = listaFinal[i];
        }
    }
    for(let i= 0; i < listaFinal.length; i++){
        if(minimo > listaFinal[i]){
            minimo = listaFinal[i];
        }
    }

    console.log(`El valor minimo es: ${minimo}`);
    
    console.log(`El valor maximo es: ${maximo}`);
    
    const seccion = document.createElement('section');
    const seccion2 = document.createElement('section');
    seccion.id = "sec2";
    seccion2.id = "sec3";

    document.body.appendChild(seccion);
    document.body.appendChild(seccion2);

    seccion.innerHTML = `<p><b>El numero mayor es: ${maximo}</b</p>`;
    seccion2.innerHTML = `<p><b>El numero minimo es: ${minimo}</b</p>`;

    
}



