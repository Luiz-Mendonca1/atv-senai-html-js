document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNavegacao = document.querySelector('.menu-navegacao');
    
    menuToggle.addEventListener('click', function() {
        menuNavegacao.classList.toggle('ativo');
        this.classList.toggle('ativo');
    });

    document.querySelectorAll('.lista-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuNavegacao.classList.remove('ativo');
            menuToggle.classList.remove('ativo');
        });
    });

    document.getElementById('anoAtual').textContent = new Date().getFullYear();
});