
// Script para o menu hambúrguer

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});


// Efeito de máquina de escrever para o texto do hero (só roda no index.html)

const heroText = document.querySelector('.hero-text');
if (heroText) {
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
}

// Animação de entrada da seção Sobre Mim
const sobreElementos = document.querySelectorAll('.sobre-texto, .sobre-foto');
if (sobreElementos.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sobreElementos.forEach(el => observer.observe(el));
}

// ============================================================
// POSTS DO BLOG
// Para adicionar um novo post, copie o bloco {} abaixo,
// cole antes do último item e preencha os campos.
// ============================================================
const posts = [
    {
        titulo: "Minha trajetória e como trabalho com você",
        data: "30 de março de 2026",
        preview: "Me chamo Fernanda Letícia do Carmo, sou psicóloga clínica e trabalho com a abordagem da Psicologia Analítica Junguiana. Antes de falar sobre o que faço, quero te contar um pouco de quem eu sou...",
        conteudo: `Me chamo Fernanda Letícia do Carmo, sou psicóloga clínica (CRP 06/178740) e trabalho com a abordagem da Psicologia Analítica Junguiana. Antes de falar sobre o que faço, quero te contar um pouco de quem eu sou.

Sou formada em Psicologia pela Universidade Cidade de São Paulo e pós-graduada em Saúde Pública pelo Centro Universitário São Camilo. Desde 2022 atendo presencialmente no Tatuapé, em São Paulo, e também de forma online — o que me permite acompanhar pessoas de diferentes lugares.

Atualmente, aprofundo meus estudos em Psicologia Analítica Junguiana no Instituto Freedom, com conclusão prevista para julho de 2027. Essa abordagem me encontrou porque acredito que o autoconhecimento é um dos caminhos mais transformadores que existem.

Na clínica, atendo adolescentes, adultos e casais. Cada pessoa chega com sua história, seus silêncios e suas questões — e o meu papel é caminhar ao lado, criando um espaço seguro para que esse processo possa acontecer no seu tempo.

Se você chegou até aqui, talvez já sinta que é hora de olhar para dentro. Estou aqui quando você estiver pronto.`,
        imagem: "./Assets/imgs/Foto-Fernanda.jpg"
    }
];

// Renderiza os posts no blog (só executa na página blog.html)
const postsContainer = document.getElementById('posts-container');
if (postsContainer) {
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p style="text-align:center;color:var(--secondary-text-color)">Nenhum post publicado ainda.</p>';
    } else {
        posts.forEach((post) => {
            const imagemHtml = post.imagem
                ? `<img src="${post.imagem}" alt="${post.titulo}" class="post-image" />`
                : '';

            const card = document.createElement('article');
            card.className = 'post-card';
            card.innerHTML = `
                ${imagemHtml}
                <div class="post-content">
                    <p class="post-date">${post.data}</p>
                    <h2 class="post-title">${post.titulo}</h2>
                    <p class="post-preview">${post.preview}</p>
                    <div class="post-text-full">${post.conteudo.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>')}</div>
                    <button class="btn-leia-mais">Leia mais</button>
                </div>
            `;

            const btn = card.querySelector('.btn-leia-mais');
            const fullText = card.querySelector('.post-text-full');
            btn.addEventListener('click', () => {
                const isOpen = fullText.classList.toggle('active');
                btn.textContent = isOpen ? 'Leia menos' : 'Leia mais';
            });

            postsContainer.appendChild(card);
        });
    }
}





