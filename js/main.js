// Helper Variables
var qs = document.querySelector.bind(document)
var qsAll = document.querySelectorAll.bind(document)
var log = console.log.bind(console)

//Variables
var featured = qs('#featured')


$(document).ready(function(){
  // Make nav work


  // On document scroll, change the navbar backround color
   var scroll_start = 0;
   var startchange = $('.nav-container');
   var offset = startchange.offset();

   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top + 50) {
        $('.nav-container').css('background-color', '#FCFC62');
        $('li>a').css('color', '#343431');
        $('.logo').css('background-color', '#343431')
        $('.logo').css('width', '35px')
        $('.logo').css('height', '50px')
       } else {
         $('.nav-container').css('background-color', '#343431');
         $('li>a').css('color', '#FCFC62');
         $('.logo').css('background-color', '#FCFC62')
         $('.logo').css('width', '70px')
         $('.logo').css('height', '100px')
       }
   });
});

document.body.addEventListener('click', function(e){
  if (e.target.getAttribute('href').includes('#')) {
    e.preventDefault()
    var target = e.target.innerHTML
    if (target === 'Home') {
      $(window).scrollTo('[name="' + target + '"]', {
        offset: -100
      })
    } else {
      $(window).scrollTo('[name="' + target + '"]', {
        offset: -60
      })
    }
  }

})
