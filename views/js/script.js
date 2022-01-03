/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/* Code Reference: https://github.com/mikhail-cct/ssp-practical by Mikhail. Accessed on 28th of December 2021. */


// variables to store the user input
const item = document.getElementById('item')
const price = document.getElementById('price')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// when you click in submit this will check if there is an input in the box
// if it is empty will output the following message 
form.addEventListener('submit', (e) => {
  let messages = []
      if (item.value === '' || item.value == null) {
        messages.push('Item is required')
      }

  // check the 'price'input, if it is iquals or higher than 20 characters, 
  // will output the following message 
  if (price.value.length >= 20) {
    messages.push('Price must be less than 20 characters')
  }

  // this is used for preventing the form from submmiting 
  // sends the error to the variable created and join all by a coma, so we have it organized 
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

// function to confirm deletion 
function deleting() {

  alert("The product was Deleted!");

}

// function to confirm submition 
function submited() {

  alert("The product was Submited!");

}

// function user-friendly to direct the user back to 'Store' to check total 
function total() {

  alert("Go back to Store to check the total");

}