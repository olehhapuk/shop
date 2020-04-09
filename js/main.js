
// tabs init
$('.top.menu .item').tab();


// accordion
$('.ui.accordion').accordion({});


//slick slider
$(document).ready(function(){
  $('.akce__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.slider-for',
    infinite: true,
    focusOnSelect: true,
  });
});



// product counter / product page
$('.btn-number').click(function(e) {
  e.preventDefault();

  fieldName = $(this).attr('data-field');
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == 'minus') {

      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();
      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }

    } else if (type == 'plus') {

      if (currentVal < input.attr('max')) {
        input.val(currentVal + 1).change();
      }
      if (parseInt(input.val()) == input.attr('max')) {
        $(this).attr('disabled', true);
      }

    }
  } else {
    input.val(0);
  }
});
$('.input-number').focusin(function() {
  $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {

  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());

  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val($(this).data('oldValue'));
  }
  if (valueCurrent <= maxValue) {
    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
  } else {
    alert('Sorry, the maximum value was reached');
    $(this).val($(this).data('oldValue'));
  }

});




$(document).ready(function(){

  $('.items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    }
  }, 
  {
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
  }
  },
  {
  breakpoint: 300,
  settings: {
    slidesToShow: 1
  }

  }]
  });
});