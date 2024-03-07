"use strict"
 const containerSlot = document.querySelector('.slot')
 const btnConfettis = document.querySelector('.btn-confettis')
 const emojis = ["😎", "🤓", "🧐", "🤪", "😜", "😝", "😛", "😋", "😚", "😙", "😗", "😘", "😌", "😉", "🙃", "🙂", "😇", "😊", "☺", "🤣", "😂", "😅"]


 btnConfettis.addEventListener('click', fiesta) // on écoute le click sur le bouton

    function fiesta() {
      
        for (let i = 0; i < 100; i++) { // on crée 100 slots
            const confetti = document.createElement('div');
            confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)]; // on ajoute un emoji aléatoire dans chaque slot
            containerSlot.appendChild(confetti);
            console.dir("confetti")
        }
        animateConfettis();
    }

function animateConfettis() {

    const TLCONF = gsap.timeline() // on crée une timeline de GSAP pour les animations des confettis

    TLCONF
    .to('.slot div', {
        y: "random(-100, 100)", // on fait tomber les confettis aléatoirement dans l'espace Y du conteneur (entre -100 et 100)
        x: "random(-100, 100)", // on fait tomber les confettis aléatoirement dans l'espace X du conteneur (entre -100 et 100)
        z: "random(0, 1000)", // on fait tomber les confettis aléatoirement dans l'espace Z du conteneur (entre -100 et 100)
        rotation: "random(-90, 90)", // on fait tourner les confettis aléatoirement dans l'espace Z du conteneur (entre -90 et 90)
        duration: 1, // on fait tomber les confettis en 2 secondes
    })
    .to('.slot div', {
        opacity: 0, // on fait disparaitre les confettis
        duration: 0,
        autoAlpha: 0, // on fait disparaitre les confettis
        // stagger: 0.1, // on fait disparaitre les confettis un par un
        // onComplete: fiesta // on relance la fonction fiesta à la fin de l'animation
    })
    //on l'efface du DOM
    .add(() => {
        containerSlot.innerHTML = ''
    })
    
}
