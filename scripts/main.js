$(document).ready(function() {

    // Sign Up Form
    $('#signUpForm').submit(function(event) {
        event.preventDefault();

        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Additional password and confirm password validation
            const password = $('#password').val();
            const confirmPassword = $('#confirmPassword').val();

            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

            if (!password.match(passwordRegex)) {
                $('#password').addClass('is-invalid');
                event.stopPropagation();
            } else {
                $('#password').removeClass('is-invalid');
            }

            if (password !== confirmPassword) {
                $('#confirmPassword').addClass('is-invalid');
                event.stopPropagation();
            } else {
                $('#confirmPassword').removeClass('is-invalid');
            }

            if ($('#password').hasClass('is-invalid') || $('#confirmPassword').hasClass('is-invalid')) {
                // Password or Confirm Password is invalid, do not proceed with submission
            } else {
                window.location.href = 'pages/browse.html';
            }
        }

        $(this).addClass('was-validated');
    });

});
