$(document).ready(() => {
    
    const validateForm = () => {
        let valid = true;

 
        const email = $('#email').val();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
        if (!email) {
            $('#emailError').text("Please provide a valid email address.");
            valid = false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text("Email must be a valid Northeastern ID");
            valid = false;
        } else {
            $('#emailError').text("");
        }

        
        const username = $('#username').val();
        const usernameRegex = /^[a-zA-Z0-9_]+$/;  
        if (!username) {
            $('#usernameError').text("Please provide a valid user name.");
            valid = false;
        } else if (username.length < 3 || username.length > 15) {
            $('#usernameError').text("Enter a username with 3 to 15 characters.");
            valid = false;
        } else if (!usernameRegex.test(username)) {
            $('#usernameError').text("Username may consist of letters, digits, and underscores only.");
            valid = false;
        } else {
            $('#usernameError').text("");
        }

        
        const password = $('#password').val();
        const capitalLetterRegex = /[A-Z]/;  
        if (!password) {
            $('#passwordError').text("Please provide a valid password.");
            valid = false;
        } else if (password.length < 6 || password.length > 20) {
            $('#passwordError').text("Enter a password with 6 to 20 characters and one capital letter");
            valid = false;
        } else if (!capitalLetterRegex.test(password)) {
            $('#passwordError').text("Password must include at least one capital letter");
            valid = false;
        } else {
            $('#passwordError').text("");
        }

       
        const confirmPassword = $('#confirmPassword').val();
        if (confirmPassword !== password) {
            $('#confirmPasswordError').text("Passwords do not match");
            valid = false;
        } else {
            $('#confirmPasswordError').text("");
        }

        $('#loginButton').prop('disabled', !valid);
        return valid;
    };

  
    $('#loginForm input').on('input', validateForm);

    
    $('#loginButton').click(() => {
        if (validateForm()) {
            sessionStorage.setItem("username", $('#username').val());
            window.location.href = "calculator.html";
        }
    });
});
