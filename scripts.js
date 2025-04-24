// Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación simple (puedes reemplazar por lógica más compleja si quieres)
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('loggedInUser', username); // Guarda "sesión"
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas');
    }
});

// Registro
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        // Guardamos las credenciales solo como demo (¡no seguro!)
        localStorage.setItem('registeredUser', username);
        localStorage.setItem('registeredPass', password);
        alert('Registro exitoso');
        window.location.href = 'login.html';
    } else {
        alert('Las contraseñas no coinciden');
    }
});

// Home - Validar que esté logueado
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/project-folder/') {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
        window.location.href = 'login.html'; // Redirigir si no está logueado
    } else {
        document.body.innerHTML += `<p style="text-align:center;">Hola, ${user} 👋 <br><a href="#" onclick="logout()">Cerrar sesión</a></p>`;
    }
}

// Logout
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}


document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password === confirmPassword) {
        alert('Registro exitoso');
        window.location.href = 'login.html'; // Redirigir a la página de login
    } else {
        alert('Las contraseñas no coinciden');
    }
});
