const btn1 = document.querySelector('.navbar-toggler');
const text = document.querySelector('.divtext');

console.log(btn1);
console.log(text);

function hideText(){
    text.classList.toggle('divhide');
};

btn1.addEventListener('click',hideText);


document.addEventListener('DOMContentLoaded', function(){

    const ar = document.querySelector('.fa-angle-down');

    function arrowHide(){
        if(window.scrollY >= 500){
            ar.classList.add('fa-display')
        }
        else{
            ar.classList.remove('fa-display')
        }
    }

    window.addEventListener('scroll', arrowHide);


        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
    });

    $(document).ready(function(){
        $('.slick-carousel').slick({
            mobileFirst: true,
            autoplay: true,
            autoplaySpeed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                breakpoint: 996,
                settings: {
                    autoplaySpeed: 3500,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    autoplaySpeed: 4000,
                    slidesToShow: 3,
                    slidesToScroll: 1
            }
            },
        ]
        });

    });
});