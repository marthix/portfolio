//Fetch the API data
fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=board%20games&includes=Images,Shop'))

  //Parse the returned JSON response
  .then(function(response) {
    return response.json()
  })

  //Take the JSON object, and begin creating HTML elements
  .then(function(json) {

    //For each of the results, create a new image from the result object's Image property
    json.results.forEach(function(result){

      //Create the image element, and add a specific class
      var img = document.createElement('img')
      img.setAttribute('src', result.Images[0].url_170x135)
      img.classList.add('tile-img')

      //Create the title element, and add a specific class
      var title = document.createElement('p')
      title.innerHTML = result.title
      title.classList.add('tile-title')

      //Create the seller element, and add a specific class
      var seller = document.createElement('p')
      seller.innerHTML = result.Shop.shop_name
      seller.classList.add('tile-seller')

      //Create the price element, and add a specific class
      var price = document.createElement('p')
      price.innerHTML = '$' + result.price
      price.classList.add('tile-price')

      //Create the div to house all the elements
      var div = document.createElement('div')
      div.classList.add('tile')

      //Add all the above elements to the final div container
      div.appendChild(img)
      div.appendChild(title)
      div.appendChild(seller)
      div.appendChild(price)

      //Append the div to the master tile grid
      document.querySelector('.tile-grid').appendChild(div)
    })
  })
