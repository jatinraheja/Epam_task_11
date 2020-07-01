 function validate()
    {
        var email = document.getElementById("email");
        var pass = document.getElementById("password");
        if(email.value.trim()=="" && pass.value.trim()=="")
            {
                alert("Blank username and password");
            }
        else if(email.value.trim()=="")
            {
                alert("Blank Username")
            }
        else if(pass.value.trim()=="")
            {
              alert("Blank password")
            }
        else
            {
                
            }
    }