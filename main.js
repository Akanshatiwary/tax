$(document).ready(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$("#toTop").click(function () {
  //1 second of animation time
  //html works for FFX but not Chrome
  //body works for Chrome but not FFX
  //This strange selector seems to work universally
  $("html, body").animate({scrollTop: 0}, 1000);
});
  $('#banner').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    animateOut: "fadeOut", 
    animateIn:"fadeIn", 
    autoplayTimeout: 3000, 
    autoplay: true, 
    touchDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#testimonial-info').owlCarousel({
  loop: true, 
  margin: 10, 
  nav: false,
  dots: true, 
  responsive: {
    0: { items: 1 }, 
    600: { items: 1 }, 
    1000: { items: 1}
  }
})
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

