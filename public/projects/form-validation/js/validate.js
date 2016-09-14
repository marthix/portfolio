function validate(form) {

  var name = form.querySelector('#name'),
    email = form.querySelector('#email'),
    atPosition = email.value.indexOf('@'),
    dotPosition = email.value.lastIndexOf('.'),
    phone = form.querySelector('#phone'),
    comment = form.querySelector('#comment'),
    nameValidated = false,
    emailValidated = false,
    commentValidated = false,
    phoneValidated = false,
    errors = form.querySelectorAll('.error')

  //Remove error codes
  for (var i = 0; i < errors.length; i++) {
    errors[i].parentNode.removeChild(errors[i])
    console.log(errors[i])
  }

  // Name (required, minimum length of 2)
  if (name.value.length < 2 || /\d/.test(name.value)) {
    console.log('Not valid name')
  }
  else {
    console.log('Valid name')
    nameValidated = true
  }

  // Email (required, email formatting)
  if (atPosition < 1 || dotPosition <= atPosition + 2 || dotPosition + 2 >= email.value.length) {
    console.log('Not valid email')
  }
  else {
    console.log('Valid email')
    emailValidated = true
  }

  // Phone (required, at least 10 numeric digits)
  if (phone.value.length < 10 || /^((([0-9]{3}))|([0-9]{3}))[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/.test(phone.value) === false) {
    console.log('Not valid phone')
  }
  else {
    console.log('Valid phone')
    phoneValidated = true
  }

  // Comment (not required, but if filled in, must be minimum of 5 characters)
  if (comment.value.length > 0 && comment.value.length < 5) {
    console.log('Not valid comment')
  }
  else {
    console.log('Valid comment')
    commentValidated = true
  }

  if (nameValidated === false) {
    errorMessage(name)
  }

  if (emailValidated === false) {
    errorMessage(email)
  }

  if (phoneValidated === false) {
    errorMessage(phone)
  }

  if (commentValidated === false) {
    errorMessage(comment)
  }

  //If all of the inputs validated, return true
  if (nameValidated === true && emailValidated === true && phoneValidated === true && commentValidated === true) {
    return true
  }
  else {
    return false
  }
}

//Error message creation function
function errorMessage (field) {
  var p = document.createElement('p')
  p.innerHTML = 'You have entered an invalid field.'
  p.classList.add('error')
  p.style.color = 'red'
  field.parentElement.appendChild(p)
}
