const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

body.classList.add("light-mode");

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    toggleButton.textContent = "Switch to Light Mode";
  } else {
    body.classList.replace("dark-mode", "light-mode");
    toggleButton.textContent = "Switch to Dark Mode";
  }
});
