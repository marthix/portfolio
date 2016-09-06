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
    } else {
      changeLogoSize('70px', '100px')
    }
  })

  function changeLogoSize(width, height) {
    $('.logo').css('width', width)
    $('.logo').css('height', height)
  }
})

// Custom scroll-to links
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

// Create work images for grid
var work = document.getElementById('work')

var portfolioImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png' , '17.png', '18.png', '19.png', '20.png', '21.png', '22.png']

portfolioImages.forEach(function(image){
  var imageId = image.slice(0, -4)
  var htmlImage = createImage('./images/work/' + image, imageId)
  work.appendChild(htmlImage)
})

function createImage(path, id) {
  var imageBox = document.createElement('div')
  // imageBox.classList.add('col-sm-3')

  var imageLink = document.createElement('a')
  imageLink.setAttribute('href', '/details?id=' + id)

  var figure = document.createElement('figure')

  var image = document.createElement('img')
  image.setAttribute('src', path)
  // image.setAttribute('height', '250')
  // image.setAttribute('width', '100%')
  image.setAttribute('alt', '')
  image.classList.add('portfolio-image')

  var figureCaption = document.createElement('figcaption')

  var title = document.createElement('p')
  title.innerHTML = "Test Caption"

  figureCaption.appendChild(title)
  figure.appendChild(image)
  figure.appendChild(figureCaption)
  imageLink.appendChild(figure)
  imageBox.appendChild(imageLink)

  return imageBox
}



		// <a href="http://www.flickr.com/photos/anirudhkoul/3536413126/">
		// 	<figure>
		// 		<img src="images/arcdetriomphe_sm.png" height="180" width="320" alt="Arc de Triomphe">
		// 		<figcaption><p>Arc de Triomphe</p></figcaption>
		// 	</figure>
		// </a>
