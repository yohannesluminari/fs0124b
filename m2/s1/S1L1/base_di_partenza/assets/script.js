window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let startButton = document.getElementById('start');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Modifica 100 a seconda di quando vuoi che accada il cambio
        header.style.backgroundColor = 'white';
        startButton.style.backgroundColor = 'green';
    } else {
        header.style.backgroundColor = 'transparent';
        startButton.style.backgroundColor = 'transparent';
    }
});
