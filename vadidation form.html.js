<html>
<body>
<script>  
function validateform(){  
var name =document.myform.name.value;  
var password=document.myform.password.value;  
Var email= document.myform.email.value;
if (name==null || name==""){  
  alert("Name can't be blank")} 
  return false;  

else if(password.length< 6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
   

 </script> 
<form name="myform" method="post" onsubmit="return validateform()" >  
Name: <input type="text" name="name"><br/> 
 
Password: <input type="password" name="password"><br/> 
 
Email:<input type="email"
name="email"></br>
</br>
mobile number  :<input type="mobile number"
name="mobile number "></br>
</br>
<input type="submit" value="submit">  
</form>  
</body>
  </html>