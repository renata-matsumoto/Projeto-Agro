$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

/*Acessibilidade*/

tamanho = 10;
Daniel

function diminuir() {
    tamanho--;
    document.body.style.fontSize = tamanho + "px";
}

function aumentar() {
    tamanho++;
    document.body.style.fontSize = tamanho + "px";
}


//arquivo funcoes_cpf.js
// validador CPF
function verificarCPF(c) {
    var i;
    s = c;
    var c = s.substr(0, 9);
    var dv = s.substr(9, 2);
    var d1 = 0;
    var v = false;

    for (i = 0; i < 9; i++) {
        d1 += c.charAt(i) * (10 - i);
    }
    if (d1 == 0) {
        alert("CPF Inválido")
        v = true;
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1) {
        alert("CPF Inválido")
        v = true;
        return false;
    }

    d1 *= 2;
    for (i = 0; i < 9; i++) {
        d1 += c.charAt(i) * (11 - i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1) {
        alert("CPF Inválido")
        v = true;
        return false;
    }
    if (!v) {
        alert("CPF Válido")
    }
}

function diminuir() {
    tamanho --;
    document.body.style.fontSize = tamanho +"px";
}
function aumentar() {
    tamanho ++;
    document.body.style.fontSize = tamanho +"px";
}

