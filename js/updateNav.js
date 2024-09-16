// Navigation Text Updater
// Levi M
// 16.09.24

// Get the navigation button element
const navLoginText = document.querySelectorAll("#login-text")[0];

// Get any user information if it's available
const user = [
  localStorage.getItem("username"),
  localStorage.getItem("password")
]

// Initiate a checker boolean
let isUserLoggedIn = false;

if(user != null)
{
  if(user[0] != "" && user[1] != "") isUserLoggedIn = true;
  else isUserLoggedIn = false;

  // If they are logged in, make it so they cannot login again. If not make sure that they can only login and not logout
  if(isUserLoggedIn == true) {
      navLoginText.innerText = "Logout";
      navLoginText.setAttribute("href", "../html/logout.html");
  }
  else
  {
      navLoginText.innerText = "Login";
      navLoginText.setAttribute("href", "../html/login.html");
  }
}