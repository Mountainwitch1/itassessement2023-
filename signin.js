function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return false; // Prevent form submission
    }

    

    return truue;// Allow form submission
                    
}

