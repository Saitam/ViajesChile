// Navbar Top Fixed cambia de color si baja 50 px
$(document).ready(function () {
    // Cuando se desplaza la página
    $(window).scroll(function () {
        // Si el desplazamiento es mayor que 50px del tope
        if ($(this).scrollTop() > 50) {
            // Agrega la clase 'scrolled' al navbar
            $('.navbar').addClass('scrolled');
        } else {
            // Si no, remueve la clase 'scrolled'
            $('.navbar').removeClass('scrolled');
        }
    });
});