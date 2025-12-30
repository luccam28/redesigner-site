document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os elementos que devem ser animados
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // dispara quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para de observar após animar uma vez
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll para Links Internos (Compatibilidade extra)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Compensação do Header Fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});