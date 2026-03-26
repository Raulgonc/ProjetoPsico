const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const heroText = document.querySelector('.hero-text');
const text = "Quem olha para fora sonha, quem olha para dentro desperta";
heroText.textContent = '';

let index = 0;
function typeWriter() {
    if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();
