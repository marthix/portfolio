$(function(){

  $("#loginPop").popover({
    html : true,
    content: function() {
      return $("#loginPopBody").html();
    }
  });



  $(window).on('beforeunload', function() {
    $(window).scrollTop(210);
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y < 200) {
      $('.header-logo').addClass('transparent')
    } else {
      $('.header-logo').removeClass('transparent');
    }
  });

});


$('body').on("click", "#signup", function() {
  redirect('signup.html');
});
$('body').on("click", "#signin", function() {
    var formFields = {
        name: document.getElementById('username').value,
        password: document.getElementById('password').value
    }

    console.log('click')

    fetchApi('POST', '/login', formFields, function(response, statusCode) {
        console.log(response)
  //something like response.user.token, it might not be exactly that
        if (statusCode >= 200 && statusCode < 300) {
            redirect('index.html')
        }
    })
});
$('body').on("click", "#home-logo", function() {
  redirect('index.html');
});
$('body').on("click", "#checkout", function() {
  redirect('checkout.html');
});
$('body').on("click", "#login-button", function() {
  var formFields = {
     username: 'danyo',
    //  document.getElementById('username').value,
     password: 'password'
    //  document.getElementById('password').value,
  }
  fetchApi('POST','/login/', formFields, function(response, statusCode) {
    if (statusCode >= 200 && statusCode <= 400){
      // saveToken(response.user.token)
      redirect('./index.html')
    }
    else {
      console.log('we are drunk sorry');
    }

  })
});

$('body').on("click", ".glyphicon-shopping-cart", function() {
  //grbs user order id
  fetchApi('GET', '/show/', {}, (response) => {
    var orderid = response.order

    fetchApi('GET', '/orders/' + orderid, {}, (items) => {
        // console.log(item.orderings);

        items.orderings.forEach(function(item){
          // console.log(item);

        })

    })
    fetchApi('GET', '/checkout/', {}, (cartResponse) => {


      //users/orderid
      cartResponse.orderings.forEach(function(object){

        // console.log(object);
        var productID = document.createTextNode(object.product_id)

        var nameText = document.createTextNode(object.productname)
        var priceText = document.createTextNode(object.unit_price)
        var sizeText = document.createTextNode(object.size.size)
        //div col-md-4 no-pads cart-item-holder  border
        var div = document.createElement('div')
        div.classList.add('col-md-4','no-pads','cart-item-holder','border')
        //product image img-responsive cart-item
        var img = document.createElement('img')
        img.setAttribute('src', object.product_image)
        img.classList.add('img-responsive','cart-item')


        //overlay div
        var div1 = document.createElement('div')
        div1.classList.add('col-md-12','cart-item-desc')
        //prod name
        var name = document.createElement('h6')
        name.appendChild(nameText)
        name.classList.add('add-space')
        //product price
        var price = document.createElement('h6')
        price.appendChild(priceText)
        price.classList.add('add-space')

        //prod size
        var size = document.createElement('h6')
        size.appendChild(sizeText)
        size.classList.add('add-space')

        //handles the overlay
        div1.appendChild(name)
        div1.appendChild(price)
        div1.appendChild(size)
        //main div
        div.appendChild(img)
        div.appendChild(div1)

        // console.log(object);

        document.querySelector('.modal-cart-content').appendChild(div)


      })
    })
  })
});

var debounce

$('body').on('click', '.btn-quick-add', function(e){
  //product id passed from grid button
  var id = $(this).attr('data-product-id')

   var qty = $(this).attr('data-product-id')
  clearTimeout(debounce)
  debounce = setTimeout(function() {

    fetchApi('GET', '/show/', {}, (response) => {
      console.log(response);
      var orderid = response.order

      fetchApi('GET', '/orders/' + orderid, {}, (items) => {

        console.log(items);

        if(id === items.product_id) {
          alert('gdf;jdfkldj')
        }
        else {
          fetchApi('POST', '/orders/' + orderid + '/orderings', {
            quantity:1,
            product_id:id,
            size_id:3
          }, (item) => {

            // console.log(item);

        })
        }
      });



    })



  }, 1000)
});

// fetchApi('GET', '/orders/', {}, (response) => {
//   response.forEach(function(object){
//
//   })


// fetchApi('GET', '/orders', {}, (response) => {
// console.log(response);
//   })

// fetchApi('GET', '/orders/', {}, (response) => {
// console.log(response);
//   })
//POST order/id/orderings
//prod id , prod qty, orderid , size
