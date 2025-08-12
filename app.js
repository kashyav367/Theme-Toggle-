function applyTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
}

function detectSystemTheme() {
    applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

// Apply saved theme or system preference
const savedTheme = localStorage.getItem("theme");
savedTheme ? applyTheme(savedTheme) : detectSystemTheme();

// Listen for system theme changes if no manual selection
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!localStorage.getItem("theme")) detectSystemTheme();
});

// Toggle button click
document.querySelector("button").addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light") ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});
