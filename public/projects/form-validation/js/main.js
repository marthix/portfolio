document.onreadystatechange = function() {
  if (document.readyState === 'complete') {

    // 1. Set variable to the form element
    var form = document.querySelector('#contactForm')

    // 2. Listen to submit event on the form
    form.addEventListener('submit', function(e) {

      // 3. When form submits, check to see if form is valid
      
      //    If false: show the invalid form message and prevent submission
      if ( ! validate(form)) {
        document.querySelector('#msgInvalidForm').classList.remove('hidden')

        e.preventDefault()
        return false
      }

      //    If true: hide the invalid form message and allow submission
      else {
        document.querySelector('#msgInvalidForm').classList.add('hidden')

        return true
      }
    })

  }
}
