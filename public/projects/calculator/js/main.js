$(document).ready(function(){
//Variables
  var display = $('#display'),
      currentNumber = 0,
      previousNumber = 0,
      currentTotal = 0,
      currentOperator = '=',
      justClicked = false,
      hasRun = false

//Clear
  $('#clearBtn').on('click', function(){
    currentTotal = 0
    previousNumber = 0
    currentNumber = 0
    justClicked = false
    hasRun = false

    display.val('0')
  })

//Equals
  $('#equalBtn').on('click', function(){
    previousNumber = currentNumber
    justClicked = false

    if (hasRun === false) {
      currentNumber = Number(display.val())
    }

    if (currentOperator === '=') {
      display.val(currentNumber)
    }
    else if (currentOperator === '+') {
      currentTotal = currentTotal + currentNumber
      display.val(currentTotal)
      hasRun = true
    }
    else if (currentOperator === '-') {
      currentTotal = currentTotal - currentNumber
      display.val(currentTotal)
      hasRun = true
    }
    else if (currentOperator === '*') {
      currentTotal = currentTotal * currentNumber
      display.val(currentTotal)
      hasRun = true
    }
    else if (currentOperator === '/') {
      currentTotal = currentTotal / currentNumber
      display.val(currentTotal)
      hasRun = true
    }
  })

//Operators
  $('.btn-opr').on('click',function(){
    currentOperator = $(this).val()
    previousNumber = currentNumber
    justClicked = false

    if (hasRun === false) {
      currentNumber = Number(display.val())
    }

    if (previousNumber == '0') {
      currentTotal = currentNumber
      previousNumber = currentNumber
    } else {
      if (currentOperator === '+') {
        currentTotal = currentTotal + currentNumber
      }
      else if (currentOperator === '-') {
        currentTotal = currentTotal - currentNumber
      }
      else if (currentOperator === '*') {
        currentTotal = currentTotal * currentNumber
      }
      else if (currentOperator === '/') {
        currentTotal = currentTotal / currentNumber
      }
    }

    display.val(currentTotal)
  })

//Numbers
  $('.btn-num').on('click', function(){
    var button = $(this).val()

    if (justClicked === false){
      display.val('')
      justClicked = true
    }

    if (display.val() == '0'){
        display.val(button)
    } else {
      display.val(display.val() + button)
    }
  })
})
