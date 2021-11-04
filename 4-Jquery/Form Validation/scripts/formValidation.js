function isEmail(email) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email);
}

function isPhoneNumber(phoneNumber) {
    var regexPhoneNumber = /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/i;
    return regexPhoneNumber.test(phoneNumber);
}

$("#signUpButton").click(function () {
    var errorMessage = "";
    var fieldsMissing = "";

    if ($("#email").val() == "") {
        fieldsMissing += "<br>Email";
    }

    if ($("#phoneNumber").val() == "") {
        fieldsMissing += "<br>Phone Number";
    }

    if ($("#password").val() == "") {
        fieldsMissing += "<br>Password";
    }

    if ($("#confirmPassword").val() == "") {
        fieldsMissing += "<br>Confirm Password";
    }

    if (fieldsMissing != "") {
        errorMessage += "<p>The following field(s) are missing: </p>" + fieldsMissing;
    }


    if (isEmail($("#email").val()) == false) {
        errorMessage += "<p>Your email address is not valid. Please try again.</p>";
        $("#email").css("border", "2px solid red");
        $("#email").css("background-color", "#FFCECE");
    } else {
        $("#email").css("border", "2px solid green");
        $("#email").css("background-color", "#D3FFCE");
    }

    if (isPhoneNumber($("#phoneNumber").val()) == false) {
        errorMessage += "<p>Your phone number is not valid. Please try again.</p>";
        $("#phoneNumber").css("border", "2px solid red");
        $("#phoneNumber").css("background-color", "#FFCECE");
    } else {
        $("#phoneNumber").css("border", "2px solid green");
        $("#phoneNumber").css("background-color", "#D3FFCE");
    }

    if ($("#password").val() != $("#confirmPassword").val()) {
        errorMessage += "<p>Your passwords do not match. Please try again</p>";
        $("#password").css("border", "2px solid red");
        $("#password").css("background-color", "#FFCECE");
        $("#confirmPassword").css("border", "2px solid red");
        $("#confirmPassword").css("background-color", "#FFCECE");
    } else {
        $("#password").css("border", "2px solid green");
        $("#password").css("background-color", "#D3FFCE");
        $("#confirmPassword").css("border", "2px solid green");
        $("#confirmPassword").css("background-color", "#D3FFCE");
    }

    if (errorMessage != "") {
        $("#errorMessage").html(errorMessage);
    } else {
        $("#errorMessage").hide();
    }
});