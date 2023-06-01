// const form = document.querySelector('#create-account-form');
// const firstnameInput = document.querySelector('#firstname');
// const lastnameInput = document.querySelector('#lastname');
// const emailInput = document.querySelector('#email');
// const contactInput = document.querySelector('#contact');
// const genderInput = document.querySelector('#gender');









// form.addEventListener('submit', (event)=>{
    
//     validateForm();
//     console.log(isFormValid());
//     if(isFormValid()==true){
//         form.submit();
//      }else {
//          event.preventDefault();
//      }

// });

// function isFormValid(){
//     const inputContainers = form.querySelectorAll('.input-group');
//     let result = true;
//     inputContainers.forEach((container)=>{
//         if(container.classList.contains('error')){
//             result = false;
//         }
//     });
//     return result;
// }

// function validateForm() {
//     //FirstName
//     if(firstnameInput.value.trim()==''){
//         setError(firstnameInput, 'Name can not be empty');
//     }else if(firstnameInput.value.trim().length <5 || firstnameInput.value.trim().length > 15){
//         setError(firstnameInput, 'Name must be min 5 and max 15 charecters');
//     }else {
//         setSuccess(firstnameInput);
//     }

//     //Lastname
//     if(lastnameInput.value.trim()==''){
//         setError(lastnameInput, 'LastName can not be empty');
//     }else if(lastnameInput.value.trim().length <5 || lastnameInput.value.trim().length > 15){
//         setError(lastnameInput, 'Name must be min 5 and max 15 charecters');
//     }else {
//         setSuccess(lastnameInput);
//     }
//     //EMAIL
//     if(emailInput.value.trim()==''){
//         setError(emailInput, 'Provide email address');
//     }else if(isEmailValid(emailInput.value)){
//         setSuccess(emailInput);
//     }else{
//         setError(emailInput, 'Provide valid email address');
//     }
//     //Contact
//     if(contactInput.value.trim()==''){
//         setError(contactInput, 'contact can not be empty');
//     }else if(contactInput.value.trim().length <10 || contactInput.value.trim().length > 10){
//         setError(contactInput, 'contact must be 10 charecters');
//     }else {
//         setSuccess(contactInput);
//     }

//     //gender
//     if(genderInput.value.trim()==''){
//         setError(genderInput, 'gender can not be empty');
//     }else if(genderInput.value.trim().length <10 || genderInput.value.trim().length > 10){
//         setError(genderInput, 'gender must be selectes');
//     }else {
//         setSuccess(contactInput);
//     }

// }
//     function setError(element, errorMessage) {
//         const parent = element.parentElement;
//         if(parent.classList.contains('success')){
//             parent.classList.remove('success');
//         }
//         parent.classList.add('error');
//         const paragraph = parent.querySelector('p');
//         paragraph.textContent = errorMessage;
//     }
    
//     function setSuccess(element){
//         const parent = element.parentElement;
//         if(parent.classList.contains('error')){
//             parent.classList.remove('error');
//         }
//         parent.classList.add('success');
//     }
    
// function isEmailValid(email){
//     const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     return reg.test(email);
// }

    
   









{/* <script>

    let Form = document.getElementById("RegisterForm");




    Form.addEventListener("submit", (e) => {

      e.preventDefault();




      let firstname = document.getElementById("fname");

      let lastname = document.getElementById("lname");




      if (firstname.value == "" || lastname.value == "") {

        alert("Ensure you input a value in both fields!");

      } else {

        // perform operation with form input

        alert("This form has been successfully submitted!");

        console.log(

          `This form has a username of ${firstname.value} and password of ${lastname.value}`

        );




        username.value = "";

        password.value = "";

}

});
 */}



  