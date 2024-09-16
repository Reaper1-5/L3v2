// Logout Control Script
// Levi M
// 17.09.24

const logoutButton = document.querySelectorAll("#logout-button")[0];

logoutButton.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("username", "");
    localStorage.setItem("password", "");

    window.location = "../index.html";
})