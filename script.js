const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => 
nav.classList.toggle("active"));

const numero = "5585997293657"; // seu número DDI+DDD+telefone
  const mensagem = "Olá! Gostaria de um orçamento para conserto do meu celular, por favor.";
  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;

  // Função genérica pra abrir em nova aba
  function abrirWhatsApp() {
    window.open(url, "_blank");
  }

  // Botão “Seu orçamento agora”
  document.getElementById("whatsappBtn")
    .addEventListener("click", abrirWhatsApp);

  // Ícone no footer
  document.getElementById("whatsappFooterIcon")
    .addEventListener("click", abrirWhatsApp);

const reviews = [
    {
      name: "Cecília",
      description: "O atendimento foi ótimo, e meu celular ficou novinho! Me surpreendi com a agilidade e o cuidado no serviço. Com certeza voltarei mais vezes.",
      image: src="assets/foto-cliente.png",
      stars: 5
    },
    {
      name: "João Silva",
      description: "Serviço rápido e com preço justo. Recomendo muito! Foram super honestos, me explicaram tudo direitinho e entregaram no prazo.",
      image: src="assets/foto-cliente2.png",
      stars: 4
    },
    {
      name: "Maria Clara",
      description: "Atendimento atencioso e conserto com garantia. Adorei! A loja é limpa, organizada, e a equipe transmite segurança e profissionalismo.",
      image: src="assets/foto-cliente3.jfif",
      stars: 4
    }
  ];

  let currentIndex = 0;

    // Função para renderizar o slide
    function renderSlide() {
    const content = document.getElementById("content");
    const review = reviews[currentIndex];

    const fullStars = "⭐".repeat(review.stars);
    const emptyStars = "☆".repeat(5 - review.stars);
    const starsHTML = fullStars + emptyStars;

    content.innerHTML = `
      <img src="${review.image}" alt="${review.name}" class="avatar">
      <p class="name">${review.name}</p>
      <p class="stars">${starsHTML}</p>
      <p class="description">${review.description}</p>
    `;
  }

    // Funções de navegação
    function nextSlide() {
      currentIndex = (currentIndex + 1) % reviews.length;
      renderSlide();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      renderSlide();
    }

    // Inicializa o primeiro slide
    renderSlide();

document.querySelectorAll('.nav-list a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão
    const targetId = this.getAttribute('href'); // Obtém o ID do destino
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Ajuste para não ficar escondido atrás do menu
        behavior: 'smooth' // Faz a rolagem suave
      });
    }
  });
});