$(document).ready(function () {
  //  $('.carousel').slick({
  //   slidesToShow: 5,
  //   centerMode: false,
  //   focusOnSelect: true,
  //   infinite: false,
  //   initialSlide: 0,
  //   dots: true,
  //   arrows: true,
  //   responsive: [{
  //       breakpoint: 1600,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         dots: true,
  //         initialSlide: 0,
  //       }
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         initialSlide: 0,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         dots: true,
  //         initialSlide: 0,
  //         arrows: false,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         dots: true,
  //         arrows: false,
  //         initialSlide: 0,
  //       }
  //     }
  //   ]
  // });


  $("input[type='number']").inputSpinner();

  $('[data-cardSelect]').click(function () {
    $(this).parent('[data-cardSelected]').toggleClass('selected');
  });

  $('.trigger-button').click(function (e) {
    e.stopPropagation();
    $('.dropdown-toggle').dropdown('toggle');
  });

});
