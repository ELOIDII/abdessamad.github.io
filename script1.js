function gotolink(){
    window.location='#';
  }
function validate(){
   var username=document.getElementById("username").value;
   var password=document.getElementById("password").value;
   if(username=="admin" && password=="user"){
    alert("login succesfully");
    return false;
   }
   else{
    alert("login failed")
   }
}
function save(){
  var username1=document.getElementById("username").value;
  var email=document.getElementById("email").value;
  var password1=document.getElementById("password").value;
  var cnfpassword1=document.getElementById("cnfpassword").value;
  var data=[];
  data.push(username1);
  data.push(email);
  data.push(password1);
  data.push(cnfpassword1);

  var data_string = JSON.stringify(data);
  var file = new Blob([data_string],{type:"text"});
  var anchor = document.createElement("a");
  anchor.href=URL.createObjectURL(file);
  anchor.download="save.txt";
  anchor.click();
  return false;
}
