$(document).ready(function () {

  $("input[type='number']").inputSpinner();

  $(".card input[type=number]").on('change paste keyup input', function () {
    // get the value of the input element
    var value = $(this).val();
    // set the class depending on value
    if (value > 0) {
      $(this).parents('.card').addClass('selected');
    } else {
      $(this).parents('.card').removeClass('selected');
    }
  });

  function changeInput(target, delta) {
    // get the card of the given element
    var card = $(target).parents('.card');
    // get the input element
    var input = card.find('input[type=number]');

    // get the current value as integer
    var value = parseInt("0" + input.val());
    // get the borders
    var min = input.attr('min');
    var max = input.attr('max');
    // add the delta and check the borders
    value = Math.max(min, Math.min(max, value + delta));
    // set the new value
    input.val(value);
    // trigger the changed event
    input.trigger('change');
  }

  $('[data-cardSelect]').click(function () {
    $(this).parent('[data-cardSelected]').toggleClass('selected');
  });

  $('.trigger-button').click(function (e) {
    e.stopPropagation();
    $('.dropdown-toggle').dropdown('toggle');
  });

});
//# sourceMappingURL=app.js.map
