var log = console.log.bind(console),
    qs = document.querySelector.bind(document),
    navButtons = document.querySelectorAll('.nav-button')

// Navigation to hide or show the various plug-in windows
for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', function () {
    var navButtonId = this.getAttribute('id')

    if (navButtonId === 'btn-sparkle') {
      qs('.twenty-twenty').classList.add('hidden')
      qs('.oridomi').classList.add('hidden')
      qs('.default').classList.add('hidden')
      qs('.sparkle').classList.remove('hidden')
    } else if (navButtonId === 'btn-twenty-twenty') {
      qs('.sparkle').classList.add('hidden')
      qs('.oridomi').classList.add('hidden')
      qs('.default').classList.add('hidden')
      qs('.twenty-twenty').classList.remove('hidden')
      $('#box-2020').twentytwenty()
    } else if (navButtonId === 'btn-oridomi') {
      qs('.twenty-twenty').classList.add('hidden')
      qs('.sparkle').classList.add('hidden')
      qs('.default').classList.add('hidden')
      qs('.oridomi').classList.remove('hidden')
    }
  })
}

// oriDOMi Plugin
var folded = new OriDomi('.paper', {
  vPanels: 6, // number of panels when folding left or right (vertically oriented)
  speed: 1200, // folding duration in ms
  perspective: 500, // smaller values exaggerate 3D distortion
  maxAngle: 40, // keep the user's folds within a range of -40 to 40 degrees
  shading: 'soft' // change the shading type
})

var foldedButton = qs('.folded-button'),
  foldArray = ['Accordion', 'Curl', 'Ramp', 'Fold Up', 'Reveal', 'Stairs', 'Twist', 'Fracture']

foldedButton.addEventListener('click', function () {
  var randomNumber = Math.floor(Math.random() * 8)
  qs('#oridomi-header').innerText = foldArray[randomNumber]

  if (foldArray[randomNumber] === 'Accordion') {
    folded.accordion(30)
  } else if (foldArray[randomNumber] === 'Curl') {
    folded.curl(30)
  } else if (foldArray[randomNumber] === 'Ramp') {
    folded.ramp(30)
  } else if (foldArray[randomNumber] === 'Fold Up') {
    folded.foldUp()
  } else if (foldArray[randomNumber] === 'Reveal') {
    folded.reveal(30)
  } else if (foldArray[randomNumber] === 'Stairs') {
    folded.stairs(30)
  } else if (foldArray[randomNumber] === 'Twist') {
    folded.twist(30)
  } else if (foldArray[randomNumber] === 'Fracture') {
    folded.fracture(30)
  }
})

// jQuery Plugins
$(document).ready(function () {
  // Sparkle Plugin
  $('#sparkle-button').sparkle({
    color: 'rainbow',
    count: 80,
    overlap: 15,
    speed: 1.7,
    minSize: 3,
    maxSize: 8,
    direction: 'down'
  })

  $('#sparkle-header').sparkle({
    color: ['#FFFFFF', '#82e6c2'],
    count: 90,
    overlap: 2,
    speed: 0.7,
    minSize: 3,
    maxSize: 8,
    direction: 'both'
  })

  $('#sparkle-magic').sparkle({
    color: '#ec79fa',
    count: 50,
    overlap: 25,
    speed: 0.7,
    minSize: 3,
    maxSize: 8,
    direction: 'both'
  })

  $('#sparkle-text').sparkle({
    color: ['#FFFFFF', '#82e6c2'],
    count: 80,
    overlap: 3,
    speed: 1.2,
    minSize: 3,
    maxSize: 5,
    direction: 'both'
  })
})

// Twenty-Twenty Plugin
$(document).ready(function () {
  $('#box-2020').twentytwenty()
})
