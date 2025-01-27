
const users = [];

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName').value;
    const country = document.getElementById('country').value;
    const birthdate = document.getElementById('birthdate').value;

    if (email && password && fullName) {
        users.push({ email, password, fullName, country, birthdate });
        alert('Registration successful!');
        showLoginForm();
    } else {
        alert('Please fill in all required fields.');
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert('Login successful!');
        showProfile(user);
    } else {
        alert('Invalid email or password.');
    }
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
}

function showProfile(user) {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('profile').style.display = 'block';

    document.getElementById('profileName').textContent = user.fullName;
    document.getElementById('profileEmail').textContent = user.email;
    document.getElementById('profileFullName').textContent = user.fullName;
    document.getElementById('profileCountry').textContent = user.country;
    document.getElementById('profileBirthdate').textContent = user.birthdate;

    document.getElementById('loginLink').style.display = 'none';
    document.getElementById('registerLink').style.display = 'none';
    document.getElementById('logoutLink').style.display = 'inline';
}

function logout() {
    alert('Logged out successfully!');
    showLoginForm();
    document.getElementById('loginLink').style.display = 'inline';
    document.getElementById('registerLink').style.display = 'inline';
    document.getElementById('logoutLink').style.display = 'none';
}

document.getElementById('loginLink').onclick = showLoginForm;
document.getElementById('registerLink').onclick = showRegisterForm;
document.getElementById('logoutLink').onclick = logout;