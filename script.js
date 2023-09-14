const parallaxImages = document.querySelector('.parallax-images');
const parallaxText = document.querySelector('.parallax-text');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

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
function showIframe(element) {
    // Aumenta o z-index do elemento atual para trazê-lo para a frente
    element.style.zIndex = 2;

    // Reduz o z-index de todos os outros elementos para enviá-los para trás
    const allContainers = document.querySelectorAll('.iframe-container');
    allContainers.forEach(container => {
        if (container !== element) {
            container.style.zIndex = 1;
        }
    });
}
    document.addEventListener('DOMContentLoaded', function() {
        var cards = document.querySelectorAll('.card');

        cards.forEach(function(card) {
            card.addEventListener('mouseover', function() {
                var cardContent = card.querySelector('.card-content');
                cardContent.style.display = 'block';
            });

            card.addEventListener('mouseout', function() {
                var cardContent = card.querySelector('.card-content');
                cardContent.style.display = 'none';
            });
        });
    });

