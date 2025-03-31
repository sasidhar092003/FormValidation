document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        let isValid = true;

        if (name.length < 3) {
            document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
            isValid = false;
        }

        if (!email.includes('@')) {
            document.getElementById('emailError').textContent = 'Enter a valid email address.';
            isValid = false;
        }

        if (phone === '123456789' || phone.length !== 10 || !/^\d+$/.test(phone)) {
            document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number.';
            isValid = false;
        }

        if (password === 'password' || password === name || password.length < 8) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters and not "password" or your name.';
            isValid = false;
        }

        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
            isValid = false;
        }

        if (isValid) {
            localStorage.setItem('userData', JSON.stringify({ name, email, phone, password }));
            window.location.href = 'display.html';
        }

        // Scroll to the top of the form-details div after error messages appear.
        document.querySelector('.form-details').scrollTo(0, 0);
    });
});