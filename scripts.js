// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const aboutSection = document.getElementById('about');

    // Simulação de dados de posts (pode ser substituído por Firebase ou outra API)
    const posts = [
        { title: 'Meu Primeiro Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Outro Post Interessante', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
        // Adicione mais posts conforme necessário
    ];

    // Função para exibir os posts
    function renderPosts() {
        mainContent.innerHTML = ''; // Limpa o conteúdo atual

        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');

            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;

            const postContent = document.createElement('p');
            postContent.textContent = post.content;

            postElement.appendChild(postTitle);
            postElement.appendChild(postContent);
            mainContent.appendChild(postElement);
        });
    }

    // Carregar os posts ao carregar a página
    renderPosts();

    // Animação para os textos sobre informática
    aboutSection.style.opacity = '0';
    aboutSection.style.transform = 'translateY(50px)';
    setTimeout(function() {
        aboutSection.style.opacity = '1';
        aboutSection.style.transform = 'translateY(0)';
    }, 500);
});
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // ... seu código existente ...

    // Carrossel para a galeria de fotos
    const gallery = document.querySelector('.photo-gallery');
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, idx) => {
            if (idx === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Altera a cada 3 segundos
});
// scripts.js

// Exemplo usando Fetch API para buscar notícias
fetch('https://newsapi.org/v2/everything? q=tesla &from=2024-05-25&sortBy=publishedAt&apiKey=903af5104fff4e04a736234aaabcbbb2')
    .then(response => response.json())
    .then(data => {
        // Manipular os dados da API (exibir notícias, etc.)
    })
    .catch(error => console.error('Erro ao buscar notícias:', error));


// scripts.js

// Atualizar a largura da barra de progresso conforme o usuário rola a página
const progressBar = document.querySelector('.progress-bar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
});


// scripts.js

// Exemplo usando uma biblioteca de mapa de calor (como heatmap.js)
const heatmapInstance = h337.create({
    container: document.querySelector('.heatmap-container')
});

// Exemplo de dados para o mapa de calor
const heatmapData = {
    max: 5,
    data: [
        { x: 10, y: 10, value: 3 },
        { x: 20, y: 20, value: 1 },
        // Adicione mais dados conforme necessário
    ]
};

// Adicionar dados ao mapa de calor
heatmapInstance.setData(heatmapData);

// scripts.js

// Exemplo de função para tradução usando uma API de tradução (como Google Translate API)
function traduzirPost() {
    const textoOriginal = document.getElementById('texto-original').textContent;
    const textoTraduzido = // Chamar API de tradução aqui
    document.getElementById('texto-traduzido').textContent = textoTraduzido;
    document.getElementById('texto-traduzido').style.display = 'block';
}

    document.addEventListener('DOMContentLoaded', function() {
        const calendarEl = document.getElementById('calendar');

        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: [
                {
                    title: 'Webinar de Segurança Cibernética',
                    start: '2024-07-01',
                    end: '2024-07-02'
                },
                {
                    title: 'Workshop de Machine Learning',
                    start: '2024-07-15',
                    end: '2024-07-17'
                }
                // Adicione mais eventos conforme necessário
            ]
        });

        calendar.render();
    });
 // JavaScript para controlar o acordeão
 const accordions = document.querySelectorAll('.accordion-btn');

 accordions.forEach(btn => {
     btn.addEventListener('click', () => {
         btn.classList.toggle('active');
         const panel = btn.nextElementSibling;
         if (panel.style.maxHeight) {
             panel.style.maxHeight = null;
         } else {
             panel.style.maxHeight = panel.scrollHeight + 'px';
         }
     });
 });
