const tamanhoTela = window.matchMedia('(max-width: 1024px)');
const menu = document.querySelector('.menu');

if(tamanhoTela.matches){
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', openMenu);

    function openMenu(){
        menu.classList.toggle('active');
    }
}

  // scroll 


  window.addEventListener('scroll', reduzMenu);


  function reduzMenu(){
      const windowTop = window.pageYOffset;
      if((windowTop) > menu.offsetTop){
          menu.classList.add('scroll');
          console.log('oi')
      } else{
          menu.classList.remove('scroll');
      }
  }

