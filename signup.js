$(".alert").hide()
$(document).ready(function () {

    viewPassword()

    $(".alert").hide()

    //handling alert before click the button

    //for first name
    $("#fname").on("input", () => fnameAlert())

    //for last name
    $("#lname").on("input", () => lnameAlert())

    //for email
    $("#email").on("input", () => emailAlert())

    //for phone
    $("#phone").on("input", () => phoneAlert())

    //for password
    $("#password").on("input", () => passwordAlert())

    //for confirm password
    $("#cpassword").on("input", () => cpasswordAlert())

    //for Tearms and Condition
    $("#tnc").on("input", () => tncAlert())

    //Handling click funtion
    $(".btn").click(
        function (event) {
            event.preventDefault();
            $(".alert").hide()
            validData = validation();
            if (validData) {
                console.log("Succesful Sign in");
                console.log(validData)
                $(".alert").fadeIn("slow", function(){
                    window.location.href="home.html";
                })

            }
            else {
                console.log("Eneter Data");
                console.log(validData);

                fnameAlert()
                lnameAlert()
                emailAlert()
                phoneAlert()
                passwordAlert()
                cpasswordAlert()
                tncAlert()

            }

        }
    );
});

//ALERT FUNTIONS

//for first name
function fnameAlert() {

    const fname = $("#fname").val()
    nameCheck(fname) ? $("#alertFname").hide() && $(".form-control:eq(0)").attr("class", "form-control") :
        $("#alertFname").show() && $(".form-control:eq(0)").attr("class", "form-control form-control-alert")
}

//for last name
function lnameAlert() {

    const fname = $("#lname").val()
    nameCheck(fname) ? $("#alertLname").hide() && $(".form-control:eq(1)").attr("class", "form-control") :
        $("#alertLname").show() && $(".form-control:eq(1)").attr("class", "form-control form-control-alert")
}

//for email
function emailAlert() {

    mailValidation() ? $("#alertEmail").hide() && $(".form-control:eq(2)").attr("class", "form-control") :
        $("#alertEmail").show() && $(".form-control:eq(2)").attr("class", "form-control form-control-alert")
}

//for phone
function phoneAlert() {

    phoneValidation() ? $("#alertPhone").hide() && $(".form-control:eq(3)").attr("class", "form-control") :
        $("#alertPhone").show() && $(".form-control:eq(3)").attr("class", "form-control form-control-alert")
}

//for password
function passwordAlert() {

    password() ? $("#alertPassword").hide() && $(".form-control:eq(4)").attr("class", "form-control") && $('#password').popover('hide') :
        $("#alertPassword").show() && $(".form-control:eq(4)").attr("class", "form-control form-control-alert")
}

//for confirm password
function cpasswordAlert() {

    cPassword() ? $("#alertCpassword").hide() && $(".form-control:eq(5)").attr("class", "form-control") :
        $("#alertCpassword").show() && $(".form-control:eq(5)").attr("class", "form-control form-control-alert")
}

//for terms and condition
function tncAlert() {

    $("#tnc").prop('checked') ? $("#alertTnc").hide() && $(".form-control:eq(6)").attr("class", "form-control") :
        $("#alertTnc").show() && $(".form-control:eq(6)").attr("class", "form-control form-control-alert")
}


//PATTERN VALIDATIONS

// Over All validaion
function validation() {
    validData = nameValidation() && mailValidation() && phoneValidation() && passwordValitaion() && $("#tnc").prop('checked') ? true : false

    return validData
}

//Name Validation
function nameValidation() {
    function check(result) {
        const checked = /^[A-Z][a-z]+$/ | /^[A-Za-z]+$/.test(result);
        return checked
    }

    const fname = $("#fname").val()
    const lname = $("#lname").val()

    validName = (check(fname) && check(lname) == true) && (fname.toLowerCase() != lname.toLowerCase()) && (fname.length >= 3 && lname.length >= 3) ? true : false

    return validName

}

function nameCheck(result) {
    const checked = /^[A-Z][a-z]+$/ | /^[A-Za-z]+$/.test(result);
    return checked
}

//Mail Validation 
function mailValidation() {
    const checked = /[a-zA-Z0-9.-_%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test($("#email").val())

    return checked
}

//Phone Number Validation
function phoneValidation() {
    const checked = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test($("#phone").val());

    return checked

}

//Password Validation
function passwordValitaion() {
    const checked = password() && cPassword() ? true : false;

    return checked;
}

//password
function password() {
    const checked = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?/\\|`~])[A-Za-z\d!@#$%^&*()_+{}[\]:;"'<>,.?/\\|`~]{8,}$/.test($("#password").val())

    return checked
}

//cpassword
function cPassword() {
    const checked = ($("#password").val() == $("#cpassword").val()) && ($("#cpassword").val()).length >= 8 ? true : false;
    return checked;
}



// View Password Funtion
function viewPassword() {
    $("#viewpassword1").click(function () {

        ($("#password").attr("type")) == "password" ? $(this).attr("src", "view.png") && $("#password").attr("type", "text") : $(this).attr("src", "hide.png") && $("#password").attr("type", "password")


    })

    $("#viewpassword2").click(function () {

        ($("#cpassword").attr("type")) == "password" ? $(this).attr("src", "view.png") && $("#cpassword").attr("type", "text") : $(this).attr("src", "hide.png") && $("#cpassword").attr("type", "password")
    })
}

