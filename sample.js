$(function(){
  $.each($('.flipsnap'), function(i, element) {
    Flipsnap(element, {'distance': 100});
  });

  var supportTouch = 'ontouchstart' in window;
  var touchStartEvent = supportTouch ? 'touchstart' : 'mousedown';
  $('.item-sub').on(touchStartEvent, function() {
    var count = $(this).attr('count') | 0;
    count++;
    $(this).attr('count', count);
    $(this)[0].innerHTML = '★x' + count;
  });
});
