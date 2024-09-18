// Function to check if the input is correct
function checkCode() {
    const inputCode = document.getElementById('codeInput').value;

    // Check if the input matches the secret code
    if (inputCode === "Heart25or26") {
        // Redirect to hb.html
        window.location.href = "hb.html";
    } else {
        alert("Incorrect code! Try again.");
    }
}

// Star generation logic
const starContainer = document.querySelector('.stars');

// Generate 100 stars and animate them
for(let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Randomize star position
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    
    starContainer.appendChild(star);
}

// Particle generation logic
const particleContainer = document.querySelector('.particles');

// Generate 50 particles
for(let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize initial position of each particle
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.left = Math.random() * 100 + 'vw';
    
    // Randomize the movement direction (using CSS variables)
    particle.style.setProperty('--xDir', (Math.random() * 2 - 1).toFixed(2));
    particle.style.setProperty('--yDir', (Math.random() * 2 - 1).toFixed(2));
    
    particleContainer.appendChild(particle);
}
