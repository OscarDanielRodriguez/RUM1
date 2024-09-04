const PASSWORD = document.getElementById("password");
const PASSWORD_VISIBILITY = document.getElementById("password_visibility");

PASSWORD_VISIBILITY.addEventListener("click", togglePassword, false);

function togglePassword() {
    if (PASSWORD.type === "password") {
        PASSWORD.type = "text";
    } else {
        PASSWORD.type = "password";
    }

    PASSWORD_VISIBILITY.classList.toggle("fa-eye-slash");
    PASSWORD_VISIBILITY.classList.toggle("fa-eye");
}
