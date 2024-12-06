function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === "admin" && password === "password123") {
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid username or password';
    }
}

function handleLogout() {
    window.location.href = 'index.html';
}

// Check login status on protected pages
function checkLoginStatus() {
    if (window.location.pathname === '/dashboard.html') {
        if (!localStorage.getItem('isLoggedIn')) {
            window.location.href = '/index.html';
        }
    }
}

// Run check when page loads
checkLoginStatus();

