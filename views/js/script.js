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


form.addEventListener('submit', (e) => {
    let messages = []
    if (item.value === '' || item.value == null) {
      messages.push('Item is required')
    }
  
    if (price.value.length <= 2) {
      messages.push('price must be longer than 2 characters')
    }
  
    if (price.value.length >= 20) {
      messages.push('Price must be less than 20 characters')
    }
  
    if (price.value === 'price') {
      messages.push('Price cannot be price')
    }
  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  })

function doSomething(){

    alert("hey im doing something");
    
    }