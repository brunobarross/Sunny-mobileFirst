const tamanhoTela = window.matchMedia('(max-width: 1024px)');

if(tamanhoTela.matches){
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', openMenu);

    function openMenu(){
        menu.classList.toggle('active');
    }
    

}
