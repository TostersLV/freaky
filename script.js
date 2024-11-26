function calc(e) {
    e.preventDefault();
    document.getElementById('diddy').textContent = +document.getElementById('nr1').value + +document.getElementById('nr2').value;
}
 // Function to generate random confetti elements
// Function to generate random confetti elements
function generateConfetti() {
    const box4 = document.querySelector('#box4'); // Target box 4
    const confettiCount = 100; // Number of confetti pieces to generate

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Randomly position the confetti
        confetti.style.left = Math.random() * 100 + '%'; // Random X position (from 0% to 100%)
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration between 2s and 5s
        confetti.style.animationDelay = Math.random() * 2 + 's'; // Random delay before falling

        // Randomly change the color of the confetti
        confetti.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

        box4.appendChild(confetti);
    }
}

// Trigger confetti when the page is loaded
window.onload = generateConfetti;
