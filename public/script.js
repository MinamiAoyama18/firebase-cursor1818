// Simple example credentials (In a real app, you'd use Firebase Authentication)
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "pw4admin";

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to dashboard
        window.location.href = '/dashboard.html';
    } else {
        errorMessage.style.display = 'block';
    }
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/index.html';
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

