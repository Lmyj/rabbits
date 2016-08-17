/**
 * Created by limeng on 2016/8/10.
 */
$(function(){
  var dom1 = $('#top-box');
  var domWidth = dom1.offset().width;
  var screenWidth = $(window).width();
  var nowLeft = screenWidth - domWidth;
  function move(){
    dom1.animate(
      {left: nowLeft},
      {
        duration: 2000,
        easing: 'linear',
        complete: function(){
          dom1.animate({left: 0},2000);
        }
      }
    );
  }
  move();
  var timerId = setInterval(move,4100);
  var nowTop = $(window).height();
  console.log();
  var dome2 = $('.bottom-box');
  dome2.on('swipeUp',function(e){
    e.stopPropagation();

    console.log(55);
    dome2.animate(
      {bottom: nowTop},
      {
        duration: 600,
        easing: 'linear',
        complete: function(){
          dome2.css({bottom: 0});
        }
      }
    );
  });
});