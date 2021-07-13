$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

/*Acessibilidade*/

tamanho = 10;
function diminuir() {
    tamanho --;
    document.body.style.fontSize = tamanho +"px";
}
function aumentar() {
    tamanho ++;
    document.body.style.fontSize = tamanho +"px";
}
