$(document).ready(function(){

  //Fetch the API data
  fetchApi('GET', '/products/', {}, (items) => {
    createGrid(items)

    $('.merch')
      .on('mouseover', function() {
        $('.merch-info', this).removeClass('transparent')
      })
      .on('mouseout', function() {
        $('.merch-info', this).addClass('transparent')
      })
  })

})

function createGrid (items) {
  items.forEach(function(item){
    var btnQuickAdd = document.createElement('button'),
      btnDetails = document.createElement('button'),
      staticOption = document.createElement('option'),
      sizeDropdown = document.createElement('select'),
      merchCategory = document.createElement('h1'),
      merchName = document.createElement('h1'),
      merchPrice = document.createElement('h1'),
      merchInfo = document.createElement('div'),
      merchImg = document.createElement('img'),
      merchContainer = document.createElement('div')

    sizeDropdown.setAttribute('name', 'sizes')
    merchImg.setAttribute('src', item.product_image)
    btnQuickAdd.setAttribute('data-product-id', item.id)
    btnDetails.setAttribute('data-product-id', item.id)

    btnQuickAdd.classList.add('btn', 'btn-quick-add')
    btnDetails.classList.add('btn-details','btn', 'descriptionModal')
    merchCategory.classList.add('merch-category')
    merchName.classList.add('merch-name')
    merchPrice.classList.add('merch-price')
    merchInfo.classList.add('merch-info', 'transparent')
    merchImg.classList.add('merch-img')
    merchContainer.classList.add('col-xs-3', 'merch')
    sizeDropdown.classList.add('btn-details', 'btn', 'btn-primary')


    btnQuickAdd.innerHTML = 'Quick Add'
    btnDetails.innerHTML = 'View Details'
    staticOption.innerHTML = 'Sizes:'
    merchCategory.innerHTML = item.category
    merchName.innerHTML = item.name
    merchPrice.innerHTML = '$' + (item.price / 100)

    sizeDropdown.appendChild(staticOption)

    var i = 0
    item.sizes.forEach(function(size){
      var sizeOption = document.createElement('option')
      sizeOption.innerHTML = size.size + ' (' + item.sizings[i].quantity + ')'
      i++
      sizeDropdown.appendChild(sizeOption)
    })

    merchInfo.appendChild(merchCategory)
    merchInfo.appendChild(merchName)
    merchInfo.appendChild(merchPrice)
    merchInfo.appendChild(sizeDropdown)
    merchInfo.appendChild(btnDetails)
    merchInfo.appendChild(btnQuickAdd)
    merchContainer.appendChild(merchImg)
    merchContainer.appendChild(merchInfo)

    document.getElementById('grid').appendChild(merchContainer)
  })
}
