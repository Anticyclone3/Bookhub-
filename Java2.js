


// Sample JavaScript (Java2.js) for BookHub with improvements

// Logout
function logout() {
    currentUser = null;
    alert('Logged out successfully.');
    document.getElementById('authButtons').style.display = 'block';
    document.getElementById('userMenu').style.display = 'none';
    updateCartCount();
    showPage('home');
}

 