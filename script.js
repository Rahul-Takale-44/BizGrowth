document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple check for demo purposes
  if (username === "admin" && password === "admin123") {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login. Try admin / admin123");
  }
});
