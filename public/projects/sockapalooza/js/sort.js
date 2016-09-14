$(document).ready(function(){
	$('body').on('click', '#btn-sort', function(){

    var value = $('#sort-dropdown').val(),
        field = "sort: 'price desc'"

    switch (value) {
      case 'Price: high to low':
        field = 'price desc'
        break
      case 'Price: low to high':
        field = 'price asc'
        break
      case 'Style: A to Z':
        field = 'style asc'
        break
      case 'Color: A to Z':
        field = 'color asc'
        break
    }

    fetchApi('GET', '/products/?sort=' + field, {}, (items) => {
      document.getElementById('grid').innerHTML = ''
      createGrid(items)
    })
  })
});
