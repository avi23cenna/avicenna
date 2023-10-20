
function escolhaDourado(){
    document.getElementById('perfum').src = "img/images.jpg";
}

function escolhaAzul(){
    document.getElementById('perfum').src = "img/perfume-bottle-glass-bottle-for-perfume-and-perfumery-vector-illustration-free-png.png";
}

function escolhaVermelho(){
    document.getElementById('perfum').src = "img/red1.png";
}

function escolhaVerde(){
    document.getElementById('perfum').src = "img/download (1).jpg";
}

function escolhaRosa(){
    document.getElementById('perfum').src = "img/download.jpg";
}

function escolhaMarrom(){
    document.getElementById('perfum').src = "img/png-transparent-perfume-animation-cartoon-perfume-miscellaneous-cartoon-character-perfume-thumbnail.png";
}

function aromaDoce(){
    Valor$Fragrancia$Var = 33;
    reset();
}

function aromaAmadeirado(){
    Valor$Fragrancia$Var = 33;
    reset();
}

function aromaCitrico(){
    Valor$Fragrancia$Var = 33;
    reset();
}

let qtd = document.getElementById('quant-porções');
let qtdValor = 0;
qtd.textContent += qtdValor;
qtd.innerHTML = "Quantidade: ";
qtd.innerHTML += qtdValor;

let qtd$ = document.getElementById('result-final');
let qtd$valor = 0;
qtd$.textContent += qtd$valor;
qtd$.innerHTML = "R$: ";
qtd$.innerHTML += qtd$valor;

let Valor$Variavel = 0;
let Valor$Fragrancia$Var = 0;

function valor1(){
    Valor$Variavel = 7;
    reset();
};

function valor2(){
    Valor$Variavel = 8;
    reset();
};

function valor3(){
    Valor$Variavel = 10;
    reset();
};

function valor4(){
    Valor$Variavel = 9;
    reset();
};

function valor5(){
    Valor$Variavel = 6;
    reset();
};

function valor6(){
    Valor$Variavel = 5;
    reset();
};


function reset(){
    qtd.innerHTML = "Quantidade: "
    qtd.innerHTML += 0;
    qtd$.innerHTML = "R$: ";
    qtd$.innerHTML += 0;
    qtdValor = 0
    qtd$valor = 0
};

function aumentaQtd(){
    qtdValor ++;
    qtd.innerHTML = "Quantidade: ";
    qtd.innerHTML += qtdValor;
    qtd$valor = qtd$valor + Valor$Variavel + Valor$Fragrancia$Var;
    qtd$.innerHTML = "R$: "
    qtd$.innerHTML += qtd$valor
}

function abaixaQtd(){
    if (qtdValor > 0){
        qtdValor --;
        qtd.innerHTML = "Quantidade: ";
        qtd.innerHTML += qtdValor;
        qtd$valor = qtd$valor - Valor$Variavel - Valor$Fragrancia$Var;
        qtd$.innerHTML = "R$: "
        qtd$.innerHTML += qtd$valor
    }
}
