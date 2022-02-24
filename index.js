window.addEventListener('scroll', function(){
    let animacion=document.getElementById('feature');
    let position= animacion.getBoundingClientRect().top;
    console.log(position);
    let screen=window.innerHeight;
    console.log(screen)

    if(position<(screen+10)){
        animacion.style.animation='animado .5s ease'
    }
})