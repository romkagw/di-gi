$(document).ready(function () {
    var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop:true,
  });

  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel', [2000]);
  })
 
  $('.customPrevBtn').click(function() {
      owl.trigger('prev.owl.carousel', [2000]);
  })
});





