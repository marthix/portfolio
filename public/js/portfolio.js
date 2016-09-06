
fetch('/api/v1/portfolio')
  .then(function(response){
    return response.json()
  })
  .then(function(portfolioPieces){
    // Create work images for grid
    var work = document.getElementById('work')
    var featured = document.getElementById('featured')

    // Create each piece not featured and append to grid
    portfolioPieces.forEach(function(piece){
      if (!piece.featured) {
        var imageId = piece.id
        var htmlImage = createImage('./images/work/' + piece.filename, imageId, piece.title)
        work.appendChild(htmlImage)
      } else {
        var imageId = piece.id
        var htmlImage = createImage('./images/work/' + piece.filename, imageId, piece.title)
        featured.appendChild(htmlImage)
      }
    })
  })

function createImage(path, id, caption) {
  var imageBox = document.createElement('div')

  var imageLink = document.createElement('a')
  imageLink.setAttribute('href', '/detail?id=' + id)

  var figure = document.createElement('figure')

  var image = document.createElement('img')
  image.setAttribute('src', path)
  image.setAttribute('alt', caption)

  var figureCaption = document.createElement('figcaption')

  var title = document.createElement('p')
  title.innerHTML = caption

  figureCaption.appendChild(title)
  figure.appendChild(image)
  figure.appendChild(figureCaption)
  imageLink.appendChild(figure)
  imageBox.appendChild(imageLink)

  return imageBox
}
