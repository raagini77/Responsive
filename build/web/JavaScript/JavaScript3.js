function call() {
      $(".please").html("you selected Male");
       $(".please1").empty();
 }
function calle() {
       $(".please1").html("you selected Female");
       $(".please").empty();
   }
$(document).ready(function() {
         $("form[name='registration']").validate({
    rules: {
         firstname: "required",
      lastname: "required",
      username:{
          required:true,
          minlength:5
      },
  
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo:"#password"
      },
        agree: "required"
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      username:{
          required:"please enter username",
          minlength:"username must be atleast 5 characters"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
    
      },
       confirm_password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
               equalTo:"please enter same password as above"

      },
       email: "Please enter a valid email address",
       agree: "Please accept our policy"
    }
  });
});

    