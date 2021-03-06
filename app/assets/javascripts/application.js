// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .



$(document).ready(function(){
  initOverlay();

  var easter_egg = new Konami(function() { alert('Konami code!')});
  easter_egg.load();

  var svg = new Walkway({ 
      selector: '#hmbranding-svg',
      duration: '3000',
      easing: 'easeOutSine'
    });
  
  $('#hmbranding-svg').css('opacity', '1');
  var thesvg = $('#hmbranding-svg');
  svg.draw();

});

function initOverlay(){
  $('.js-toggleOverlay').on('click', function(e){
      e.preventDefault();
      $('.overlay').toggleClass('active');
  });
}