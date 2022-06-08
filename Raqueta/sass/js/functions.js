$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items:1,
        dotsContainer: '#customDots',
        navContainer: '#customNav',
        margin: 30,
        autoWidth: true,
        navText: ["<img src='images/arrow.png'>", "<img src='images/arrow.png'>"],
        responsive:{
            0:{
                items:2
            },
            479:{
                items:1
            }
        }
    }); 

    $(".navbar-toggler").on("click",function(){
        $("body").toggleClass("no-scroll");
        $(".navbar").toggleClass("open");
    })
});