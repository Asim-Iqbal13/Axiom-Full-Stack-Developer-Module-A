 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
// function to update class and message for error
 function showError(input, message) {
     // get the parent element of the input field (.form-control)
     const formControl = input.parentElement;
     // replace the class - add error
     formControl.className = 'form-control error'
     // get the small element for the error message
     const small = formControl.querySelector('small');
     // overwrite the text for small element using the input message
     small.innnerText = message;

 }
 //  function to update class for success
 function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success
    
    
    
    
    


 }
 
//Event listeners
 // create event listener for submit button
 form.addEventListener('submit', function(e) {
     //stop page from reloading on submit
     e.preventDefault();
     // check if username input is empty
     if(username.value === '') {
         showError(username, 'username is required');

     } else {
         showSuccess(username);
     }
     // check if email input is empty
     if(email.value === '') {
         showError(email,'email is required');
     } else {
         showSuccess(email);
     }
     // check if password input is empty
     if(password.value === '') {
        showError(password,'password is required');
    } else {
        showSuccess(password);
    }
    // check if password2 input is empty
    if(password2.value === '') {
        showError(password2,'password2 is required');
    } else {
        showSuccess(password2);
    }
 });