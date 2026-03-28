
// Script para o menu hambúrguer

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});


// Efeito de máquina de escrever para o texto do hero 

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

// Função para buscar os posts do Airtable
async function fetchPosts() {
    try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        return data.records;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return [];
    }
}





