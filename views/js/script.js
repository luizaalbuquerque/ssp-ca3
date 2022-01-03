/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const item = document.getElementById('item')
const price = parseInt(document.getElementById('price').value)
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (item.value === '' || item.value == null) {
      messages.push('Item is required')
    }
  
    if (price.value.length >= 20) {
      messages.push('Price must be less than 20 characters')
    }
  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  })
  function deleting(){

 alert("The product was Deleted!");
    
    }
    function submited(){

      alert("The product was Submited!");
         
         }

         function total(){

          alert("Go back to Store to check the total");
             
             }