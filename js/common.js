/*  floating
-------------------------------------------------------*/

$(function() {
  var navBox = $(".floating");
  navBox.hide();
  var TargetPos = 200;
  $(window).scroll( function() {
    var ScrollPos = $(window).scrollTop();
    var topOffset = $('#footer').offset().top;
    if( ScrollPos > topOffset ){
      navBox.fadeOut();
    } else if( ScrollPos > TargetPos ) {
      navBox.fadeIn();
    } else {
      navBox.fadeOut();
    }
  });
});


/*  andmore
-------------------------------------------------------*/

$(function(){
  if (window.matchMedia( '(max-width: 750px)' ).matches) {
    var box = $('.voice');
    var i = 0;
    $(box).each(function() {

      sHeight = $(box).get(i).scrollHeight;
      oHeight = $(box).get(i).offsetHeight;
      hiddenDiff = sHeight - oHeight;

      if(hiddenDiff > 0){
        $(this).parent().append('<div class="voice-more"><span>続きを見る</span></div>')
      }

      i++;
    });

    $(".voice-more").click(function() {
      if($(box).hasClass('is-active')){
        $(box).removeClass('is-active');
        $(this).removeClass('is-active');
        $(this).parent().find(box).animate({ height: txt_height}, 500 );

      }else{
        $(box).addClass('is-active');
        $(this).addClass('is-active');

        txt_height = parseInt($(this).parent().find(box).css('height'),10);

        sHeight = $(this).parent().find(box).get(0).scrollHeight;
        oHeight = $(this).parent().find(box).get(0).offsetHeight;
        hiddenDiff = sHeight - oHeight;
        new_txt_height = txt_height + hiddenDiff;
        $(this).parent().find(box).animate({ height: new_txt_height}, 500 );
      }

      if ( $('.voice-more').hasClass('is-active') ) {
        $('.voice-more span').html('閉じる');
      } else {
        $('.voice-more span').html('続きを見る');
      }
    });
  }
});


/*  form autoinput
-------------------------------------------------------*/

$(function() {
  $('.form-email').attr('autocomplete', 'email');
  $('.form-email').attr('autocorrect', 'off');
  $('.form-email').attr('autocapitalize', 'off');
});


/*  form agree
-------------------------------------------------------*/

$(function() {
  $('#submit').prop('disabled', true);
  $('#agree').on('click', function() {
    if ($(this).prop('checked') == false) {
      $('#submit').prop('disabled', true);
    } else {
      $('#submit').prop('disabled', false);
    }
  });
});
