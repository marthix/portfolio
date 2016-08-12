$(document).ready(function(){
	$('body').on('click', '.descriptionModal', function(){

		$("#descriptionModal").modal('show');
    var id = $(this).attr('data-product-id')

    fetchApi('GET', '/products/' + id, {}, (item) => {
      console.log(item)
        var individualPic = document.getElementById('individualPic')
        individualPic.setAttribute('src', item.product_image)

        var individualPrice = document.getElementById('individualPrice')
        individualPrice.innerHTML = '$' + (item.price / 100)

        var individualName = document.getElementById('gridSystemModalLabel')
        individualName.innerHTML = item.name

        var individualDesc = document.getElementById('individualDesc')
        individualDesc.innerHTML = item.description

        var staticOption = document.createElement('option'),
            sizeDropdown = document.createElement('select')

            sizeDropdown.setAttribute('name', 'sizes')

            sizeDropdown.classList.add('btn-details', 'btn', 'btn-primary', 'dropDownButton')

            staticOption.innerHTML = 'Sizes:'

            sizeDropdown.appendChild(staticOption)

            var i = 0
            item.sizes.forEach(function(size){
              var sizeOption = document.createElement('option')
              sizeOption.innerHTML = size.size + ' (' + item.sizings[i].quantity + ')'
              i++
              sizeDropdown.appendChild(sizeOption)
            })
            console.log(sizeDropdown)
            document.getElementById('qtyButton').innerHTML = ''
            document.getElementById('qtyButton').appendChild(sizeDropdown)

      })
    })
});

//this is the plus minus for quantity of item to add to card//
$(function() {
  // This button will increment the value
  $('.qtyplus').click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});








// this is for the 3 featured items on the desc modal//
fetchApi('GET', '/featured/products/', {}, (items) => {
    // console.log(items)

    items.forEach(function(item) {
        console.log(item.product.product_image)

        var featureImage = document.createElement('img')

        featureImage.setAttribute('src', item.product.product_image)

        featureImage.classList.add('img-rounded')

        document.getElementById('smallSale1').appendChild(featureImage)

    })
})
