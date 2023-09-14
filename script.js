window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxText = document.querySelector('.parallax-text');

    // Ajuste a velocidade do efeito parallax alterando o valor dividido abaixo
    const speed = 0.5;

    const parallaxImageLeft = document.querySelector('.parallax-image-left');
    const parallaxImageRight = document.querySelector('.parallax-image-right');

    parallaxImageLeft.style.transform = `translateX(-${scrollPosition / speed}px)`;
    parallaxImageRight.style.transform = `translateX(${scrollPosition / speed}px)`;

    if (scrollPosition >= window.innerHeight / 18) {
        parallaxText.style.opacity = 1;
        parallaxText.style.display = "block";
    } else {
        parallaxText.style.opacity = 0;
        parallaxText.style.display = "none";
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        card.addEventListener('mouseover', function () {
            var cardContent = card.querySelector('.card-content');
            cardContent.style.display = 'block';
        });

        card.addEventListener('mouseout', function () {
            var cardContent = card.querySelector('.card-content');
            cardContent.style.display = 'none';
        });
    });
});

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 18 * i);
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const titulo = document.querySelector('.sinopse-telefonepreto');
    if (isElementInViewport(titulo)) {
        typeWrite(titulo);
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);


