var query = window.location.search

fetch('api/v1/detail' + query)
  .then(function(response){
    return response.json()
  })
  .then(function(portfolioPiece){
    console.log(portfolioPiece)
  })
