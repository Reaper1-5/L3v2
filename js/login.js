// Login Handler
// Levi M
// 11.09.24

const form = document.querySelectorAll("#login-form")[0];
const button = document.querySelectorAll("#form-submit")[0];

button.addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.clear();

    const username = form.querySelectorAll("#username")[0].value;
    const password = form.querySelectorAll("#password")[0].value;

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)

    window.location = "../index.html";
});