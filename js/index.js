function menu(){
    
    let menu = document.querySelector('nav')
    if (menu.classList.contains('open')) {
        menu.classList.remove('open')
    }else{
        menu.classList.add('open')
    }
}


window.addEventListener('scroll', function(){
    var menu = document.querySelector('header');
    menu.classList.toggle('sticky', window.scrollY > 0);
  })