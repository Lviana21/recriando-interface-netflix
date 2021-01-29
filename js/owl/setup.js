$('.owl-carousel').owlCarousel({
    loop:true, /*efeito de loop, sempre dar continuidade na lista de series*/
    margin:10, /*margem entre os posts da series*/
    nav:false, /*botões de navegação*/
    
    /*bloco de reponsividade da tela*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})