$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 5,
    dots: false,
    centerMode: false,
    arrows: true,
    responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });


  $("input[type='number']").inputSpinner();

  $('[data-cardSelect]').click(function () {
    $(this).parent('[data-cardSelected]').toggleClass('selected');
  });

  $('.trigger-button').click(function (e) {
    e.stopPropagation();
    $('.dropdown-toggle').dropdown('toggle');
  });


});