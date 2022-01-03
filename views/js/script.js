/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const item = document.getElementById('item')
const price = document.getElementById('price')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

check('price').isLength({ min: 2 })
.withMessage('Price Must Be at Least 2 Characters')

form.addEventListener('submit', (e) => {
    let messages = []
    if (item.value === '' || item.value == null) {
      messages.push('Item is required')
    }
  
    if (price.value.length >= 20) {
      messages.push('Price must be less than 20 characters')
    }

    if (isNaN(price)) {
      messages.push('Price has to be numeric')
    }

  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  })

function doSomething(){

    alert("hey im doing something");
    
    }