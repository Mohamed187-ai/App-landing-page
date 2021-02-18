var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
  });

  const sr = ScrollReveal({
    origin:   'top',
    distance: '80px',
    duration: 2000,
    reset:    true,
  });
  sr.reveal('.header_text', {origin: 'bottom'})
  sr.reveal('.email_subscribe', {delay:300})
  sr.reveal('.header_img', {origin: 'top', delay:300})
  sr.reveal('.h_scroll', {origin: 'bottom', delay: 200})
  sr.reveal('.img_scroll', {origin: 'right', delay: 200})
  sr.reveal('.img_scroll-r', {origin: 'right'})
  sr.reveal('.img_scroll-l', {origin: 'left'})
  sr.reveal('.img_scroll-t', {origin: 'top'})
  sr.reveal('.text_scroll', {origin: 'bottom', delay: 400})
  sr.reveal('.scroll_1', {origin: 'right', delay: 200})
  sr.reveal('.scroll_2', {origin: 'right', delay: 400})
  sr.reveal('.scroll_3', {origin: 'right', delay: 600})
  sr.reveal('.scroll_4', {origin: 'right', delay: 800})

  $(document).ready(function(){
    var mybutton = document.getElementById("myBtn");
    mybutton.addEventListener("click", function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        }
        else{
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

