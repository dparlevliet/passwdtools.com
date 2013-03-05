
var traditional_usables = 'abcdefghijklmnopqrstuvwqyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
var secure_usables = '!@#$%^&*()_+1234567890-=`~ abcdefghijklmnopqrstuvwqyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.;:?<>'
$(document).ready(function() {
  var placeholder = $('.display-password').attr('placeholder');
  $('.display-password').click(function() {
    $(this).attr('placeholder', '');
  });
  $('.display-password').blur(function() {
    if ($(this).val().length>0) return;
    $(this).attr('placeholder', placeholder);
  });
  $('.generate').click(function() {
    var password = '';
    try {
      var size = $(this).find('select').val();
    } catch (e) {
      var size = 64;
    }
    if ($('.generator .generate-traditional').hasClass('selected')) {
      for (var x=0; x<=size; x++) {
        var pos = Math.ceil(Math.random()*traditional_usables.length);
        password += traditional_usables.substring(pos, pos+1);
      }
      $('#generate-traditional .display-password').val(password);
    } else if ($('.generator .generate-secure').hasClass('selected')) {
      for (var x=0; x<=size; x++) {
        var pos = Math.ceil(Math.random()*secure_usables.length);
        password += secure_usables.substring(pos, pos+1);
      }
      $('#generate-secure .display-password').val(password);
    } else {
      for (var x=1;x<=4;x++)
        password += random_word() + ((x<4)?' ':'');
      $('#generate-intuitive .display-password').val(password);
    }
  });
  $('.password-types li').click(function() {
    $('.password-types li').removeClass('selected');
    $(this).addClass('selected');
    $('.display-password').parent().hide();
    $('#'+$(this).attr('data-pointer')).show();
  });
});

function random_word() {
  return words[Math.round(Math.random()*words.length)]
}