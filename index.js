
var Name=document.getElementById('name');
var email=document.getElementById('email');

var phno=document.getElementById('phno');
var address=document.getElementById('address');
var span=document.getElementsByTagName('span');


function myFunction() {
  document.getElementById("form").reset();
}




    function validate(){
        const re=/[1-9][0-9]{9}/;

        const regex1= /^([a-z0-9\.-]+)@(christuniversity)\.(in)$/;
        const regex2= /^[a-zA-Z]+$/
        const regex3 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
        const isValidLength = /^.{8,16}$/;
        //name validation
        if(Name.value.trim().length<3){
            $("#name").addClass("is-invalid")
            $("#name").removeClass("is-valid")
            span[1].innerText="Namelength should be greater than two";
            span[1].className="invalid-feedback";
            return false
        }

else if(!re.test(phno.value.trim())){ $("#phno").addClass("is-invalid")
            $("#phno").removeClass("is-valid")
        span[1].innerText=" phone number must contain only 10 didgits";
            span[1].className="invalid-feedback";
            return false
    }

        else if(!regex2.test(Name.value.trim())){
            $("#name").addClass("is-invalid")
            $("#name").removeClass("is-valid")
            span[1].innerText="special characters are not allowed in Name";
            span[1].className="invalid-feedback";
            return false
        }
        else if(!regex1.test(email.value.trim())){
            $("#email").addClass("is-invalid")
                $("#email").removeClass("is-valid")
                span[2].innerText="invalid email : re-enter according to format";
                span[2].className="invalid-feedback";
                return false
        }
       
        else{
            $("#name").addClass("is-valid")
            $("#name").removeClass("is-invalid")
            $("#email").addClass("is-valid")
            $("#email").removeClass("is-invalid")
            $("#phno").addClass("is-valid")
            $("#phno").removeClass("is-invalid")
            
           
            return true
        }
}

email.onkeyup=function()
    {
        const regex1= /^([a-z0-9\.-]+)@(christuniversity)\.(in)$/;
        if(regex1.test(email.value.trim()))
        {

                $("#email").addClass("is-valid")
                $("#email").removeClass("is-invalid")
                span[2].innerText="Email looking good";
        }
        else{
                $("#email").addClass("is-invalid")
                $("#email").removeClass("is-valid")
                span[2].innerText="invalid email";
        }
    }
phno.onkeyup=function(){



const re=/[1-9][0-9]{9}/;
if(re.test(phno.value.trim()))
        {

                $("#phno").addClass("is-valid")
                $("#phno").removeClass("is-invalid")
                span[2].innerText="valid Phone number";
        }
        else{
                $("#phno").addClass("is-invalid")
                $("#phno").removeClass("is-valid")
                span[2].innerText="invalid Phone number";
        }

}
Name.onkeyup=function(){
    const regex2= /^[a-zA-Z]+$/;
    if(Name.value.trim().length<3){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[1].innerText="Name length should be greater than two";
    }
    else if(!regex2.test(Name.value.trim())){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[1].innerText="special characters are not allowed in Name";
    }
    else{
        $("#name").addClass("is-valid")
        $("#name").removeClass("is-invalid")
        span[1].innerText="Name looks good";
    }
}

function numlock(event)
{
    let code=event.which;
    if(code>47&&code<58)
    return false;
    else
    return true;
}


function phoneval(event){
        let code=event.which;
        if(code>64 && code<223){
        return false;
        }
        else return True;
    }
