"use strict";

var input = document.querySelector("#input");
var label = document.querySelector("#label");
var search = document.querySelector("#search-terms");
var toDoList = document.querySelector('#todo-list');
var listCounter = document.querySelector('#list-counter');
var completedTasks = 0;

// register clicks and toggle classes
label.addEventListener("click", function () {
  //If the search has a value, create a list item
  if (search.value.length > 0) {
    createListItem()
  }

  //Show or hide the search input if it is in focus or not
  if (input.classList.contains("focus")) {
    input.classList.remove("focus");
    label.classList.remove("active");
    search.disabled = true;
    search.blur();
  } else {
    input.classList.add("focus");
    label.classList.add("active");
    search.disabled = false;
    search.focus();
  }

  //run the helper functions
  randomPlaceholderShit();
  checkLogo();
  updateCounter();
  checkCheckboxes();
});


input.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    e.preventDefault()
    //If the search has a value, create a list item
    if (search.value.length > 0) {
      createListItem()
    }

    //Show or hide the search input if it is in focus or not
    if (input.classList.contains("focus")) {
      input.classList.remove("focus");
      label.classList.remove("active");
      search.disabled = true;
      search.blur();
    } else {
      input.classList.add("focus");
      label.classList.add("active");
      search.disabled = false;
      search.focus();
    }

    //run the helper functions
    randomPlaceholderShit();
    checkLogo();
    updateCounter();
    checkCheckboxes();
  }
});

// register clicks outisde search box, and toggle correct classes
document.addEventListener("click", function (e) {
  var clickedID = e.target.id;
  if (clickedID != "search-terms" && clickedID != "search-label") {
    if (input.classList.contains("focus")) {
      input.classList.remove("focus");
      label.classList.remove("active");
    }
  }
});

//////////////////
//HELPER FUNCTIONS
//////////////////

//Various placeholder text to fill in randomly on the input
function randomPlaceholderShit() {
  var placeholderArray = ['Don\'t you have shit to do?', 'Write your shit down.', 'Enter your shit.', 'List your shit to do.', 'Shouldn\'t you do this shit?', 'You should do this shit.', 'Hurry up with your shit.', 'All your shit in one place.', 'Do this shit.', 'Get your shit done.'];

  document.querySelector('#search-terms').placeholder = placeholderArray[Math.floor(Math.random() * (placeholderArray.length - 1))];
};

//If the list is empty, show the large logo, otherwise show the small logo.
function checkLogo() {
  var logo = document.querySelector('.logo');
  var fontSize = 90;

  if (toDoList.innerHTML.includes('li') === true) {
    logo.classList.add("logo-small");

    //Make the logo decrease in size with each added list item
    var smallLogoH1 = document.querySelector('.logo-small').getElementsByTagName('h1');
    var listItems = toDoList.getElementsByTagName('li');
    fontSize = fontSize - 5 * listItems.length;

    for (var i = 0; i < smallLogoH1.length; i++) {
      if (fontSize < 25) {
        smallLogoH1[i].style["font-size"] = 25 + 'px';
      } else {
        smallLogoH1[i].style["font-size"] = fontSize + 'px';
      }
    }
  }
};

//Check the number of todo items in the list, and update the counter
function updateCounter() {
  var toDoListItems = document.querySelectorAll('.todo-items');

  listCounter.innerHTML = toDoListItems.length - completedTasks;
};

//Check the checkboxes
function checkCheckboxes() {
  var checkboxArray = document.querySelectorAll('.checkbox');

  for (var i = 0; i < checkboxArray.length; i++) {
    checkboxArray[i].addEventListener("click", function () {
      if (!this.src.includes('inactive')) {
        this.src = 'images/cb-inactive.png';
        this.parentNode.classList.remove('completed');
        completedTasks = completedTasks - 1;
        updateCounter();
      } else if (this.src.includes('inactive')) {
        this.src = 'images/cb-active.png';
        this.parentNode.classList.add('completed');
        completedTasks = completedTasks + 1;
        updateCounter();
      }
    });
  }
};

//Create list item

function createListItem () {
  var newToDo = search.value;
  var li = document.createElement('li');
  var checkbox = document.createElement('img');

  //Set checkbox initial values
  checkbox.src = 'images/cb-inactive.png';
  checkbox.setAttribute('width', '16px');
  checkbox.setAttribute('height', '16px');
  checkbox.classList.add('checkbox');

  //Set list item initial values
  li.appendChild(checkbox);
  li.classList.add('todo-items');
  li.innerHTML += newToDo;

  //Add the list item to the todo list
  toDoList.appendChild(li);

  //Reset the initial search value to nothing
  search.value = "";
}
