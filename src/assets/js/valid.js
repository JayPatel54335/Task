function my(emailId) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(emailId.value.match(mailformat))
{
alert("congratulations!! Email is valid");
return true;
}
else
{
alert("Invalid email address.");

return false;
}

}

function isCheck(even){
    var num = document.getElementById('evenOdd').value;
    // alert(num);
    if((num%2) == 0){
    document.getElementById('showMssg').innerHTML = +num+"  is an even number";
    }
    else{
    document.getElementById('showMssg').innerHTML = +num+"  is an odd number";
    }
    
    if(num === ""){
    document.getElementById('showMssg').innerHTML = "";
    }
    }

function myFunction(demo) {
        const message = document.getElementById("p01");
        message.innerHTML = "";
        let x = document.getElementById("demo").value;
        try { 
          if(x.trim() == "")  throw "empty";
          if(isNaN(x)) throw "not a number";
          x = Number(x);
          if(x < 5)  throw "too low";
          if(x > 10)   throw "too high";
        }
        catch(err) {
          message.innerHTML = "Input is " + err;
        }
      }   