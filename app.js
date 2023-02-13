var listofAccounts = [];

function regFunction(){
  var email = document.getElementById("email");
  var password = document.getElementById("regPsw");
  var rPassword = document.getElementById("psw-repeat");

 if(email.value !== "" && password.value !== "" && password.value == rPassword){
   var data = {
     userEmail : email.value,
     userPassword : password.value
   }
 
   listofAccounts.push(data);
   email.value = "";
   password.value = "";
   rPassword.value = "";
   console.log(listOfAccounts);
   

  }
  
}




