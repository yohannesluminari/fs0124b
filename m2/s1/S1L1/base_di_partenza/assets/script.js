window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let startButton = document.getElementById('start');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 500) { 
        header.style.backgroundColor = 'white';
        startButton.style.backgroundColor = 'green';
    } else {
        header.style.backgroundColor = 'transparent';
        startButton.style.backgroundColor = '#191919';
    }
});
