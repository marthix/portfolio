// Create work images for grid
var work = document.getElementById('work')

fetch('/api/v1/portfolio')
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function(portfolioPieces){
    console.log(portfolioPieces)
  })
//
// portfolioImages.forEach(function(image){
//   var imageId = image.slice(0, -4)
//   var htmlImage = createImage('./images/work/' + image, imageId)
//   work.appendChild(htmlImage)
// })

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
