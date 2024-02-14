document.addEventListener("DOMContentLoaded", function() {
    const numStars = 400; // Número de estrellas que deseas generar

    const starsContainer = document.querySelector('.stars');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        star.style.top = `${Math.random() * 100}vh`; // Posición vertical aleatoria
        star.style.animationDelay = `${Math.random() * 10}s`; // Retraso de animación aleatorio
        starsContainer.appendChild(star);
    }
});
