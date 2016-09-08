// Helper Variables
var qs = document.querySelector.bind(document)
var qsAll = document.querySelectorAll.bind(document)
var log = console.log.bind(console)

window.onbeforeunload = function () {
	window.scrollTo(0,0);
}

$(document).ready(function(){
  // On document scroll, change the navbar background color and shrink logo
  var scroll_start = 0
  var startchange = $('.nav-container')
  var offset = startchange.offset()

  $(document).scroll(function() {
    scroll_start = $(this).scrollTop()
    if(scroll_start > offset.top + 50) {
      $('.nav-container').css('background-color', '#FCFC62')
      $('li>a').css('color', '#343431')
      $('.logo').css('background-color', '#343431')
      changeLogoSize('35px', '50px')
    } else {
      $('.nav-container').css('background-color', '#343431')
      $('li>a').css('color', '#FCFC62')
      $('.logo').css('background-color', '#FCFC62')
      if ($(window).width() < 425) {
        changeLogoSize('35px', '50px')
      } else {
        changeLogoSize('70px', '100px')
      }
    }
  })

  $(window).resize(function() {
    if ($(window).width() < 425) {
      changeLogoSize('35px', '50px')
    }
  })

  function changeLogoSize(width, height) {
    $('.logo').css('width', width)
    $('.logo').css('height', height)
  }
})

// Custom scroll-to links
document.body.addEventListener('click', function(e){
  if (e.target.getAttribute('href') !== null) {
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
  }
})
